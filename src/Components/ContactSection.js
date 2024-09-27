import React from "react";
import Ayesha from "../assets/HeroSection/Ayesha.svg";
import Marin from "../assets/HeroSection/Marin.svg";
import rightArrow from "../assets/Group 1686552199.svg";

export default function ContactSection() {
  const arr = [
    {
      name: "Milly Cyrus",
      title: "Global Lead",
      description:
        "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
      image: Marin,
    },
    {
      name: "Vinita Singh",
      title: "Asst. Global Lead",
      description:
        "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
      image: Ayesha,
    },
  ];
  return (
    <div className="contact-Section-container">
      <div className="contact-Section">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-12 text-start">
              <h2 className="contact-section-heading">
                LETS START <div>SOMETHING</div>{" "}
                <span className="block">NEW</span> TOGETHER
              </h2>
            </div>
            <div className="flex gap-10 ">
              {arr.map((person, index) => (
                <div className="contact-card-border">
                  <div
                    key={index}
                    className="flex flex-col justify-evenly contact-card"
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="object-cover w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="contact-card-description">
                        {person.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="contact-card-title">
                        {person.name}, {person.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col ml-auto text-right contact-form">
            <div>
              <h3 className="contact-form-title">
                Give us a few details and we’ll get in touch
              </h3>
              <form className="main-contact-form">
                <input type="text" placeholder="Name*" className="w-full " />
                <input
                  type="text"
                  placeholder="Company name*"
                  className="w-full "
                />
                <input type="email" placeholder="Email*" className="w-full " />
                <input
                  type="text"
                  placeholder="Phone no*"
                  className="w-full "
                />
                <input type="text" placeholder="Message*" className="w-full " />
              </form>
            </div>
            <button
              type="btn"
              className="flex items-center justify-center gap-3 contact-form-submit-btn"
            >
              CONTACT US <img src={rightArrow} alt="right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
