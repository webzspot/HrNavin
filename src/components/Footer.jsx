"use client";

import React from "react";
import { motion } from "framer-motion";

// icons
import { ArrowUpRight } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CTAButtonPopup from "./Button";

export default function CTASection() {

  /* ---------------- ANIMATIONS ---------------- */
 const shaggyVariants = {
  initial: { scale: 0.8, rotate: -8, opacity: 0 },
  animate: {
    scale: 1,
    rotate: [6, -3, 5, -2, 4, -1, 3, 0, 2, 6],
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      rotate: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  },
};
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
      {/* QUOTE TEXT */}
<motion.p
  variants={blurReveal}
  className="text-gray-300 text-lg lg:text-2xl mb-6 relative leading-relaxed"
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
    className="md:text-4xl text-lg absolute -left-2 md:left-16 top-0 md:top-[-10px] opacity-40"
  >
    <FaQuoteLeft />
  </motion.span>

  Seats are limited to maintain
  
  quality mentoring.

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
    className="md:text-4xl text-lg absolute -right-2 md:right-16 top-0 md:top-[-10px] opacity-40"
  >
    <FaQuoteRight />
  </motion.span>

</motion.p>

{/* MAIN TEXT */}
<motion.h2
  variants={blurReveal}
  className="text-xl md:text-5xl font-bold text-center leading-tight flex flex-col items-center gap-4 mt-5"
>

  <div className="flex items-center gap-3">

    {/* GLOW BOX */}
    <span className="relative inline-block">

      <motion.span
        variants={shaggyVariants}
        initial="initial"
        animate="animate"
        className="
          inline-block
          rotate-[6deg]
          bg-[#B1E635]
          text-black
          shadow-xl
          text-xl
          md:text-5xl
          shadow-[#B1E635]
          px-2 md:py-3 py-2
          rounded-xl
        "
      >
        60
      </motion.span>

      <span className="absolute inset-0 blur-xl bg-lime-400/60 rounded-xl"></span>

    </span>

    <span>Days From Now</span>

  </div>

  <span className=" md:text-3xl text-gray-200 text-sm md:text-base font-normal mt-5 max-w-3xl">
    You’ll either stay confused —
    <br className="hidden md:block" />
    or you’ll be working as an HR.
    <span className="font-bold">The choice is yours.</span>
  </span>

</motion.h2>

<motion.p
  variants={fadeUp}
  className="text-base text-gray-400 mt-6"
>
  
</motion.p>
{/* BUTTONS */}
<motion.div
className =''
  variants={fadeUp}
  className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
>

  
           <CTAButtonPopup className="flex items-center"
  
    
  />
  

  <motion.button
    whileHover={{ scale: 1.05 }}
    className="border border-white/20 md:mt-4 bg-white/10 backdrop-blur-md px-10 md:px-14 py-3 rounded-xl text-white"
  >
    Talk to HR Mentor
  </motion.button>

</motion.div>

{/* BOTTOM TEXT */}


      </motion.div>

    </motion.section>
  );
}