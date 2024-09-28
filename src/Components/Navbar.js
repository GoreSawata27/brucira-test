import React, { useState } from "react";
import Logo from "../assets/Navbar/es8lbitm 1.svg";
import UpArrow from "../assets/Navbar/arrow-down-right 1.svg";
import UpArrowDisabled from "../assets/Navbar/arrow-down-right 1 (2).svg";
import ActiveArrow from "../assets/Navbar/arrow-down-right 1 (1).svg";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="flex items-center justify-between navbar">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </div>
        <nav className="hidden space-x-8 text-sm nav-links md:flex">
          <a href="/">
            SERVICES <img src={UpArrow} alt="arrow-img" />
          </a>
          <a href="/" className="disabled">
            WORK <img src={UpArrowDisabled} alt="arrow-img" />
          </a>
          <a href="/" className="active">
            ABOUT <img src={ActiveArrow} alt="arrow-img" />
          </a>
          <button className="rounded-full get-btn">GET STARTED</button>
        </nav>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="flex flex-col items-end pb-6 pr-5 space-y-4 text-sm border-b-2 border-gray-600 mobile-menu ">
          <a className="flex gap-2" href="/" onClick={toggleMobileMenu}>
            SERVICES <img src={UpArrow} alt="arrow-img" />
          </a>
          <a href="/" className="flex gap-2 disabled text-[#a09f9f]" onClick={toggleMobileMenu}>
            WORK <img src={UpArrowDisabled} alt="arrow-img" />
          </a>
          <a href="/" className="flex gap-2 active" onClick={toggleMobileMenu}>
            ABOUT <img src={ActiveArrow} alt="arrow-img" />
          </a>
          <button className="rounded-full get-btn" onClick={toggleMobileMenu}>
            GET STARTED
          </button>
        </nav>
      )}
    </header>
  );
}
