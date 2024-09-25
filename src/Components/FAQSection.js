import React, { useState } from "react";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold">Frequently asked questions</h2>

      <div className="space-y-4">
        {[
          "How do I sign up?",
          "What information do I need to provide during the sign-up process?",
          "Is my information secure during the sign-up process?",
          "Who can apply?",
          "What are the terms and conditions for the collaboration?",
          "What is the minimum duration of the contract?",
        ].map((faq, index) => (
          <div key={index} className="py-4 border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg">{faq}</span>
              <span>{activeFAQ === index ? "−" : "+"}</span>
            </button>
            {activeFAQ === index && (
              <p className="mt-2 text-gray-600">
                This is the answer to the question. You can replace this text
                with the actual answer.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
