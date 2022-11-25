import React from "react";
import HeaderSearch from "../components/header/HeaderSearch";
import HeaderTop from "../components/header/HeaderTop";
import Navigation from "../components/header/Navigation";
import HeroSection from "../components/Hero/HeroSection";

const Homepage = () => {
  return (
    <div>
      {/* header section start */}
      <HeaderTop />
      <HeaderSearch />
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Homepage;
