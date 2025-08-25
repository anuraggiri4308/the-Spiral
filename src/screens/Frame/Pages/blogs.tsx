import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { DivSubsection } from "../sections/DivSubsection";
import { SectionComponentNodeSubsection } from "../sections/SectionComponentNodeSubsection";
import { Header } from "../components/header";
import { Badge } from "../../../components/ui/badge";
import blog1 from "/images/blog-1.svg";

// Extended blog posts data with different categories
const allBlogPosts = [
  {
    image: blog1,
    category: "TECHNOLOGY",
    date: "1 day Ago",
    title: "Machine Learning",
    description:
      "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "TECHNOLOGY",
    date: "1 day Ago",
    title: "Machine Learning",
    description:
      "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
    readMoreStyle: "gradient",
    arrowIcon: "/flowbite-arrow-up-outline-7.svg",
  },
  {
    image: blog1,
    category: "AI RESEARCH",
    date: "2 days Ago",
    title: "Neural Networks",
    description:
      "Deep learning architectures and their applications in modern AI systems for complex problem solving",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "DATA SCIENCE",
    date: "3 days Ago",
    title: "Data Analytics",
    description:
      "Advanced analytics techniques for extracting meaningful insights from large datasets and patterns",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "AUTOMATION",
    date: "4 days Ago",
    title: "Process Automation",
    description:
      "Streamlining business processes through intelligent automation and workflow optimization",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "CLOUD COMPUTING",
    date: "5 days Ago",
    title: "Cloud Infrastructure",
    description:
      "Building scalable cloud solutions with modern infrastructure and deployment strategies",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "CYBERSECURITY",
    date: "6 days Ago",
    title: "Security Protocols",
    description:
      "Implementing robust security measures to protect data and systems from emerging threats",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "BLOCKCHAIN",
    date: "1 week Ago",
    title: "Distributed Systems",
    description:
      "Exploring blockchain technology and its applications in creating decentralized solutions",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "IOT",
    date: "1 week Ago",
    title: "Internet of Things",
    description:
      "Connecting devices and sensors to create smart ecosystems and intelligent environments",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  // Additional posts for pagination
  {
    image: blog1,
    category: "ROBOTICS",
    date: "1 week Ago",
    title: "Autonomous Systems",
    description:
      "Developing intelligent robots and autonomous systems for various industrial applications",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "QUANTUM COMPUTING",
    date: "2 weeks Ago",
    title: "Quantum Algorithms",
    description:
      "Exploring quantum computing principles and their potential to revolutionize computation",
    readMoreStyle: "gradient",
    arrowIcon: "/flowbite-arrow-up-outline-7.svg",
  },
  {
    image: blog1,
    category: "AUGMENTED REALITY",
    date: "2 weeks Ago",
    title: "AR Applications",
    description:
      "Creating immersive augmented reality experiences for education and entertainment",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "VIRTUAL REALITY",
    date: "2 weeks Ago",
    title: "VR Development",
    description:
      "Building virtual reality environments and interactive experiences for various industries",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "EDGE COMPUTING",
    date: "3 weeks Ago",
    title: "Edge Solutions",
    description:
      "Implementing edge computing solutions for real-time processing and reduced latency",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "5G TECHNOLOGY",
    date: "3 weeks Ago",
    title: "Next-Gen Networks",
    description:
      "Leveraging 5G technology to enable faster connectivity and innovative applications",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  // More posts for additional pages
  {
    image: blog1,
    category: "BIOINFORMATICS",
    date: "1 month Ago",
    title: "Computational Biology",
    description:
      "Applying computational methods to analyze biological data and understand life processes",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "NANOTECHNOLOGY",
    date: "1 month Ago",
    title: "Molecular Engineering",
    description:
      "Manipulating matter at the atomic scale to create new materials and devices",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "RENEWABLE ENERGY",
    date: "1 month Ago",
    title: "Sustainable Solutions",
    description:
      "Developing clean energy technologies for a sustainable and environmentally friendly future",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "SPACE TECHNOLOGY",
    date: "1 month Ago",
    title: "Aerospace Innovation",
    description:
      "Advancing space exploration through cutting-edge technology and innovative spacecraft design",
    readMoreStyle: "white",
    arrowIcon: "/flowbite-arrow-up-outline.svg",
  },
  {
    image: blog1,
    category: "BIOTECHNOLOGY",
    date: "1 month Ago",
    title: "Genetic Engineering",
    description:
      "Using biological systems and organisms to develop products and technologies for healthcare",
    readMoreStyle: "gradient",
    arrowIcon: "/flowbite-arrow-up-outline-7.svg",
  },
];

const POSTS_PER_PAGE = 15;

export const Blogs = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <section className="w-full bg-[#00030c] text-white">
        <main
          className="flex flex-col w-full max-w-[1200px] mx-auto items-center gap-12 sm:gap-16 lg:gap-20 
  pt-12 sm:pt-16 lg:pt-20 
  pb-12 sm:pb-16 lg:pb-20 
  px-4 sm:px-6 lg:px-4"
        >
          <div className="flex flex-col items-center gap-6">
            <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
              Latest Insights & Stories
            </Badge>
            <h1 className="font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] [font-family:'Rethink_Sans',Helvetica] max-w-[800px] text-center">
              <span className="mr-1">The Spiral </span>
              <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
                Blogs
              </span>
            </h1>

            <div className="max-w-[828px] text-center">
              <p className="font-medium text-xl tracking-[-0.40px] leading-7">
                <span className="text-[#adb2b9]">
                  Explore insights, trends, and stories shaping the future of{" "}
                </span>
                <span className="text-white">
                  adaptive AI and data intelligence
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[42px] w-full">
            {currentPosts.map((post, index) => (
              <Card
                key={index}
                className="flex flex-col w-full max-w-[372px] mx-auto bg-transparent border-none mb-8"
              >
                <CardContent className="flex flex-col items-start gap-6 p-0">
                  <img
                    className="w-full h-[172px] rounded-xl object-cover"
                    alt="Blog post"
                    src={post.image}
                  />

                  <div className="flex flex-col items-start w-full gap-3">
                    <div className="flex flex-col items-start w-full gap-3">
                      <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9b2] text-sm tracking-[0] leading-6">
                        {post.category} . {post.date}
                      </p>

                      <div className="flex items-center w-full">
                        <h3 className="flex-1 [font-family:'Rethink_Sans',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[28px] tracking-[0] leading-8">
                          {post.title}
                        </h3>
                      </div>

                      <div className="flex flex-col items-start gap-4 w-full">
                        <p className="w-full [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-sm sm:text-base tracking-[0] leading-6">
                          {post.description}
                        </p>

                        <div className="flex items-center gap-2 mt-1 cursor-pointer group transition-all duration-300">
                          <span className="relative font-medium text-lg tracking-[-0.54px] leading-6 whitespace-nowrap cursor-pointer">
                            <span
                              className="
      absolute inset-0 bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent opacity-0
      transition-opacity duration-300 ease-in-out group-hover:opacity-100 tracking-wide
    "
                            >
                              Read More
                            </span>
                            <span className="relative tracking-wide text-white transition-colors duration-300 ease-in-out group-hover:text-transparent">
                              Read More
                            </span>
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white transition-transform group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-[45px]">
            <div className="hidden sm:block flex-1">
              <img className="w-full" alt="Frame" src="/frame-2147224084.svg" />
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <Button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#ffffff1a] hover:bg-[#ffffff2a] disabled:bg-[#ffffff0a] disabled:opacity-50 rounded-full border border-solid border-white/20 disabled:border-white/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Button>

              <div className="flex items-center gap-3">
                <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Page
                </span>

                <div className="flex w-[42px] h-[42px] items-center justify-center px-[15px] py-[9px] bg-[#ffffff1a] rounded-[64px] border border-solid border-white">
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-lg tracking-[0] leading-6 whitespace-nowrap">
                    {currentPage}
                  </span>
                </div>

                <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
                  of {totalPages}
                </span>
              </div>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#ffffff1a] hover:bg-[#ffffff2a] disabled:bg-[#ffffff0a] disabled:opacity-50 rounded-full border border-solid border-white/20 disabled:border-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Button>
            </div>

            <div className="hidden sm:block flex-1">
              <img className="w-full" alt="Frame" src="/frame-2147224084.svg" />
            </div>
          </div>
        </main>
        <DivSubsection />
        <SectionComponentNodeSubsection />
      </section>
    </>
  );
};
export default Blogs;
