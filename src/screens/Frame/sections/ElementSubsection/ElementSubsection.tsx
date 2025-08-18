import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Badge } from "../../../../components/ui/badge";
import heroImage from "/images/hero-section-bg-img.png";

export const ElementSubsection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const navItems = [
    { name: "Home" },
    { name: "Why Us?" },
    { name: "How It Works?" },
    { name: "Services" },
    { name: "Our Team" },
    { name: "Blog" },
  ];

  return (
    <section className="relative w-full min-h-[740px] bg-[#00030c]">
      <div className="relative h-full">
        {/* Navigation Bar */}
        <header className="flex w-full h-24 items-center justify-between px-4 md:px-[72px] py-4 bg-[#00030f] relative z-50">
          <div className="flex items-center justify-between relative flex-1 self-stretch">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <img
                className="relative w-12 h-[49.59px] mb-[-1.59px]"
                alt="Spiral AI Logo"
                src="/svg-1.svg"
              /> */}
              <div className="text-white text-[22px] leading-[24px] tracking-[0.02em] font-semibold font-['Raleway',Helvetica]">
                The Spiral
              </div>
            </div>

            {/* Desktop Nav */}
            <NavigationMenu className="max-w-none hidden lg:block">
              <NavigationMenuList className="flex items-center gap-[33.08px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <div
                      onClick={() => setActiveIndex(index)}
                      className="inline-flex flex-col items-start justify-center gap-[4.72px] p-[4.72px] cursor-pointer"
                    >
                      <NavigationMenuLink
                        href="#"
                        className={`relative w-fit mt-[-1.18px] [font-family:'Rethink_Sans',Helvetica] font-medium ${
                          activeIndex === index
                            ? "text-white"
                            : "text-[#adb2b9]"
                        } text-base tracking-[0] leading-[32.0px] whitespace-nowrap`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                      <div
                        className={`h-[2px] mt-[2px] w-full rounded bg-[#d9d9d9] transition-all duration-300 ease-in-out transform ${
                          activeIndex === index
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        } origin-left`}
                      />
                    </div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* CTA Button */}
            <div className="hidden lg:flex items-start justify-end">
              <Button
                variant="secondary"
                onClick={() =>
                  window.open("https://www.linkedin.com", "_blank")
                }
                className="group w-[170px] flex items-center justify-center gap-2 px-4 py-5 rounded-full border border-white font-medium text-base tracking-[-0.54px] leading-6 hover:bg-white hover:opacity-90 transition-all duration-300"
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
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-24 left-0 right-0 bg-[#00030f] border-t border-gray-800 lg:hidden z-40">
              <div className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => {
                      setActiveIndex(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`py-3 px-2 [font-family:'Rethink_Sans',Helvetica] font-medium ${
                      activeIndex === index ? "text-white" : "text-[#adb2b9]"
                    } text-base hover:text-white transition-colors`}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 w-full bg-[linear-gradient(90deg,rgba(79,57,246,1)_0%,rgba(0,146,184,1)_100%)] flex items-center justify-center gap-1 px-4 py-3 rounded-[32px] [font-family:'Rethink_Sans',Helvetica] font-medium text-white text-lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          )}
        </header>

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

          <h1 className="font-bold text-white text-[32px] md:text-[64px] leading-[40px] md:leading-[80px] tracking-[-1.28px] font-['Rethink_Sans',Helvetica] max-w-[800px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};
