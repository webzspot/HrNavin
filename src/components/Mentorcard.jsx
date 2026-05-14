"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTAButtonPopup from "./Button";

const mentors = [
  {
    name: "Navin",
    role: "IT Recruitment & HR Career Strategy",
    experience: "6+ Years Experience",
    company: "Technical Hiring Specialist",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Melvin",
    role: "8+ Years IT Recruitment (End-to-End)",
    experience: "8+ Years Experience",
    company: "Senior IT Recruiter",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ramya",
    role: "Communication & Confidence Building",
    experience: "5+ Years Experience",
    company: "Soft Skills Trainer",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sangeetha",
    role: "HR Generalist, Payroll & Compliance",
    experience: "7+ Years Experience",
    company: "HR Ops Expert",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Suganya Karthik",
    role: "Advanced HR & Career Guidance",
    experience: "9+ Years Experience",
    company: "Career Growth Mentor",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
];

// Shared spring config — snappy, no bounce
const SPRING = {
  type: "spring",
  stiffness: 380,
  damping: 36,
  mass: 0.8,
};

export default function MentorSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
  };

  const mentor = mentors[current];
  const prevMentor = mentors[current === 0 ? mentors.length - 1 : current - 1];
  const nextMentor = mentors[current === mentors.length - 1 ? 0 : current + 1];

  return (
    <section className="relative container mx-auto overflow-hidden py-20 px-4 md:px-8">

      {/* TOP CONTENT */}
      <div className="max-w-5xl mx-auto text-center">

       <div className="flex items-center justify-center gap-2">
        
         <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black  tracking-[1px] font-semibold text-lg md:text-5xl "
        >
          Learn From Multiple Mentors <span className="line-through">  NOT ONE TRAINER</span>
        </motion.p>

       </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-4 md:mt-8 max-w-3xl mx-auto text-sm md:text-xl leading-relaxed"
        >
          Across 60 days, 7–8 working HR professionals guide you.
        </motion.p>

      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-7xl mx-auto mt-10 mb-5 md:h-[520px] flex items-center justify-center overflow-hidden">

        {/* LEFT PREVIEW CARD — stays mounted, only animates values */}
        <motion.div
          animate={{ x: -260, rotate: -8, scale: 0.82, opacity: 0.35 }}
          transition={SPRING}
          className="
            hidden lg:block
            absolute
            w-[320px] h-[560px]
            rounded-[36px] overflow-hidden
            border border-black/5
            bg-white
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
        >
          <img src={prevMentor.image} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* RIGHT PREVIEW CARD — stays mounted, only animates values */}
        <motion.div
          animate={{ x: 260, rotate: 8, scale: 0.82, opacity: 0.35 }}
          transition={SPRING}
          className="
            hidden lg:block
            absolute
            w-[320px] h-[560px]
            rounded-[36px] overflow-hidden
            border border-black/5
            bg-white
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
        >
          <img src={nextMentor.image} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* ACTIVE CARD
            — mode="popLayout" keeps the outgoing card visible while the
              incoming card slides in, eliminating any white-flash gap.       */}
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>

          <motion.div
            key={current}
            custom={direction}

            initial={(dir) => ({
              opacity: 0,
              x: dir > 0 ? 260 : -260,
              rotate: dir > 0 ? 8 : -8,
              scale: 0.88,
            })}

            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}

            exit={(dir) => ({
              opacity: 0,
              x: dir > 0 ? -260 : 260,
              rotate: dir > 0 ? -8 : 8,
              scale: 0.88,
            })}

            transition={SPRING}

            className="
              relative z-20
              w-full
              max-w-[380px] md:max-w-[420px]
              md:h-[520px] h-[450px]
              rounded-[36px] overflow-hidden
              border border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]
            "
          >

            {/* IMAGE */}
            <div className="relative h-full">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* NUMBER */}
              <div
                className="
                  absolute top-5 right-5
                  w-14 h-14
                  rounded-2xl
                  bg-[#B1E635] text-black
                  flex items-center justify-center
                  font-bold text-xl
                  shadow-lg shadow-[#B1E635]/40
                "
              >
                {mentor.number}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">

                <p className="text-[#D4FF4F] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
                  {mentor.experience}
                </p>

                <h3 className="text-xl md:text-4xl text-white font-bold mt-3">
                  {mentor.name}
                </h3>

                <p className="text-gray-200 text-xs  md:text-lg leading-relaxed mt-3">
                  {mentor.role}
                </p>

                {/* TAGS */}
                <div className="flex justify-between gap-3 mt-6">

                  <div className="bg-white/15 backdrop-blur-xl w-full border border-white/10 px-4 py-2 rounded-xl">
                    <p className="text-xs md:text-sm text-gray-300">Experience</p>
                    <h4 className="text-xs md:text-sm text-white font-semibold mt-1">
                      {mentor.experience}
                    </h4>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl w-full border border-white/10 px-4 py-2 rounded-xl">
                    <p className="text-xs md:text-sm text-gray-300">Role</p>
                    <h4 className="text-xs md:text-sm text-white font-semibold mt-1">
                      {mentor.company}
                    </h4>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* ARROWS */}
      <div className="flex justify-center items-center gap-5 lg:mt-10">

        {/* LEFT */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={prevSlide}
          className="
            w-14 h-14 rounded-full
            bg-white border border-black/10
            shadow-[0_5px_20px_rgba(0,0,0,0.08)]
            flex items-center justify-center
            hover:bg-[#B1E635] hover:text-black text-black
            transition-all duration-300
          "
        >
          <ChevronLeft size={26} />
        </motion.button>

        {/* INDICATORS */}
        <div className="flex gap-3">
          {mentors.map((_, index) => (
            <div
              key={index}
              className={`
                transition-all duration-500 rounded-full
                ${current === index ? "w-10 h-3 bg-[#B1E635]" : "w-3 h-3 bg-black/15"}
              `}
            />
          ))}
        </div>

        {/* RIGHT */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          onClick={nextSlide}
          className="
            w-14 h-14 rounded-full
            bg-white border border-black/10
            shadow-[0_5px_20px_rgba(0,0,0,0.08)]
            flex items-center justify-center
            hover:bg-[#B1E635] hover:text-black text-black
            transition-all duration-300
          "
        >
          <ChevronRight size={26} />
        </motion.button>

      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto text-gray-800 text-center"
      >

        <div className="inline-block px-8 py-3 md:py-10">
          <p className="text-lg md:text-4xl leading-relaxed">
            💡 Different mentors.{" "}
            Different strengths.{" "}
            <span className="text-[#B1E635]">One goal: Your Job.</span>
          </p>
        </div>

        <div>
          <CTAButtonPopup />
        </div>

      </motion.div>

    </section>
  );
}