// src/components/common/Header.tsx
import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Button } from "../../../../components/ui/button";
import heroBgImg from "/public/images/hero-section-bg-img.png";

export const Header = ({
  backgroundClass = "bg-[#00030f]",
}: {
  backgroundClass?: string;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Why Us?", path: "/#why-us" },
    { name: "How It Works?", path: "/#how-it-works" },
    { name: "Services", path: "/#services" },
    { name: "Our Team", path: "/#teams" },
    { name: "Blog", path: "/blogs" },
  ];

  // ✅ Match pathname + hash
  useEffect(() => {
    const currentPath = location.pathname + (location.hash || "");
    const index = navItems.findIndex((item) => item.path === currentPath);

    if (index !== -1) {
      setActiveIndex(index);
    } else {
      // fallback: only match pathname (ignore hash)
      const fallbackIndex = navItems.findIndex(
        (item) => item.path.split("#")[0] === location.pathname
      );
      if (fallbackIndex !== -1) setActiveIndex(fallbackIndex);
    }
  }, [location]);

  return (
    <header
      className={`flex w-full h-24 items-center justify-between px-4 md:px-[72px] py-4 relative z-50 border-b border-white/10 ${backgroundClass}`}
    >
      <div className="flex items-center justify-between flex-1 self-stretch">
        {/* ✅ Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-white text-[22px] leading-[24px] tracking-[0.02em] font-semibold font-['Raleway',Helvetica]"
          >
            The Spiral
          </Link>
        </div>

        {/* ✅ Desktop Nav */}
        <NavigationMenu className="max-w-none hidden lg:block">
          <NavigationMenuList className="flex items-center gap-[33.08px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <div
                  onClick={() => setActiveIndex(index)}
                  className="inline-flex flex-col items-start justify-center gap-[2px] p-[4.72px] cursor-pointer"
                >
                  <Link
                    to={item.path}
                    className={`relative w-fit mt-[-1.18px] [font-family:'Rethink_Sans',Helvetica] font-medium ${
                      activeIndex === index ? "text-white" : "text-[#adb2b9]"
                    } text-base leading-[32px]`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline */}
                  <div
                    className={`h-[2px] w-full rounded bg-[#d9d9d9] transition-all duration-300 ease-in-out transform ${
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

        {/* ✅ Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA Button (Desktop only) */}
        <div className="hidden lg:flex items-start justify-end">
          <Link to="/book-demo">
            <Button
              variant="secondary"
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
          </Link>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {/* ✅ Mobile Menu (below header) */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-24 left-0 right-0 bottom-0 z-40 lg:hidden flex flex-col
               bg-[#00030f]/70 backdrop-blur-md"
        >
          <div className="flex flex-col p-6 space-y-4 overflow-y-auto">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => {
                  setActiveIndex(index);
                  setIsMobileMenuOpen(false);
                }}
                className={`py-3 px-2 [font-family:'Rethink_Sans',Helvetica] font-medium ${
                  activeIndex === index ? "text-white" : "text-[#adb2b9]"
                } text-lg hover:text-white transition-colors`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/book-demo">
              <Button
                variant="secondary"
                className="mt-6 w-full flex items-center justify-center gap-1 px-4 py-4 rounded-[32px] [font-family:'Rethink_Sans',Helvetica] font-medium text-lg"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
