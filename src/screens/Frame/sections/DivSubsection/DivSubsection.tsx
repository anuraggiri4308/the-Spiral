import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 md:py-28 bg-[#00020f] px-4">
      <Card className="mx-auto w-full max-w-[1216px] min-h-[398px] rounded-3xl overflow-hidden [background:radial-gradient(50%_50%_at_50%_39%,rgba(7,11,14,1)_0%,rgba(16,14,28,1)_100%)]">
        <CardContent className="p-0 relative h-full">
          {/* Decorative elements */}
          <div className="hidden md:block absolute w-[356px] h-[1178px] top-[-410px] left-[457px] -rotate-90 blur-[123.38px] opacity-60">
            <div className="relative h-[1178px]">
              <div className="top-[227px] left-[67px] bg-[#3145ef] absolute w-[289px] h-[549px] rounded-[144.47px/274.3px]" />
              <div className="top-0 left-0 bg-[#24d7ff] absolute w-[289px] h-[549px] rounded-[144.47px/274.3px]" />
              <div className="top-[629px] left-0.5 bg-[#2d67ff] absolute w-[289px] h-[549px] rounded-[144.47px/274.3px]" />
            </div>
          </div>

          <img
            className="absolute w-full h-full top-0 left-0"
            alt="Background texture"
            src="/images/evolve.png"
          />

          <div className="flex flex-col items-center justify-center gap-9 absolute top-8 md:top-[95px] left-1/2 -translate-x-1/2 w-full max-w-[741px] px-4">
            <div className="flex flex-col items-center gap-8">
              <h2 className="font-bold text-white text-[32px] md:text-[56px] leading-[40px] md:leading-[73.9px] text-center font-['Rethink_Sans',Helvetica]">
                Ready to Evolve Your Data?
              </h2>

              <p className="font-normal text-[#ffffffcc] text-lg md:text-xl text-center tracking-[-0.20px] leading-8 font-['Rethink_Sans',Helvetica]">
                Join the next generation of AI development. Let your data
                evolve, adapt, and grow into intelligent systems that learn and
                improve continuously.
              </p>
            </div>

            <Button className="h-12 px-4 py-3 bg-white text-black rounded-[32px] hover:bg-white/90 transition-colors">
              <span className="font-semibold text-lg tracking-[-0.54px] leading-6 font-['Rethink_Sans',Helvetica]">
                Book a Demo
              </span>
              <ArrowRightIcon className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
