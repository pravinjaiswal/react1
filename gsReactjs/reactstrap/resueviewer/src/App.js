import React from "react";
import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Portfolio from "./Component/Portfolio";
import Resume from "./Component/Resume";
import Testimonials from "./Component/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
