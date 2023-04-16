import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AlsHuurder from "../components/Sections/AlsHuurder";
import AlsVerhuurder from "../components/Sections/AlsVerhuurder";
import HoeWerktHet from "../components/Sections/HoeWerktHet";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import AboutUs from "../components/Sections/AboutUs";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AlsHuurder />
      <AlsVerhuurder />
      <HoeWerktHet />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}


