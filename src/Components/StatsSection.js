import React from "react";

export default function StatsSection() {
  return (
    <div className="stats-section">
      <h3 className="mb-8 text-lg font-semibold text-red-500 text-start">
        WE ARE GLOBAL
      </h3>

      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div>
          <h4 className="text-4xl font-bold text-black">
            60<span className="text-red-500">+</span>
          </h4>
          <p className="mt-2 text-gray-600">brands partnered with</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-black">
            3K<span className="text-red-500">+</span>
          </h4>
          <p className="mt-2 text-gray-600">brand content assets created</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-black">
            1K<span className="text-red-500">+</span>
          </h4>
          <p className="mt-2 text-gray-600">
            global partners and collaborators
          </p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-black">
            100<span className="text-red-500">+</span>
          </h4>
          <p className="mt-2 text-gray-600">cities worldwide</p>
        </div>
      </div>
    </div>
  );
}
