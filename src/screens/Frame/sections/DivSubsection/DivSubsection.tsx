import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 md:py-28 bg-[#00020f] px-4">
      <Card className="mx-auto w-full max-w-[1216px] min-h-[398px] rounded-3xl overflow-hidden bg-[url('/images/evolve.png')] bg-cover bg-center">
        <CardContent className="p-0 relative h-full">
          <div className="flex flex-col items-center justify-center gap-9 absolute top-8 md:top-[95px] left-1/2 -translate-x-1/2 w-full max-w-[741px] px-4">
            <div className="flex flex-col items-center gap-8">
              <h2 className="font-bold text-white text-[28px] md:text-[48px] leading-[40px] md:leading-[73.9px] text-center font-['Rethink_Sans',Helvetica]">
                Ready to Evolve Your Data?
              </h2>

              <p className="font-normal text-[#ffffffcc] text-lg md:text-xl text-center tracking-[-0.20px] leading-8 font-['Rethink_Sans',Helvetica]">
                Join the next generation of AI development. Let your data
                evolve, adapt, and grow into intelligent systems that learn and
                improve continuously.
              </p>
            </div>

            <Button
              variant="secondary"
              className="group w-[190px] flex items-center justify-center gap-2 px-4 py-6 rounded-full border border-white font-medium text-base tracking-[-0.54px] leading-6 hover:bg-white hover:opacity-90 transition-all duration-300"
            >
              Book a Demo
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
        </CardContent>
      </Card>
    </section>
  );
};
