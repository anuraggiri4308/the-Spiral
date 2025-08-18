import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import blog1 from "/images/blog-1.svg";

export const FrameWrapperSubsection = (): JSX.Element => {
  const articles = [
    {
      id: 1,
      image: blog1,
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
    },
    {
      id: 2,
      image: blog1,
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
    },
    {
      id: 3,
      image: blog1,
      category: "TECHNOLOGY",
      timeAgo: "1 day Ago",
      title: "Machine Learning",
      description:
        "Scalable ML ops platform with ops platform with automated training pipelines and continuous mod",
    },
  ];

  return (
    <section className="w-full bg-[#0b0c13] pt-8 md:pt-12 pb-16 md:pb-28 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-16 md:gap-[102px] px-4">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
            Latest Insights & Stories
          </Badge>

          <h1 className="font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] [font-family:'Rethink_Sans',Helvetica] max-w-[800px] text-center">
            <span className="mr-1">Latest From Our </span>
            <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

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

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[42px] w-full">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-transparent border-none transition-transform duration-300"
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
                      {article.category} • {article.timeAgo}
                    </span>

                    <h3 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[24px] md:text-[28px] leading-8">
                      {article.title}
                    </h3>

                    <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-6">
                      {article.description}
                    </p>

                    {/* Read More Button */}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
