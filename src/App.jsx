import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import Mentor from "./components/Mentor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">

      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* COMPANY */}
      <section id="company">
        <About />
      </section>

      {/* FEATURE */}
      <section id="feature">
        <Steps />
      </section>

      {/* PRICING */}
      <section id="pricing">
        <Mentor />
      </section>

      {/* CAREER */}
      <section id="career">
        <Footer />
      </section>

    </div>
  );
};

export default App;