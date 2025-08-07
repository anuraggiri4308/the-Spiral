import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Article data for mapping
  const articles = [
    {
      id: 1,
      image: "/images/blog-1.svg",
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
      readMoreStyle: "text-white",
      arrowIcon: "/vector-3.svg",
    },
    {
      id: 2,
      image: "/images/blog-1.svg",
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
      readMoreStyle:
        "bg-[linear-gradient(90deg,rgba(79,57,246,1)_0%,rgba(0,146,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
      arrowIcon: "/vector-5.svg",
    },
    {
      id: 3,
      image: "/images/blog-1.svg",
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
      readMoreStyle: "text-white",
      arrowIcon: "/vector-3.svg",
    },
  ];

  return (
    <section className="w-full bg-[#0b0c13] py-16 md:py-28 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-16 md:gap-[102px] px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[100px] shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
            <span className="[font-family:'Rethink_Sans',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Latest From Our Blog
            </span>
          </div>

          <h2 className="font-bold text-white text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] text-center font-['Rethink_Sans',Helvetica] mb-4">
            Latest Insights & Stories
          </h2>

          <div className="w-full max-w-[828px] text-center">
            <p className="[font-family:'Rethink_Sans',Helvetica] font-medium text-lg md:text-xl tracking-[-0.40px] leading-7">
              <span className="text-[#adb2b9] tracking-[-0.08px]">
                Explore insights, trends, and stories shaping the future of{" "}
              </span>
              <span className="text-white tracking-[-0.08px]">
                adaptive AI and data intelligence
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[42px] w-full">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-transparent border-none hover:transform hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col gap-6">
                  <img
                    className="w-full h-[172px] object-cover"
                    alt="Article thumbnail"
                    src={article.image}
                  />

                  <div className="flex flex-col gap-3">
                    <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9b2] text-sm leading-6">
                      {article.category} . {article.timeAgo}
                    </span>

                    <h3 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[24px] md:text-[28px] leading-8">
                      {article.title}
                    </h3>

                    <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-6">
                      {article.description}
                    </p>

                    <div className="flex items-center gap-3 mt-1 cursor-pointer hover:gap-4 transition-all duration-300">
                      <span
                        className={`${article.readMoreStyle} [font-family:'Rethink_Sans',Helvetica] font-semibold text-lg tracking-[-0.54px] leading-6 whitespace-nowrap`}
                      >
                        Read More
                      </span>
                      <div className="relative w-6 h-6 rotate-90">
                        <img
                          className="absolute w-[15px] h-2.5 top-2 left-1 -rotate-90"
                          alt="Arrow"
                          src={article.arrowIcon}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
