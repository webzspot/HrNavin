import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 bg-[#01071999]  w-full z-50">

      {/* NAVBAR */}
      <div className="max-w-7xl  mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/learners%20Hub%20logo%20%205@4x%20(1).png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Company
          </a>

          <a href="#" className="hover:text-white transition">
            Feature
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Career
          </a>
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* SMALL SIDE NAV */}
      <div
        className={`fixed top-4 right-4 w-[240px] rounded-2xl
        bg-[#0b0f2a]/95 backdrop-blur-xl border border-white/10
        text-white z-50 transform transition-all duration-300 shadow-2xl
        ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-[120%] opacity-0"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-sm font-semibold">Menu</h3>

          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col p-4 text-sm">

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/5 hover:text-white/70"
          >
            Home
          </a>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/5 hover:text-white/70"
          >
            Company
          </a>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/5 hover:text-white/70"
          >
            Feature
          </a>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/5 hover:text-white/70"
          >
            Pricing
          </a>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="py-3 hover:text-white/70"
          >
            Career
          </a>

          {/* BUTTON */}
          <button className="mt-5 bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>

        </nav>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
    </header>
  );
};

export default Navbar;