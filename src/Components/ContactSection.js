import React from "react";

export default function ContactSection() {
  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold">
          LET'S START SOMETHING <span className="text-red-500">NEW</span>{" "}
          TOGETHER
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          {[
            {
              name: "Milly Cyrus",
              title: "Global Lead",
              description:
                "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
              image: "/path-to-image1.jpg",
            },
            {
              name: "Vinita Singh",
              title: "Asst. Global Lead",
              description:
                "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
              image: "/path-to-image2.jpg",
            },
          ].map((person, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={person.image}
                alt={person.name}
                className="object-cover w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="font-bold">
                  {person.name}, {person.title}
                </h4>
                <p className="text-gray-600">{person.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h3 className="mb-6 text-xl font-bold">
            Give us a few details and we’ll get in touch
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Company name*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Phone no*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message*"
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 font-bold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
            >
              CONTACT US →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
