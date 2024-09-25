import React, { useState } from "react";
import accOne from "../assets/Expertise/Mask group.svg";

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <div className="expertise">
        <h2>
          Our expertise and passion <br />
          breathe life into your narratives
        </h2>
        <div className="grid grid-cols-[1fr_2fr] gap-8 md:grid-cols-[1fr_2fr]">
          <div className="flex accordian-img ">
            <img
              src={accOne}
              alt="People clapping"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-start accordion-container ">
            <div className="flex flex-col justify-center">
              <div className="space-y-4 text-gray-500">
                {/* 1*/}
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
                      activeIndex === 0
                        ? "max-h-96 acccprdian-border-bottom "
                        : "max-h-0"
                    }`}
                  >
                    {activeIndex === 0 && (
                      <div>
                        <span className="block accordian-number">01</span>
                        <span className="accordian-title">Innovative</span>
                        <p className="accordian-info">
                          Creation, ensuring your messages resonate worldwide.
                          From concept to distribution, our platform serves as
                          your strategic partner.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2 */}
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
                      activeIndex === 1
                        ? "max-h-96 acccprdian-border-bottom"
                        : "max-h-0"
                    }`}
                  >
                    {activeIndex === 1 && (
                      <div>
                        <span className="block accordian-number">02</span>
                        <span className="accordian-title">Reliable</span>
                        <p className="accordian-info">
                          Creation, ensuring your messages resonate worldwide.
                          From concept to distribution, our platform serves as
                          your strategic partner.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3 */}
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
                      activeIndex === 2
                        ? "max-h-96 acccprdian-border-bottom "
                        : "max-h-0"
                    }`}
                  >
                    {activeIndex === 2 && (
                      <div>
                        <span className="block accordian-number">03</span>
                        <span className="accordian-title">Quality</span>
                        <p className="accordian-info">
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
    </section>
  );
}
