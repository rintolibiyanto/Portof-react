import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PortfolioList from "./Components/PortofolioList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Advice from "./Components/Advice";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
      <Contact />
      <Advice />
      <Footer />
    </div>
  );
}

export default App;
