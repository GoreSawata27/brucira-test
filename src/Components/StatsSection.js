import React from "react";

export default function StatsSection() {
  return (
    <section>
      <div className="stats-section">
        <div className="flex items-center gap-3">
          <div className="global-hr"></div>
          <h3 className="global-title">WE ARE GLOBAL</h3>
        </div>

        <div className="grid grid-cols-2 gap-8 text-start md:grid-cols-4">
          <div>
            <h4 className="stats-count">
              60<span className="plus">+</span>
            </h4>
            <p className="title">brands partnered with</p>
          </div>
          <div>
            <h4 className="stats-count">
              3K<span className="plus">+</span>
            </h4>
            <p className="title">brand content assets created</p>
          </div>
          <div>
            <h4 className="stats-count">
              1K<span className="plus">+</span>
            </h4>
            <p className="title">global partners and collaborators</p>
          </div>
          <div>
            <h4 className="stats-count">
              100<span className="plus">+</span>
            </h4>
            <p className="title">cities worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
