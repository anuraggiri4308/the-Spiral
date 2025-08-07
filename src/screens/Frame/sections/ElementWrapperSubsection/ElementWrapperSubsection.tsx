import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ElementWrapperSubsection = (): JSX.Element => {
  const featureCards = [
    {
      image: "/images/Personalised-models.svg",
      title: "Personalised Models",
      description:
        "Each model is fine-tuned to your domain and data - delivering better, more accurate results that evolve with you.",
    },
    {
      image: "/images/Accurate-annotation.svg",
      title: "Accurate Annotation",
      description:
        "Precision-driven data labelling with human-in-the-loop validation ensures your models train on the highest quality datasets.",
    },
    {
      image: "/images/secure.svg",
      title: "Secure & Resilient",
      description:
        "Enterprise-grade security with redundant systems and privacy-first architecture protect your most valuable data assets.",
    },
    {
      image: "/images/continous.svg",
      title: "Continuous Evolution",
      description:
        "Like DNA replication, our systems continuously improve, adapting to new patterns and optimizing performance over time.",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-[#00020f]">
      <div className="flex flex-col items-center justify-center gap-6 mb-16">
        <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
          Built for Accuracy, Designed to Adapt
        </Badge>
        {/* ✅ This is the heading you wanted added */}
        <h1 className="font-bold text-white text-[32px] md:text-[64px] leading-[40px] md:leading-[80px] tracking-[-1.28px] font-['Rethink_Sans',Helvetica] max-w-[800px]">
          <span className="mr-1">Why Choose</span>
          <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
            The Spiral?
          </span>
        </h1>

        <div className="max-w-[828px] text-center">
          <p className="font-medium text-xl tracking-[-0.40px] leading-7">
            <span className="text-[#adb2b9] tracking-[-0.08px]">
              Guided by nature&apos;s code, we craft{" "}
            </span>
            <span className="text-white tracking-[-0.08px]">
              AI that never stops learning
            </span>
            <span className="text-[#adb2b9] tracking-[-0.08px]">
              , adapting, and delivering value -no matter how complex your data
              gets.
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-32">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-[278px] bg-transparent border-none overflow-hidden"
          >
            <img
              className="w-full h-[185px] object-cover"
              alt={`${card.title} illustration`}
              src={card.image}
            />
            <CardContent className="flex flex-col items-center justify-center gap-2 px-3 py-6 rounded-b-[16px] overflow-hidden">
              <h3 className="font-bold text-absolutewhite text-xl text-center leading-[30px] w-full font-['Rethink_Sans',Helvetica]">
                {card.title}
              </h3>
              <p className="text-[#adb2b9] text-base text-center leading-6 font-['Rethink_Sans',Helvetica]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
