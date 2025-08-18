import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import expertise1 from "/images/expertise-1.svg";

export const OverlapGroupWrapperSubsection = (): JSX.Element => {
  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      title: "Data labeling",
      description:
        "Precision annotation services with AI-assisted workflows and expert human oversight for maximum accuracy.",
      borderColor: "border-[#e78727]",
      image: expertise1,
      imageFirst: false,
    },
    {
      id: 2,
      title: "Data Collection",
      description:
        "Comprehensive data gathering from multiple sources with quality assurance and ethical compliance standards.",
      borderColor: "border-violet-500",
      image: expertise1,
      imageFirst: true,
    },
    {
      id: 3,
      title: "Machine Learning Infrastructure",
      description:
        "Scalable ML ops platform with automated training pipelines and continuous model optimization.",
      borderColor: "border-[#00a656]",
      image: expertise1,
      imageFirst: false,
    },
    {
      id: 4,
      title: "Human-in-the-Loop",
      description:
        "Expert human validation integrated seamlessly into AI workflows for enhanced accuracy and reliability.",
      borderColor: "border-[#ee5fa3]",
      image: "/images/expertise-1.svg",
      imageFirst: true,
    },
  ];

  return (
    <section className="relative w-full bg-[#0b0d14]">
      {/* Single Background Image */}
      {/* <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Background"
        src="/unsplash-xutjz7ud7pi.png"
      /> */}

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1191px] mx-auto px-4 py-16 md:py-28">
        {/* Header section */}
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
          <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
            Full-Spectrum AI Data Solutions
          </Badge>

          <h3 className="font-bold text-white text-[clamp(28px,6vw,64px)] leading-[1.2] tracking-[-1.28px] font-['Rethink_Sans',Helvetica]">
            <span className="mr-1">Our </span>
            <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>

          <p className="[font-family:'Rethink_Sans',Helvetica] font-medium text-lg md:text-xl text-[#adb2b9] max-w-[828px]">
            Complete AI development ecosystem designed to transform your data
            into <span className="text-white">intelligent systems</span>
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-20 flex flex-col gap-8 md:gap-[72px]">
          {serviceCards.map((card) => (
            <Card key={card.id} className="bg-transparent border-none">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                  {card.imageFirst && (
                    <img
                      className="w-full lg:w-[585px] h-[250px] lg:h-[381px] object-cover order-1 lg:order-none"
                      alt={`${card.title} illustration`}
                      src={card.image}
                    />
                  )}

                  <div className="w-full lg:w-[585px] order-2 lg:order-none">
                    <div className="flex flex-col gap-12">
                      <div className="flex flex-col gap-6">
                        <div
                          className={`inline-flex h-[52px] items-center px-4 py-0 ${card.borderColor} border-l-4 [border-left-style:solid]`}
                        >
                          <h2 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[20px] md:text-[36px] leading-snug">
                            {card.title}
                          </h2>
                        </div>
                        <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-lg md:text-xl leading-[30px]">
                          {card.description}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-[190px] flex items-center justify-center gap-2 px-4 py-6 rounded-full border border-white font-medium text-white text-base tracking-[-0.54px] leading-6 hover:bg-white hover:opacity-90 transition-all duration-300"
                      >
                        Know More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {!card.imageFirst && (
                    <img
                      className="w-full lg:w-[585px] h-[250px] lg:h-[381px] object-cover order-1 lg:order-none"
                      alt={`${card.title} illustration`}
                      src={card.image}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
