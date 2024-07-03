import React from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
