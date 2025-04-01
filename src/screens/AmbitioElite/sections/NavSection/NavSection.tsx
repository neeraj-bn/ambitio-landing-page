import {
  CrownIcon,
  DiamondIcon,
  PhoneIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const NavSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "Study-abroad", hasDropdown: true },
    { label: "Bootcamps", hasDropdown: true },
    { label: "Products", hasDropdown: true },
  ];

  const specialItems = [
    { label: "Ambitio Pro", icon: <DiamondIcon className="w-5 h-5" /> },
    { label: "Ambitio Elite", icon: <CrownIcon className="w-5 h-5" /> },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-10 lg:px-20 py-5 fixed top-0 left-0 w-full bg-[#ffffffe6] shadow-md backdrop-blur-lg z-50">
      {/* Logo */}
      <div className="relative w-[131px] h-[27px]">
        <div className="relative w-[131px] h-[27px]">
          <img
            className="absolute w-[29px] h-[19px] top-2 left-[19px]"
            alt="Vector"
            src="/vector-61.svg"
          />
          <img
            className="absolute w-[18px] h-[27px] top-0 left-[51px]"
            alt="Vector"
            src="/vector-13.svg"
          />
          <img
            className="absolute w-1.5 h-[27px] top-0 left-[72px]"
            alt="Vector"
            src="/vector-8.svg"
          />
          <img
            className="absolute w-[17px] h-[19px] top-2 left-[106px]"
            alt="Vector"
            src="/vector-20.svg"
          />
          <img
            className="absolute w-3 h-[27px] top-0 left-[82px]"
            alt="Vector"
            src="/vector-18.svg"
          />
          <img
            className="absolute w-1.5 h-[27px] top-0 left-[98px]"
            alt="Vector"
            src="/vector-10.svg"
          />
          <img
            className="absolute w-1.5 h-1.5 top-5 left-[125px]"
            alt="Vector"
            src="/vector-11.svg"
          />
          <img
            className="absolute w-[17px] h-[21px] top-1.5 left-0"
            alt="Favicon"
            src="/favicon-2.png"
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent px-0 py-0">
                  <span className="font-medium text-[#212121] text-lg">
                    {item.label}
                  </span>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
            {specialItems.map((item, index) => (
              <NavigationMenuItem
                key={`special-${index}`}
                className="flex items-center gap-1"
              >
                {item.icon}
                <span className="font-medium text-lg text-[#212121]">
                  {item.label}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-[#212121]" onClick={toggleMenu}>
        {menuOpen ? (
          <img src="/Icon.png" alt="Close Menu" className="w-6 h-6" />
        ) : (
          <img src="/Icon.png" alt="Open Menu" className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden z-50">
    {navItems.map((item, index) => (
      <a
        key={index}
        href="#"
        className="text-lg font-medium text-[#212121]"
      >
        {item.label}
      </a>
    ))}
    {specialItems.map((item, index) => (
      <div key={`special-${index}`} className="flex items-center gap-2">
        {item.icon}
        <span className="text-lg font-medium text-[#212121]">
          {item.label}
        </span>
      </div>
    ))}
    {/* CTA Button inside Mobile Menu */}
    <Button
      variant="outline"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-solid border-[#b1060f] bg-transparent hover:bg-transparent mt-4"
    >
      <PhoneIcon className="w-5 h-5 text-[#b1060f]" />
      <span className="font-bold text-[#b1060f] text-base">
        Speak with our Experts
      </span>
    </Button>
  </div>
)}

      {/* CTA Button */}
      <Button
        variant="outline"
        className="hidden lg:flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-solid border-[#b1060f] bg-transparent hover:bg-transparent"
      >
        <PhoneIcon className="w-5 h-5 text-[#b1060f]" />
        <span className="font-bold text-[#b1060f] text-base">
          Speak with our Experts
        </span>
      </Button>
    </header>
  );
};
