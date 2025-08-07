import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperSubsection = (): JSX.Element => {
  const processSteps = [
    {
      title: "Ingest",
      description: "Upload your raw data through our secure pipeline",
      position: "top-[49px] left-[841px]",
      backgroundImage: "url(..//frame-2147224037.png)",
    },
    {
      title: "Annotate",
      description: "AI-assisted labeling with\nhuman-in-the-loop validation",
      position: "top-[236px] left-[712px]",
      backgroundImage: "url(..//frame-2147224047.png)",
      active: true,
    },
    {
      title: "Train & Optimize",
      description: "Advanced ML algorithms\noptimize your model performance",
      position: "top-[521px] left-[841px]",
      backgroundImage: "url(..//frame-2147224040.png)",
    },
  ];

  return (
    <section className="relative w-full h-[725px] bg-[#0b0c13]">
      <div className="relative w-full h-[712px] bg-[url(/global-network-connection-covering-earth-with-lines-innovative-p.png)] bg-[100%_100%]">
        <div className="flex flex-col w-[524px] items-start gap-6 absolute top-[267px] left-[72px]">
          <Badge className="inline-flex items-center gap-1.5 px-4 py-2.5 relative flex-[0_0_auto] rounded-[100px] border-[none] shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <span className="relative w-fit mt-[-0.94px] [font-family:'Rethink_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
              From Raw Data to Real Results
            </span>
          </Badge>

          <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-xl tracking-[-0.40px] leading-7">
            Our organic approach to AI development follows nature&#39;s most
            successful blueprint
          </p>
        </div>

        {processSteps.map((step, index) => (
          <Card
            key={`process-step-${index}`}
            className={`inline-flex flex-col items-start gap-4 absolute ${
              step.position
            } rounded-[32px] ${
              step.active
                ? "h-[253px] p-[42px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%),linear-gradient(172deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)," +
                  step.backgroundImage +
                  "_50%_50%_/_cover]"
                : "h-[155px] px-[42px] py-7 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)," +
                  step.backgroundImage +
                  "_50%_50%_/_cover] opacity-50"
            }`}
          >
            <CardContent
              className={`p-0 ${
                step.active
                  ? "flex w-[572px] items-center gap-[42px] relative flex-1 grow"
                  : "flex w-[314px] items-center gap-6 relative flex-[0_0_auto]"
              }`}
            >
              <div
                className={`flex flex-col items-start gap-${
                  step.active ? "7" : "4"
                } relative flex-1 grow`}
              >
                <h3
                  className={`relative self-stretch ${
                    step.active
                      ? "h-[61.92px] mt-[-1.77px] [font-family:'Rethink_Sans',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[56px]"
                      : "h-[35px] mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-8"
                  } whitespace-nowrap`}
                >
                  {step.title}
                </h3>

                <div
                  className={`relative ${
                    step.active
                      ? "w-[400.08px] h-16"
                      : step.title === "Ingest"
                      ? "w-[237px]"
                      : "w-64"
                  }`}
                >
                  <p
                    className={`${
                      step.active
                        ? "absolute w-[398px] h-16 top-0 left-0 [font-family:'Rethink_Sans',Helvetica] font-medium text-[#c4c4c4] text-[28px] tracking-[0] leading-[42px]"
                        : "relative [font-family:'Rethink_Sans',Helvetica] font-medium text-[#c4c4c4] text-base tracking-[0] leading-6"
                    }`}
                  >
                    {step.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < step.description.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
