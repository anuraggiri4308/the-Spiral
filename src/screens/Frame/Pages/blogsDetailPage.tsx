import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { FrameWrapperSubsection } from "../sections/FrameWrapperSubsection";
import { Header } from "../components/header";
import blog1 from "/images/blog-1.svg";
import { DivSubsection } from "../sections/DivSubsection";
import { SectionComponentNodeSubsection } from "../sections/SectionComponentNodeSubsection";

export const blogsdetailPage = (): JSX.Element => {
  const [tableOfContentsItems, setTableOfContentsItems] = useState<
    { label: string; id: string; active: boolean }[]
  >([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const headings = [
      { label: "What is growth hack?", id: "what-is-growth-hack" },
      {
        label: "How to start growing business?",
        id: "how-to-start-growing-business",
      },
    ];

    setTableOfContentsItems(
      headings.map((heading) => ({
        ...heading,
        active: heading.id === activeSection,
      }))
    );
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("h2[id]");
      let currentActive = "";

      headingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActive = element.id;
        }
      });

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

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

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[#00030c] overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-12 lg:px-[120px] pt-10 lg:pt-20">
          {/* Main Content */}
          <main className="w-full lg:w-3/4 lg:max-h-screen lg:overflow-y-scroll pr-0 lg:pr-4 thin-scrollbar">
            <article className="flex flex-col gap-14">
              <header className="w-full ">
                <h1 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-[42px] tracking-[0] leading-[1.2] mb-4">
                  7 Best Growth Hacking Tips for Startups &amp; SaaS
                </h1>
                <time className="opacity-70 [font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-sm sm:text-base tracking-[0] leading-6">
                  November 22, 2021
                </time>
              </header>

              <section className="flex flex-col gap-8">
                <h2
                  id="what-is-growth-hack"
                  className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-2xl sm:text-[28px] tracking-[0] leading-[38px]"
                >
                  What is growth hack?
                </h2>

                <div className="w-full max-w-[589px]">
                  <p className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-base sm:text-lg tracking-[0] leading-7 mb-4">
                    Tincidunt magnis eu, vitae dictumst commodo dolor in. Aen
                    ean dictumst risus posuere a at id fermentum nibh. Luctus
                    nunc bibendum duis egestas scelerisque.
                  </p>
                </div>

                <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base sm:text-lg tracking-[0] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  pellentesque ut pellentesque varius amet mauris. Tempor,
                  risus, congue gravida nulla tincidunt nec diam. Tincidunt
                  magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                  risus posuere a at id fermentum nibh. Luctus nunc bibendum
                  duis egestas scelerisque.
                  <br />
                  <br />
                  Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
                  vel blandit adipiscing a sed cursus. Augue vestibulum tempus
                  lectus gravida condimentum mauris iaculis.
                </p>
              </section>

              <img
                className="w-full h-auto max-h-96 object-cover rounded-lg"
                alt="Img"
                src={blog1}
              />

              <section>
                <h2
                  id="how-to-start-growing-business"
                  className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-2xl sm:text-[28px] tracking-[0] leading-[38px] mb-8"
                >
                  How to start growing business?
                </h2>

                <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base sm:text-lg tracking-[0] leading-7 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  pellentesque ut pellentesque varius amet mauris. Tempor,
                  risus, congue gravida nulla tincidunt nec diam. Tincidunt
                  magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                  risus posuere a at id fermentum nibh. Luctus nunc bibendum
                  duis egestas scelerisque.
                  <br />
                  <br />
                  Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
                  vel blandit adipiscing a sed cursus. Augue vestibulum tempus
                  lectus gravida condimentum mauris iaculis.
                </p>

                <blockquote className="relative mb-8">
                  <div className="font-PJ-bold-70px text-gray-300 text-6xl absolute top-0 left-0">
                    &quot;
                  </div>
                  <p className="[font-family:'Rethink_Sans',Helvetica] font-medium text-white text-lg sm:text-xl tracking-[0] leading-8 ml-[57px] pt-[7px]">
                    Tempor, risus, congue gravida nulla tincidunt nec diam.
                    Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                    dictumst risus posuere.
                  </p>
                </blockquote>

                <div className="[font-family:'Rethink_Sans',Helvetica] font-normal text-base sm:text-lg tracking-[0] leading-[18px] mb-8">
                  <span className="text-[#adb2b9] leading-7">
                    Incidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                    dictumst risus posuere a at id fermentum nibh. Luctus nunc
                    bibendum duis egestas scelerisque.
                  </span>
                  <br />
                  <span className="font-bold text-white leading-6">
                    Follow the list below:
                  </span>
                </div>

                <div className="[font-family:'Rethink_Sans',Helvetica] font-medium text-white text-base sm:text-lg tracking-[0] leading-[30px] mb-8">
                  Id pellentesque ut pellentesque varius amet mauris.
                  <br />
                  Tempor, risus, congue gravida nulla tincidunt.
                  <br />
                  Tincidunt magnis eu, vitae dictumst.
                  <br />
                  Aenean dictumst risus posuere a at id fermentum nibh.
                </div>

                <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base sm:text-lg tracking-[0] leading-7 mb-8">
                  Tempor, risus, congue gravida nulla tincidunt nec diam.
                  Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                  dictumst risus posuere a at id fermentum nibh. Luctus nunc
                  bibendum duis egestas.
                </p>
              </section>
            </article>
          </main>

          {/* Sidebar (hidden on mobile & tablet) */}
          <aside className="hidden lg:flex w-1/4 flex-col sticky top-0 h-screen overflow-hidden">
            <Card className="border-l border-[#adb2b9b2] border-t-0 border-r-0 border-b-0 rounded-none bg-transparent ">
              <CardContent className="p-8">
                <div className="w-full max-w-[260px]">
                  <h3 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-[#555961] text-sm tracking-[1.00px] leading-[18px] mb-8">
                    ON THIS PAGE
                  </h3>
                  <nav className="flex flex-col gap-5">
                    {tableOfContentsItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className={`[font-family:'Rethink_Sans',Helvetica] text-base tracking-[0] leading-6 ${
                          item.active
                            ? "font-bold text-white"
                            : "font-medium text-[#adb2b9]"
                        } text-left hover:text-white transition-colors cursor-pointer`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l border-t border-[#adb2b9b2] border-r-0 border-b-0 rounded-none bg-transparent">
              <CardContent className="p-6">
                <div className="w-full max-w-[182px]">
                  <img
                    className="w-[46px] h-[46px] mb-4 rounded-full border border-gray-700 shadow-md object-cover"
                    alt="Group"
                    src={blog1}
                  />

                  <div className="mb-8">
                    <h4 className="[font-family:'Rethink_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px] mb-0.5">
                      Mary Jose
                    </h4>
                    <p className="opacity-70 [font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-base tracking-[0] leading-6">
                      Senior Software Engineer
                    </p>
                  </div>

                  <div className="w-32">
                    <h5 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-6 mb-3">
                      Share Article
                    </h5>
                    <img
                      className="w-32 h-8"
                      alt="Group"
                      src="/group-1000008194.png"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <FrameWrapperSubsection />
        <DivSubsection />
        <SectionComponentNodeSubsection />
      </div>
    </>
  );
};

export default blogsdetailPage;
