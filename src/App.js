import React from "react";
import HomePage from "./pages/home/MainHomePage";
import OurAdvocate from "./pages/our-advocate/MainOurAdvocate";
import { Routes, Route } from "react-router-dom";
import MendedTeam from "./pages/mended-team/MainMendedTeam";
import BecomeMember from "./pages/become-a-member/MainBecomeMember";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/advocates" element={<OurAdvocate />}></Route>
      <Route path="/team" element={<MendedTeam />}></Route>
      <Route path="/member" element={<BecomeMember />}></Route>
    </Routes>
  );
};

export default App;
