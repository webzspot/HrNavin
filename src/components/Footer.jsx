"use client";

import React from "react";
import { motion } from "framer-motion";

// icons
import { ArrowUpRight } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function CTASection() {

  /* ---------------- ANIMATIONS ---------------- */

  const blurReveal = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(14px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (

    <motion.section
      id="career"

      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}

      variants={fadeUp}

      className="relative overflow-hidden scroll-mt-12 text-white py-24 px-4"
    >

      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src="https://ik.imagekit.io/psltlu4ds/HR%20navin/590eec95af33dcb393e4eb733384544ab95653c7.jpg?updatedAt=1777720251045"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* CONTENT */}
      <motion.div
        variants={stagger}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >

        {/* QUOTE TEXT */}
        <motion.p
          variants={blurReveal}
          className="text-gray-300 text-lg lg:text-2xl mb-6 relative"
        >

          {/* LEFT QUOTE */}
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -20,
            }}

            whileInView={{
              opacity: 0.4,
              scale: 1,
              rotate: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.2,
            }}

            viewport={{ once: true }}

            className="md:text-4xl text-lg absolute -left-2 md:left-32 top-0 md:top-[-10px] opacity-40"
          >
            <FaQuoteLeft />
          </motion.span>

          If You're Serious About Changing Your Career
          <br />
          This Program Is For You

          {/* RIGHT QUOTE */}
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: 20,
            }}

            whileInView={{
              opacity: 0.4,
              scale: 1,
              rotate: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.3,
            }}

            viewport={{ once: true }}

            className="md:text-4xl text-lg absolute -right-2 md:right-32 top-0 md:top-[-10px] opacity-40"
          >
            <FaQuoteRight />
          </motion.span>

        </motion.p>

        {/* DOT IMAGE */}
        <motion.div
          variants={fadeUp}
          className="w-[40%] mx-auto"
        >
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Frame%202147224427.png"
            alt="line"
          />
        </motion.div>

        {/* MAIN TEXT */}
        <motion.h2
          variants={blurReveal}
          className="text-3xl md:text-5xl font-bold flex justify-center mt-5 items-center gap-3"
        >

          {/* GLOW BOX */}
          <span className="relative inline-block">

            {/* NUMBER */}
            <motion.span

              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -12,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 6,
              }}

              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}

              viewport={{ once: true }}

              className="
                inline-block
                rotate-[6deg]
                bg-[#B1E635]
                text-black
                shadow-xl
                text-3xl
                md:text-5xl
                shadow-[#B1E635]
                px-2 py-3
                rounded-xl
              "
            >
              60
            </motion.span>

            {/* Glow */}
            <span className="absolute inset-0 blur-xl bg-lime-400/60 rounded-xl"></span>

          </span>

          Days from now
        </motion.h2>

        {/* BUTTON */}
        <motion.div
          variants={fadeUp}
          className="inline-block p-[1.5px] rounded-xl  hover:scale-105 mt-10 bg-gradient-to-r from-[#FFF0F0] to-transparent"
        >

          <motion.button

           

            className="bg-[#4043FE] cursor-pointer  px-8 py-3 rounded-xl flex items-center gap-2 text-white"
          >

            Book Your Seat Now

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowUpRight size={18} />
            </motion.div>

          </motion.button>

        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.p
          variants={fadeUp}
          className="text-xs text-gray-400 mt-2"
        >
          Limited seats available
        </motion.p>

      </motion.div>

    </motion.section>
  );
}