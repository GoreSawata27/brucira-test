import React from "react";
import Ayesha from "../assets/HeroSection/Ayesha.svg";
import Marin from "../assets/HeroSection/Marin.svg";
import btnArrow from "../assets/HeroSection/Group 1686552199.svg";

export default function MainSectionHero() {
  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        WE ARE A <br /> GLOBAL
        <span className="text-red-500"> PRODUCTION</span> <br />
        AGENCY
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 get-service">
          <p className="get-service-title">
            Designed with the specific needs of large B2B enterprises in mind,
            our platform offers a comprehensive solution to simplify.
          </p>
          <div className="flex items-center gap-4 ">
            <div className="flex items-center justify-center gap-2 rounded-full get-service-video-btn">
              <button className="text-btn">
                GET PROFESSIONAL VIDEO SERVICES
              </button>
              <img src={btnArrow} alt="right arrow" />
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="z-10 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                  src={Marin}
                  alt="Marin"
                />
                <img
                  className="z-0 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                  src={Ayesha}
                  alt="Ayesha"
                />
              </div>

              <div>
                <strong>Marin / Ayesha </strong>
                <p>Global Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="get-service-video">Video</div>
      </div>
    </section>
  );
}
