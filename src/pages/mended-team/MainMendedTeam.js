import Footer from "../../components/Footer";
import JoinUs from "../../components/JoinUs";
import NavBar from "../../components/NavBar";
import Advisors from "./Advisors";
import Team from "./Team";
import React from "react";

const MendedTeam = () => {
  return (
    <div>
      <NavBar />
      <Team />
      <Advisors />
      <JoinUs/>
      <Footer/>
    </div>
  );
};

export default MendedTeam;
