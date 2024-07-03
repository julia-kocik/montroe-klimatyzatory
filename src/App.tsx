import React from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Offer from "./Offer/Offer";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
