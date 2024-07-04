import React from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Offer from "./Offer/Offer";
import Footer from "./Footer/Footer";
import { CookiesProvider } from "react-cookie";
import CookiesAcceptor from "./Cookies/CookiesAcceptor";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Header />
        <Hero />
        <Offer />
        <About />
        <Contact />
        <CookiesAcceptor />
        <Footer />
      </div>
    </CookiesProvider>
  );
}

export default App;
