import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapGroupWrapperSubsection = (): JSX.Element => {
  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      title: "Data labeling",
      description:
        "Precision annotation services with AI-assisted workflows and expert human oversight for maximum accuracy.",
      borderColor: "border-[#e78727]",
      image: "/images/expertise-1.svg",
      imageFirst: false,
    },
    {
      id: 2,
      title: "Data Collection",
      description:
        "Comprehensive data gathering from multiple sources with quality assurance and ethical compliance standards.",
      borderColor: "border-violet-500",
      image: "/images/expertise-1.svg",
      imageFirst: true,
    },
    {
      id: 3,
      title: "Machine Learning Infrastructure",
      description:
        "Scalable ML ops platform with automated training pipelines and continuous model optimization.",
      borderColor: "border-[#00a656]",
      image: "/images/expertise-1.svg",
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
    <section className="relative w-full bg-[#0b0d14] py-16 md:py-0">
      {/* Background images */}
      <div className="relative w-full">
        <img
          className="w-full h-[400px] md:h-[774px] object-cover"
          alt="Unsplash background"
          src="/unsplash-xutjz7ud7pi.png"
        />
        <img
          className="w-full h-[600px] md:h-[1084px] object-cover"
          alt="Unsplash background"
          src="/unsplash-xutjz7ud7pi-1.png"
        />
        <img
          className="w-full h-[600px] md:h-[1004px] object-cover"
          alt="Unsplash background"
          src="/unsplash-xutjz7ud7pi-2.png"
        />

        {/* Header section */}
        <div className="absolute top-16 md:top-28 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 px-4 w-full max-w-4xl">
          <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
            Full-Spectrum AI Data Solutions
          </Badge>

          <h3 className="font-bold text-white text-[clamp(28px,6vw,64px)] leading-[1.2] tracking-[-1.28px] font-['Rethink_Sans',Helvetica] max-w-full whitespace-nowrap overflow-hidden text-center">
            <span className="mr-1">Our </span>
            <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>

          <div className="flex flex-col items-start gap-6 w-full">
            <p className="w-full max-w-[828px] [font-family:'Rethink_Sans',Helvetica] font-medium text-lg md:text-xl text-center tracking-[-0.40px] leading-7">
              <span className="text-[#adb2b9] tracking-[-0.08px]">
                Complete AI development ecosystem designed to transform your
                data into{" "}
              </span>
              <span className="text-white tracking-[-0.08px]">
                intelligent systems
              </span>
            </p>
          </div>
        </div>

        {/* Service cards section */}
        <div className="absolute top-[300px] md:top-[406px] left-1/2 transform -translate-x-1/2 flex flex-col w-full max-w-[1191px] gap-8 md:gap-[72px] px-4">
          {serviceCards.map((card) => (
            <Card key={card.id} className="bg-transparent border-none">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 lg:gap-0">
                  {card.imageFirst && (
                    <img
                      className="w-full lg:w-[585px] h-[250px] lg:h-[381px] object-cover order-1 lg:order-none"
                      alt={`${card.title} illustration`}
                      src={card.image}
                    />
                  )}

                  <div className="w-full lg:w-[585px] order-2 lg:order-none">
                    <div className="flex flex-col gap-12">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col gap-6">
                          <div
                            className={`inline-flex h-[52px] items-center px-4 py-0 ${card.borderColor} border-l-4 [border-left-style:solid]`}
                          >
                            <h2 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[36px] md:text-[36px] leading-snug">
                              {card.title}
                            </h2>
                          </div>
                          <p className="w-full lg:w-[585px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-lg md:text-xl leading-[30px]">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-[181px] h-12 rounded-[32px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-lg tracking-[-0.54px]">
                          Know More
                        </span>
                        <ArrowRightIcon className="ml-1 w-3 h-3" />
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
