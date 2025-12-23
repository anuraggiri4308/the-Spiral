import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { HomeCTASection } from "../../commonComponents/HomeCTASection";
import { Footer } from "../../commonComponents/Footer";
import { Header } from "../../commonComponents/Header/header";
import { Badge } from "../../../../components/ui/badge";
import { Link } from "react-router-dom";
import { allBlogPosts } from "./blogsData";

const POSTS_PER_PAGE = 15;

export const Blogs = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  // 👇 scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
      <Header backgroundClass="bg-[#00030c]" />
      <section className="w-full bg-[#00030c] text-white">
        <main
          className="flex flex-col w-full max-w-[1200px] mx-auto items-center gap-12 sm:gap-16 lg:gap-20 
  pt-12 sm:pt-16 lg:pt-20 
  pb-12 sm:pb-16 lg:pb-20 
  px-4 sm:px-6 lg:px-4"
        >
          <div className="flex flex-col items-center gap-6">
            <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
              Discover What Everyone's Missing
            </Badge>
            <h1 className="font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] [font-family:'Rethink_Sans',Helvetica] max-w-[800px] text-center">
              <span className="mr-1">Spiral </span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 w-full">
            {currentPosts.map((post, index) => (
              <Card
                key={index}
                className="flex flex-col w-full  mx-auto bg-transparent border-none mb-8 bg-[#1A1C2A] px-5 py-7"
              >
                <CardContent className="flex flex-col items-start gap-6 p-0">
                  <img
                    className="w-full h-[185px] rounded-xl object-cover"
                    alt={post.title}
                    src={post.image}
                  />

                  <div className="flex flex-col items-start w-full gap-3">
                    <div className="flex flex-col items-start w-full gap-3">
                      <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9b2] text-sm tracking-[0] leading-6">
                        {post.category} . {post.date}
                      </p>

                      <div className="flex items-center w-full">
                        <h3 className="flex-1 [font-family:'Rethink_Sans',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[24px] tracking-[1] leading-8">
                          {post.title}
                        </h3>
                      </div>

                      <div className="flex flex-col items-start gap-4 w-full">
                        <p className="w-full [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-sm sm:text-base tracking-[0] leading-6">
                          {post.description}
                        </p>

                        <Link to={`/blogs/${post.slug}`}>
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-6 sm:gap-[45px]">
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
          </div>
        </main>
        <HomeCTASection />
        <Footer />
      </section>
    </>
  );
};

export default Blogs;
