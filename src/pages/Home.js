import React from "react";
import HeroPage from "../components/HeroPage";
import Section from "../components/Section";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Section />
      <About />
      <Footer />
    </>
  );
};

export default Home;
