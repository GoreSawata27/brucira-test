import React from "react";
import Marquee from "react-fast-marquee";
import darwinboxLogo from "./../assets/movingLogos/Layer-2-2.svg";
import indeedLogo from "./../assets/movingLogos/Indeed-Logo.svg";
import ikeaLogo from "./../assets/movingLogos/2560px-Ikea_logo.svg";
import my11CircleLogo from "./../assets/movingLogos/My_11_circle_logo.svg";
import witLogo from "./../assets/movingLogos/WIT_BIG 1.svg";
import otherLogo from "./../assets/movingLogos/image 755.svg";
import indiagoldLogo from "./../assets/movingLogos/indiagold_transparent_logo_website.svg";

export default function MovingLogos() {
  const logos = [
    { src: darwinboxLogo, alt: "Darwinbox" },
    { src: witLogo, alt: "WIT" },
    { src: indeedLogo, alt: "Indeed" },
    { src: my11CircleLogo, alt: "My11Circle" },
    { src: ikeaLogo, alt: "IKEA" },
    { src: indiagoldLogo, alt: "Indiagold" },
    { src: otherLogo, alt: "Other" },
    { src: my11CircleLogo, alt: "My11Circle" },
  ];

  return (
    <section className="moving-logos">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 mx-6"
          />
        ))}
      </Marquee>
    </section>
  );
}
