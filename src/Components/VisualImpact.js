import React from "react";
import Marquee from "react-fast-marquee";

export default function VisualImpact() {
  return (
    <div className="visual-impact">
      <Marquee speed={50} gradient={false}>
        Unleash Visual Impact <span className="mr-14 "></span> |
      </Marquee>
    </div>
  );
}
