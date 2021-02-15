import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PortfolioList from "./Components/PortofolioList";
import About from "./Components/About";

function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
    </div>
  );
}

export default App;
