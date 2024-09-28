import React, { useState } from "react";
import partnersOne from "../assets/unsplash__H6wpor9mjs.svg";
import partnersTwo from "../assets/Expertise/Mask group.svg";
import leftArrow from "../assets/Vector 208.svg";
import rightArrow from "../assets/Group 1686552199.svg";
import videoPreview from "../assets/HeroSection/image 793.svg";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const frames = [
    {
      title: "LISSA SMITH",
      role: "DIRECTOR OF MARKETING AND COMMUNICATIONS",
      company: "VYMO",
      image: partnersOne,
      description:
        "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
    },
    {
      title: "JOHN DOE",
      role: "CEO",
      company: "Tech Corp",
      image: partnersTwo,
      description:
        "Typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled Lorem Ipsum is simply dummy text of the printing",
    },
    {
      title: "LISSA SMITH",
      role: "DIRECTOR OF MARKETING AND COMMUNICATIONS",
      company: "VYMO",
      image: videoPreview,
      description:
        "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
    },
  ];

  const next = () => {
    if (index < frames.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-8 ">
        <div className="testimony-hr"></div>
        <div className="testimony">TESTIMONY FROM OUR PARTNERS</div>
      </div>
      <div className="gallery-container">
        <div className="image-container">
          <img src={frames[index].image} alt={frames[index].title} />
        </div>
        <div className="text-container">
          <div className="frame-description">{frames[index].description}</div>
          <div className="flex items-end justify-between ">
            <div className="frame-role">
              <div className="frame-title">
                {frames[index].title},<span className="frame-company">{frames[index].company}</span>
              </div>
              <div className="frame-role-title">{frames[index].role}</div>
            </div>
            <div className="button-container">
              <button
                className={`flex items-center justify-center prev ${index === 0 && "cursor-not-allowed "}`}
                onClick={prev}
                disabled={index < 1}
              >
                <img src={leftArrow} alt="left Arrow" />
              </button>
              <button
                className={`flex items-center justify-center next ${index === 2 && "cursor-not-allowed "}`}
                onClick={next}
                disabled={index > 2}
              >
                <img src={rightArrow} alt="right Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
