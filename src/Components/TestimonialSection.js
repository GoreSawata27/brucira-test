import React from "react";
import partnersOne from "../assets/unsplash__H6wpor9mjs.svg";

export default function TestimonialSection() {
  return (
    <section>
      <div className="grid items-center grid-cols-1 gap-8 mb-16 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={partnersOne}
            alt="Lissa Smith"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-sm font-semibold text-red-500 uppercase">
            Testimony from our partners
          </h3>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div>
            <h4 className="text-lg font-bold">LISSA SMITH, VYMO</h4>
            <p className="text-gray-500">
              Director of Marketing and Communications
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 border border-black rounded-full">←</button>
            <button className="p-2 text-white bg-red-500 rounded-full">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
