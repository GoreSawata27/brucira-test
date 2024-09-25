import React from "react";
import Navbar from "./Components/Navbar";
import MainSectionHero from "./Components/MainSectionHero";
import "./scss/style.scss";
import MovingLogos from "./Components/MovingLogos";
import ExpertiseSection from "./Components/ExpertiseSection";

export default function App() {
  return (
    <main className="container">
      <Navbar />
      <MainSectionHero />
      <MovingLogos />
      <ExpertiseSection />
    </main>
  );
}
