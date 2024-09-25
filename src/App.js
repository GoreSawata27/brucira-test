import React from "react";
import Navbar from "./Components/Navbar";
import MainSectionHero from "./Components/MainSectionHero";
import "./scss/style.scss";

export default function App() {
  return (
    <main className="container">
      <Navbar />
      <MainSectionHero />
    </main>
  );
}
