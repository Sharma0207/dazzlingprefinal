import React from "react";
import { HamburgerMenuOverlay } from "../lightswind/hamburger-menu-overlay";

const Navbar = () => {
  const menuItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu on the left */}
          <div className="flex items-center">
            <HamburgerMenuOverlay
              items={menuItems}
              buttonTop="50%"
              buttonLeft="0px"
              buttonSize="md"
              buttonColor="#D09163"
              overlayBackground="rgba(0, 0, 0, 0.8)"
              textColor="#ffffff"
              fontSize="lg"
              fontWeight="medium"
              animationDuration={0.6}
              staggerDelay={0.1}
              menuAlignment="left"
              keepOpenOnItemClick={false}
            />
          </div>

          {/* Logo/Brand in the center */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-bold text-[#424242] font-playfair-display">
              Dazzling World
            </h1>
          </div>

          {/* Right side - can add other elements here if needed */}
          <div className="flex items-center">
            {/* Placeholder for future elements */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
