import React, { useState } from "react";
import accOne from "../assets/Expertise/Mask group.svg";

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="expertise">
      <h2 className="mb-12 text-4xl font-bold text-start">
        Our expertise and passion <br />
        breathe life into your narratives
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex ">
          <img
            src={accOne}
            alt="People clapping"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-gray-500">
              {/* Innovative Accordion */}

              <div>
                <div
                  className="flex items-center justify-between pb-4 border-b cursor-pointer"
                  onClick={() => toggleAccordion(0)}
                >
                  <span>Innovative</span>
                  <span>{activeIndex === 0 ? "-" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 0 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {activeIndex === 0 && (
                    <div className="text-black">
                      <span className="block text-lg font-bold">02</span>
                      <span className="block text-xl font-bold text-red-500">
                        Reliable
                      </span>
                      <p className="text-gray-600">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Reliable Accordion */}
              <div>
                <div
                  className="flex items-center justify-between pb-4 border-b cursor-pointer"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>Reliable</span>
                  <span>{activeIndex === 1 ? "-" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 1 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {activeIndex === 1 && (
                    <div className="text-black">
                      <span className="block text-lg font-bold">02</span>
                      <span className="block text-xl font-bold text-red-500">
                        Reliable
                      </span>
                      <p className="text-gray-600">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quality Accordion */}
              <div>
                <div
                  className="flex items-center justify-between pb-4 border-b cursor-pointer"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Quality</span>
                  <span>{activeIndex === 2 ? "-" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 2 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {activeIndex === 2 && (
                    <div className="text-black">
                      <span className="block text-lg font-bold">02</span>
                      <span className="block text-xl font-bold text-red-500">
                        Reliable
                      </span>
                      <p className="text-gray-600">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
