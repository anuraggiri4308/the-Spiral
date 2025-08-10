import React from "react";
import { Separator } from "../../../../components/ui/separator";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons";

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

  const socialLinks: { icon: IconType; href: string; hoverColor: string }[] = [
    { icon: FaLinkedinIn, href: "https://linkedin.com", hoverColor: "#0077B5" }, // LinkedIn blue
    { icon: FaFacebookF, href: "https://facebook.com", hoverColor: "#1877F2" }, // Facebook blue
    { icon: FaInstagram, href: "https://instagram.com", hoverColor: "#E4405F" }, // Instagram pink/red
    { icon: FaTwitter, href: "https://twitter.com", hoverColor: "#1DA1F2" }, // Twitter blue
  ];

  return (
    <footer className="w-full bg-[#00020f] py-16 md:py-16 px-4 md:px-28">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-0">
          {/* First Column */}
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <div className="flex items-center gap-2">
              <div className="text-white text-[22px] leading-[24px] tracking-[0.02em] font-semibold font-['Raleway',Helvetica]">
                The Spiral AI
              </div>
            </div>
            <Separator className="w-full max-w-[321px] bg-[#adb2b9]/20 h-px" />
            <div className="w-full max-w-[336px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-sm leading-[22px]">
              © 2025 Copyright The Spiral AI • All rights reserved
              <br />
              Company No. 12013830 • VAT no. 336780970
            </div>
          </div>

          {/* Navigation + Legal + Contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[172px]">
            {/* Navigation */}
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-8 hover:text-white transition-colors ${
                    index === 0 ? "mt-[-1.18px]" : ""
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Legal */}
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-8 hover:text-white transition-colors ${
                    index === 0 ? "mt-[-1.18px]" : ""
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Contact */}
            <div className="flex flex-col w-full md:w-[266.05px] gap-8">
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:hr@thespiral.ai"
                  className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#2d67ff] text-base leading-8 underline mt-[-1.00px]"
                >
                  info@thespiral.ai
                </a>
                <a
                  href="tel:+91-9783808306"
                  className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#2d67ff] text-base leading-8 underline"
                >
                  +91-9783808306
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, hoverColor }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#adb2b9] flex items-center justify-center text-[#adb2b9] transition-colors"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = hoverColor;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#adb2b9";
                    }}
                  >
                    {Icon({ size: 18 })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
