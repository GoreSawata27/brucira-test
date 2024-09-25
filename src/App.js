import React from "react";
import "./scss/style.scss";
import Navbar from "./Components/Navbar";
import MainSectionHero from "./Components/MainSectionHero";
import MovingLogos from "./Components/MovingLogos";
import ExpertiseSection from "./Components/ExpertiseSection";
import StatsSection from "./Components/StatsSection";
import TestimonialSection from "./Components/TestimonialSection";
import FAQSection from "./Components/FAQSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <section className="container">
        <div className="wrapper">
          <MainSectionHero />
          <MovingLogos />
          <ExpertiseSection />
          <StatsSection />
          <TestimonialSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      </section>
    </main>
  );
}
