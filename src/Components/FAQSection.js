import React, { useState } from "react";

import faqArrow from "../assets/faq.svg";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const arr = [
    "How do I sign up?",
    "What information do I need to provide during the sign-up process?",
    "Is my information secure during the sign-up process?",
    "Who can apply?",
    "What are the terms and conditions for the collaboration?",
    "What is the minimum duration of the contract?",
  ];

  return (
    <section>
      <div className="FAQ-Section">
        <h2>Frequently asked questions</h2>

        <div className="space-y-4">
          {arr.map((faq, index) => (
            <div
              key={index}
              className="py-4 border-b"
              onClick={() => toggleFAQ(index)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="fqa-question">{faq}</span>
                <span>
                  <img
                    src={faqArrow}
                    alt="arrow"
                    className={activeFAQ === index ? "arrow-up" : "arrow-down"}
                  />
                </span>
              </button>
              {activeFAQ === index && (
                <p className="mt-2 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
                  commodi laborum repellendus quasi optio harum quae enim,
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
