"use client";
import React from "react";
// dummy import
import { ArrowUpRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden text-white py-24 px-4">

      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src='https://ik.imagekit.io/psltlu4ds/HR%20navin/590eec95af33dcb393e4eb733384544ab95653c7.jpg?updatedAt=1777720251045'
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#020617]/80 z-0"></div> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* QUOTE TEXT */}
        <p className="text-gray-300 text-lg lg:text-2xl mb-6 relative">
          <span className="md:text-4xl text-lg absolute -left-2 md:left-32 top-0 md:top-[-10px] opacity-40"><FaQuoteLeft /></span>
          If You're Serious About Changing Your Career <br />
          This Program Is For You
          <span className="md:text-4xl text-lg absolute -right-2 md:right-32 top-0 md:top-[-10px] opacity-40"><FaQuoteRight /></span>
        </p>

        {/* DOT */}
        <div className="w-[40%] mx-auto"> <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Frame%202147224427.png" alt="line" /></div>

        {/* 🔥 MAIN TEXT */}
        <h2 className="text-3xl md:text-5xl font-bold flex justify-center mt-5 items-center gap-3">

          {/* GLOW BOX */}
          <span className="relative inline-block">
            <span className="relative z-10 bg-lime-400 text-black px-3 py-1 rounded-xl font-bold">
              60
            </span>

            {/* Glow */}
            <span className="absolute inset-0 blur-xl bg-lime-400/60 rounded-xl"></span>
          </span>

          Days from now
        </h2>

        {/* BUTTON */}
        <div className="inline-block p-[1.5px]  rounded-xl mt-10 bg-gradient-to-r from-[#FFF0F0] to-transparent">
          <button className="bg-[#4043FE] hover:bg-indigo-600 px-8 py-3 rounded-xl flex items-center gap-2 text-white">
            Book Your Seat Now <ArrowUpRight size={18} />
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Limited seats available
        </p>

      </div>
    </section>
  );
}