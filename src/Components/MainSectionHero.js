import React from "react";
import Ayesha from "../assets/HeroSection/Ayesha.svg";
import Marin from "../assets/HeroSection/Marin.svg";
import btnArrow from "../assets/HeroSection/Group 1686552199.svg";
import videoPreview from "../assets/HeroSection/image 793.svg";
import previewArrow from "../assets/HeroSection/Vector.svg";

export default function MainSectionHero() {
  return (
    <section>
      <div className="hero-section">
        <h1 className="hero-heading">
          <div>WE ARE A </div>
          <div>
            GLOBAL
            <span className="text-red-500"> PRODUCTION</span>
          </div>
          AGENCY
        </h1>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-8 get-service">
            <p className="get-service-title">
              Designed with the specific needs of large B2B enterprises in mind,
              our platform offers a comprehensive solution to simplify.
            </p>
            <div className="flex items-center gap-6 ">
              <div className="flex items-center justify-center gap-2 rounded-full get-service-video-btn">
                <button className="text-btn">
                  GET PROFESSIONAL VIDEO SERVICES
                </button>
                <img src={btnArrow} alt="right arrow" />
              </div>

              <div className="flex items-center gap-2 space-x-2">
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

                <div className="Services-names">
                  <h6>Marin / Ayesha </h6>
                  <p>Global Services</p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-service-video">
            <img
              className="video-preview-background-img"
              src={videoPreview}
              alt="videoPreview"
            />
            <div className="flex items-center justify-center gap-1 rounded-full play-video-btn">
              <img src={previewArrow} alt="previewArrow" />
              <p>Play Showreel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
