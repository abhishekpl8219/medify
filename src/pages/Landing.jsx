import React from "react";
import Hero from "./../components/Hero/Hero";
import Dropdown from "../components/Dropdown/Dropdown";
import NavBar from "../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Dropdown />
    </div>
  );
};

export default Landing;
