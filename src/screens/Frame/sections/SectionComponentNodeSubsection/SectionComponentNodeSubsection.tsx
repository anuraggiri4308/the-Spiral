import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  const navigationLinks = [
    "Home",
    "Why Us",
    "How it works",
    "Services",
    "Our team",
    "Blog",
  ];

  const legalLinks = [
    "Terms of Services",
    "Privacy Policy",
    "Security & Trust",
    "Cookies",
  ];

  return (
    <footer className="w-full bg-[#00020f] py-16 md:py-28 px-4 md:px-28">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-[49.59px] mb-[-1.59px]"
              alt="Spiral AI Logo"
              src="/svg.svg"
            />
            <div className="[font-family:'Freeman',Helvetica] font-normal text-white text-[21.7px] tracking-[-1.09px] leading-[21.7px]">
              The Spiral AI
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[172px]">
            {/* Site Navigation */}
            <nav className="flex flex-col gap-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-base leading-8 hover:text-white transition-colors ${
                    index === 0 ? "mt-[-1.18px]" : ""
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Legal Links */}
            <nav className="flex flex-col gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-base leading-8 hover:text-white transition-colors ${
                    index === 0 ? "mt-[-1.18px]" : ""
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="flex flex-col w-full md:w-[266.05px] gap-8">
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:info@thespiral.ai"
                  className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#2d67ff] text-base leading-8 underline mt-[-1.00px]"
                >
                  info@thespiral.ai
                </a>
                <a
                  href="tel:+44(0)1172872987"
                  className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#2d67ff] text-base leading-8 underline"
                >
                  +44(0) 117 287 2987
                </a>
              </div>
              <img
                className="w-[216px] h-[42px]"
                alt="Social Media Links"
                src="/social.png"
              />
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <Separator className="w-full max-w-[321px] bg-[#adb2b9]/20 h-px" />

        {/* Copyright Information */}
        <div className="w-full max-w-[336px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-sm leading-[22px]">
          © 2025 Copyright The Spiral AI • All rights reserved
          <br />
          Company No. 12013830 •VAT no. 336780970
        </div>
      </div>
    </footer>
  );
};
