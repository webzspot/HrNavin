import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-[#01071999] backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      
      {/* NAVBAR */}
      <div className=" container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/learners%20Hub%20logo%20%205@4x%20(1).png" className="w-full h-full object-cover" alt="logo" />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Company</a>
          <a href="#" className="hover:text-white transition">Feature</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Career</a>
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0b0f2a] text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 p-6 text-sm">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>Company</a>
          <a href="#" onClick={() => setOpen(false)}>Feature</a>
          <a href="#" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setOpen(false)}>Career</a>

          <button className="mt-4 bg-white text-black py-2 rounded-full">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Navbar;