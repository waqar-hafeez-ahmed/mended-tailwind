import React from "react";
import HeroSection from "./HeroSection";
import NavBar from "../../components/NavBar";
import OurVision from "./OurVision";
import Features from "./Features";
import MendedTeam from "./MendedTeam";
import JoinUs from "../../components/JoinUs";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OurVision />
      <Features />
      <MendedTeam />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
