import React from "react";
import HeroSection from "./HeroSection";
import Advocates from "./Advocates";
import JoinUs from "../../components/JoinUs";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const OurAdvocate = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Advocates />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default OurAdvocate;
