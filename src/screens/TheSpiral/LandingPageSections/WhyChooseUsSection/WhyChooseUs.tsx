import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Import SVG images
import personalisedModels from "/public/images/Personalised-models.svg";
import accurateAnnotation from "/public/images/Accurate-annotation.svg";
import secure from "/public/images/secure.svg";
import continuous from "/public/images/continous.svg";

export const WhyChooseUs = (): JSX.Element => {
  const featureCards = [
    {
      image: personalisedModels,
      title: "Personalised Models",
      description:
        "Each model is fine-tuned to your domain and data - delivering better, more accurate results that evolve with you.",
    },
    {
      image: accurateAnnotation,
      title: "Accurate Annotation",
      description:
        "Precision-driven data labelling with human-in-the-loop validation ensures your models train on the highest quality datasets.",
    },
    {
      image: secure,
      title: "Secure & Resilient",
      description:
        "Enterprise-grade security with redundant systems and privacy-first architecture protect your most valuable data assets.",
    },
    {
      image: continuous,
      title: "Continuous Evolution",
      description:
        "Like DNA replication, our systems continuously improve, adapting to new patterns and optimizing performance over time.",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-[#00020f]">
      <style>{`
        @keyframes spiralGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .spiral-card-overlay {
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 300ms ease, transform 300ms ease;
          background-size: 200% 200%;
        }
        .spiral-card-group:hover .spiral-card-overlay {
          opacity: 1;
          transform: scale(1);
          animation: spiralGradientShift 4s linear infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-16 px-4 md:px-8 lg:px-0">
        <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
          Built for Accuracy, Designed to Adapt
        </Badge>

        <h1 className="font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] [font-family:'Rethink_Sans',Helvetica] max-w-[800px] text-center">
          <span className="mr-1">Why Choose</span>
          <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
            The Spiral?
          </span>
        </h1>

        <div className="max-w-[828px] text-center">
          <p className="font-medium text-xl tracking-[-0.40px] leading-7">
            <span className="text-[#adb2b9]">
              Guided by nature&apos;s code, we craft{" "}
            </span>
            <span className="text-white">AI that never stops learning</span>
            <span className="text-[#adb2b9]">
              , adapting, and delivering value - no matter how complex your data
              gets.
            </span>
          </p>
        </div>
      </div>

      {/* Cards */}
      {/* Cards */}
      <div
        className="
    flex flex-wrap justify-center items-stretch gap-6
    px-4 sm:px-8 md:px-12 lg:px-32
  "
      >
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="
        spiral-card-group relative 
        w-[280px] h-[420px] sm:w-[300px] sm:h-[420px] 
        md:w-[320px] md:h-[420px] lg:w-[278px] lg:h-[420px]
        rounded-2xl p-[1px] bg-transparent border-none overflow-visible flex flex-col
      "
          >
            {/* Gradient Border Layer */}
            <div
              className="spiral-card-overlay absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #35E0ED, #0774E5, #4F39F6)",
                zIndex: 0,
              }}
            />

            {/* Inner Content */}
            <div className="relative z-10 rounded-[15px] bg-[#00020f] overflow-hidden flex flex-col h-full">
              <img
                className="w-full h-[185px] object-cover"
                alt={`${card.title} illustration`}
                src={card.image}
              />
              <CardContent className="flex flex-col items-center justify-between flex-1 px-4 py-6 rounded-b-[15px]">
                <div>
                  <h3 className="font-bold text-absolutewhite text-xl text-center leading-[30px] font-['Rethink_Sans',Helvetica]">
                    {card.title}
                  </h3>
                  <p className="text-[#adb2b9] text-base text-center leading-6 font-['Rethink_Sans',Helvetica] min-h-[72px]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
