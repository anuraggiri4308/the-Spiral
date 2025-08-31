import React from "react";
import { Badge } from "../../../../components/ui/badge";
import heroImage from "/images/hero-section-bg-img.png";
import { Header } from "../../components/header";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[740px] bg-[#00030c]">
      <div className="relative h-full">
        {/* ✅ Header separated */}
        <Header />

        {/* Background Image */}
        <img
          className="absolute w-full md:w-[1147px] h-[400px] md:h-[640px] top-[95px] left-0 md:left-[293px] object-cover"
          alt="Background Image"
          src={heroImage}
        />

        {/* Hero Content */}
        <div className="inline-flex flex-col items-start gap-6 absolute top-[220px] left-4 md:left-[72px] right-4 md:right-auto">
          <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
            Fastest, Most Resilient AI Data Labelling & Training Partner
          </Badge>

          <h1 className="font-bold text-white text-[28px] md:text-[48px] leading-[40px] md:leading-[80px] font-['Rethink_Sans',Helvetica] max-w-[800px]">
            Evolving Intelligence
            <br />
            <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
              — Inspired by DNA
            </span>
          </h1>

          {/* Description + CTA */}
          <div className="inline-flex flex-col items-start gap-8">
            <div className="max-w-[715px] text-lg md:text-xl font-medium text-[#adb2b9] tracking-[-0.08px] leading-7">
              Transform raw data into evolving artificial intelligence with our
              organic approach to machine learning. Just like DNA adapts and
              evolves,{" "}
              <span className="text-white">
                your AI grows smarter with every interaction.
              </span>
            </div>
            <Link to="/book-demo">
              <Button
                variant="ghost"
                className="w-[190px] flex items-center justify-center gap-2 px-4 py-6 rounded-full border border-white font-medium text-white text-base tracking-[-0.54px] leading-6 hover:bg-white hover:opacity-90 transition-all duration-300"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
