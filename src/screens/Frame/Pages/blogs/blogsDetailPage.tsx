import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { FrameWrapperSubsection } from "../../sections/FrameWrapperSubsection";
import { Header } from "../../components/header";
import { DivSubsection } from "../../sections/DivSubsection";
import { SectionComponentNodeSubsection } from "../../sections/SectionComponentNodeSubsection";
import { allBlogPosts } from "./blogsData";
import { useParams } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // ✅ social icons
import { IconType } from "react-icons";

const socialLinks: {
  icon: IconType;
  name: string;
  baseUrl: string;
  hoverColor: string;
}[] = [
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    baseUrl: "https://www.linkedin.com/sharing/share-offsite/?url=",
    hoverColor: "#0077B5",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
    baseUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    hoverColor: "#1877F2",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    baseUrl: "https://twitter.com/intent/tweet?url=",
    hoverColor: "#1DA1F2",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    baseUrl: "https://www.instagram.com/", // Instagram doesn't allow direct URL shares
    hoverColor: "#E4405F",
  },
];

const BlogsDetailPage = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const blog = allBlogPosts.find((post) => post.slug === slug);

  const [tableOfContentsItems, setTableOfContentsItems] = useState<
    { label: string; id: string; active: boolean }[]
  >([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isAsideFixed, setIsAsideFixed] = useState(true);
  const [asideTop, setAsideTop] = useState(0);

  // ✅ Always scroll to top when opening this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Generate TOC dynamically from blog content
  useEffect(() => {
    if (!blog) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");
    const headings = Array.from(doc.querySelectorAll("h2")).map((el) => ({
      label: el.textContent || "",
      id: el.id,
    }));

    setTableOfContentsItems(
      headings.map((heading) => ({
        ...heading,
        active: heading.id === activeSection,
      }))
    );
  }, [activeSection, blog]);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("h2[id]");
      let currentActive = "";
      let closestDistance = Infinity;

      headingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);
        if (distanceFromTop < closestDistance && rect.top <= 300) {
          closestDistance = distanceFromTop;
          currentActive = element.id;
        }
      });

      if (!currentActive && headingElements.length > 0) {
        currentActive = headingElements[0].id;
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }

      const frameWrapper = document.querySelector(".frame-wrapper-subsection");
      if (frameWrapper) {
        const frameRect = frameWrapper.getBoundingClientRect();
        const shouldFix = frameRect.top > window.innerHeight * 0.8;
        setIsAsideFixed(shouldFix);
      }
    };

    const mainContent = document.querySelector("main");
    if (mainContent) {
      const rect = mainContent.getBoundingClientRect();
      setAsideTop(rect.top + window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleShare = async (baseUrl: string) => {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
    window.open(`${baseUrl}${encodeURIComponent(currentUrl)}`, "_blank");
  };

  if (!blog) {
    return (
      <div className="text-white p-10">
        <h2>Blog not found</h2>
      </div>
    );
  }

  // Convert blog.content into React nodes with styles
  const renderContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");
    const nodes = Array.from(doc.body.childNodes);

    return nodes.map((node, index) => {
      if (node.nodeName === "H2") {
        const el = node as HTMLElement;
        return (
          <h2
            key={index}
            id={el.id}
            className="font-bold text-white text-2xl sm:text-[28px] leading-[38px] mb-4 scroll-mt-8"
          >
            {el.textContent}
          </h2>
        );
      }
      if (node.nodeName === "P") {
        return (
          <p
            key={index}
            className="text-[#adb2b9] text-base sm:text-lg leading-7 mb-6"
          >
            {node.textContent}
          </p>
        );
      }
      if (node.nodeName === "BLOCKQUOTE") {
        return (
          <blockquote
            key={index}
            className="relative pl-6 border-l-4 border-gray-600 text-white italic mb-8"
          >
            {node.textContent}
          </blockquote>
        );
      }
      return null;
    });
  };

  return (
    <>
      <Header />
      {/* Page layout */}
      <div className="w-full min-h-screen bg-[#00030c]">
        <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-12 lg:px-[120px] pt-10 lg:pt-20 relative">
          {/* Main Content */}
          <main className="w-full lg:w-3/4 pr-0 lg:pr-4">
            <article className="flex flex-col gap-14">
              <header>
                <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-[42px] mb-4">
                  {blog.title}
                </h1>
                <time className="opacity-70 text-[#adb2b9] text-sm sm:text-base">
                  {blog.date}
                </time>
              </header>

              <img
                className="w-full h-auto max-h-96 object-cover rounded-lg"
                alt={blog.title}
                src={blog.image}
              />

              {/* Render styled blog content */}
              <section className="flex flex-col gap-6">
                {renderContent()}
              </section>
            </article>
          </main>

          {/* Sidebar */}
          <aside
            className="hidden lg:flex w-1/4 flex-col"
            style={{
              position: isAsideFixed ? "fixed" : "absolute",
              top: isAsideFixed ? "160px" : `${asideTop}px`,
              right: isAsideFixed ? "calc((100% - 1200px) / 4)" : "30px",
              width: "23%",
              maxWidth: "360px",
            }}
          >
            {/* On This Page */}
            <Card className="border-l border-[#adb2b9b2] border-t-0 border-r-0 border-b-0 rounded-none bg-transparent">
              <CardContent className="p-8">
                <div className="w-full max-w-[300px]">
                  <h3 className="font-bold text-[#555961] text-sm tracking-[1px] leading-[18px] mb-8">
                    ON THIS PAGE
                  </h3>
                  <nav className="flex flex-col gap-5">
                    {tableOfContentsItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left text-base tracking-[0] leading-6 transition-colors cursor-pointer ${
                          item.active
                            ? "font-bold text-white"
                            : "font-medium text-[#adb2b9] hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </CardContent>
            </Card>

            {/* Author + Share */}
            <Card className="border-l border-t border-[#adb2b9b2] border-r-0 border-b-0 rounded-none bg-transparent">
              <CardContent className="p-6">
                <div className="w-full max-w-[300px]">
                  <img
                    className="w-[46px] h-[46px] mb-4 rounded-full border border-gray-700 shadow-md object-cover"
                    alt={blog.authorName}
                    src={blog.authorImage}
                  />
                  <div className="mb-8">
                    <h4 className="text-white text-xl font-normal mb-0.5">
                      {blog.authorName}
                    </h4>
                    <p className="opacity-70 text-[#adb2b9] text-base font-medium">
                      {blog.authorRole}
                    </p>
                  </div>

                  {/* ✅ Social Share Buttons */}
                  <div>
                    <h5 className="font-bold text-white text-base mb-3">
                      Share Article
                    </h5>
                    <div className="flex items-center gap-3">
                      {socialLinks.map(
                        ({ icon: Icon, baseUrl, hoverColor }, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleShare(baseUrl)}
                            className="w-10 h-10 rounded-full border border-[#adb2b9] flex items-center justify-center text-[#adb2b9] transition-all"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                hoverColor;
                              e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.color = "#adb2b9";
                            }}
                          >
                            {Icon({ size: 18 })}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Footer sections (scroll trigger ends here) */}
        <div className="frame-wrapper-subsection">
          <FrameWrapperSubsection />
        </div>
        <DivSubsection />
        <SectionComponentNodeSubsection />
      </div>
    </>
  );
};

export default BlogsDetailPage;
