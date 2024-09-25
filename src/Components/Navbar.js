import React from "react";

import Logo from "../assets/Navbar/es8lbitm 1.svg";
import UpArrow from "../assets/Navbar/arrow-down-right 1.svg";
import UpArrowDisabled from "../assets/Navbar/arrow-down-right 1 (2).svg";
import ActiveArrow from "../assets/Navbar/arrow-down-right 1 (1).svg";

export default function Navbar() {
  return (
    <header className="header-container">
      <div className="flex items-center justify-between navbar">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </div>
        <nav className="space-x-8 text-sm nav-links">
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
      </div>
    </header>
  );
}
