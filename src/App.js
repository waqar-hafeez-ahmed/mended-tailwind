import React from "react";
import HomePage from "./pages/home/MainHomePage";
import OurAdvocate from "./pages/our-advocate/MainOurAdvocate";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/advocates" element={<OurAdvocate />}></Route>
    </Routes>
  );
};

export default App;
