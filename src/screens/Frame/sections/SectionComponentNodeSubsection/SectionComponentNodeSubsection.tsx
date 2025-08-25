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
    "Our Products",
    "Contact Us",
  ];

  const socialLinks: { icon: IconType; href: string; hoverColor: string }[] = [
    { icon: FaLinkedinIn, href: "https://linkedin.com", hoverColor: "#0077B5" },
    { icon: FaFacebookF, href: "https://facebook.com", hoverColor: "#1877F2" },
    { icon: FaInstagram, href: "https://instagram.com", hoverColor: "#E4405F" },
    { icon: FaTwitter, href: "https://twitter.com", hoverColor: "#1DA1F2" },
  ];

  return (
    <footer className="w-full bg-[#00020f] py-16 px-4 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center place-items-center">
        {/* Column 1 - Logo + Info */}
        <div className="flex flex-col items-center justify-center gap-6 text-center order-4 md:order-4 lg:order-1">
          <div className="text-white text-[22px] leading-[24px] tracking-[0.02em] font-semibold font-['Raleway',Helvetica]">
            The Spiral
          </div>
          <Separator className="w-full max-w-[321px] bg-[#adb2b9]/20 h-px" />
          <div className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-sm leading-[22px]">
            © 2025 Copyright The Spiral AI • All rights reserved
            <br />
            Company No. 12013830 • VAT no. 336780970
          </div>
        </div>

        {/* Column 2 - Navigation */}
        <nav className="flex flex-col items-center justify-center gap-3 order-1 md:order-1 lg:order-2">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-8 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Column 3 - Legal */}
        <nav className="flex flex-col items-center justify-center gap-3 order-2 md:order-2 lg:order-3">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-base leading-8 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Column 4 - Contact + Social */}
        <div className="flex flex-col items-center justify-center gap-8 text-center order-3 md:order-3 lg:order-4">
          <div className="flex flex-col gap-6">
            <a
              href="mailto:hr@thespiral.ai"
              className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#2d67ff] text-base leading-8 underline"
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

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, hoverColor }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#adb2b9] flex items-center justify-center text-[#adb2b9] transition-colors"
                style={{ transition: "all 0.3s ease" }}
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
    </footer>
  );
};
