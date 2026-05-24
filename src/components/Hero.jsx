import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CTAButtonPopup from "./Button";

const mentors = [
  {
    name: "Riya",
    role: "VP, Product Design",
    exp: "8+ Yrs Experience",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png",
    company: "Meta",
    bg: "from-green-300 to-green-500",
  },
  {
    name: "Nancy",
    role: "VP, Visual Design",
    exp: "5+ Yrs Experience",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png",
    company: "Microsoft",
    bg: "from-purple-300 to-purple-500",
  },
  {
    name: "Nick",
    role: "MLS, UX Design",
    exp: "15+ Yrs Experience",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png",
    company: "Disney",
    bg: "from-yellow-200 to-yellow-400",
  },
  {
    name: "John",
    role: "VP, Visual Design",
    exp: "5 Yrs Experience",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png",
    company: "Google",
    bg: "from-orange-300 to-orange-500",
  },
];

// Duplicate for infinite loop
const loopMentors = [...mentors, ...mentors];

// Slow continuous shaggy animation variants for the "60" badge
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

const Hero = () => {
  return (
    <section id="/" className="relative overflow-hidden text-white px-4 pt-24 pb-16">

      {/* Background */}
      <img
        src="https://ik.imagekit.io/psltlu4ds/HR%20navin/e2cd13c5695d245f7a7413b6b88742e0a16c798a.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <motion.div 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="
    inline-flex w-fit
    px-4 py-1 text-sm
    bg-white/10
    border border-white/20
    items-center gap-3 justify-center
    rounded-full mb-6
  "
>
  <img
    src="https://ik.imagekit.io/psltlu4ds/Vector%20(5).png"
    className="w-5 h-5"
    alt="logo"
  />

AI powered HR Training
</motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-7xl font-bold leading-normal"
        >
          Become a job ready IT <br /> HR in{" "}
          <motion.span
            variants={shaggyVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <span className="inline-block rotate-[6deg] bg-[#B1E635] text-gray-700 shadow-xl text-2xl md:text-5xl shadow-[#B1E635] px-2 py-2 md:py-3 rounded-xl">
              60
            </span>
          </motion.span>{" "}
          Days
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4   max-w-2xl text-base py-6 lg:text-xl mx-auto"
        >
          Even If You Have No HR Experience, Career Gaps, or Weak Communication  This will help you to get placed
        </motion.p>
          <motion.p 
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4  text-gray-300  max-w-2xl text-base  lg:text-xl mx-auto"
        >
         
                </motion.p>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center text-sm  text-[#B3B3B6] lg:text-base gap-4 md:gap-6 my-6 "
        >
          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group.png" className="w-7 h-7" alt="internship" />
            <span>Internship Program</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/sound.png" className="w-7 h-7" alt="placement" />
            <span>Placement Support</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/flash.png" className="w-7 h-7" alt="ai tools" />
            <span>AI Tools for HR</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group%201707481681.png" className="w-7 h-7" alt="projects" />
            <span>Training + Real Projects</span>
          </div>
        </motion.div>

        {/* CTA */}
       <CTAButtonPopup/>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="text-xs text-gray-400 mt-5"
        >
          Learn From Top Industry Mentors
        </motion.p>
      </div>

      {/* 🔥 CAROUSEL */}
      <div className="relative mt-16 max-w-7xl mx-auto overflow-hidden">
        <div className="pointer-events-none absolute -left-2 md:left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
        <div className="pointer-events-none absolute -right-1 md:right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

    <motion.div
  className="flex gap-6 w-max"
  animate={{
    x: ["0%", "-50%"],
  }}
  transition={{
    repeat: Infinity,
    duration: 28,
    ease: "linear",
  }}
>
   {loopMentors.map((mentor, index) => (
  <motion.div
    key={index}
    
    transition={{ duration: 0.25 }}
    className="group relative min-w-[200px] sm:min-w-[220px] lg:min-w-[250px]"
  >

    {/* glass border only */}
  <div className="p-[2.5px] border-white/40 rounded-[34px] bg-gradient-to-br from-white/40 via-white/15 to-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

  {/* main card */}
  <div className="relative overflow-hidden rounded-[32px] bg-[#1B2030]/95 border border-white/10">

    {/* soft top reflection */}
    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none"></div>

    {/* smooth continuous shine */}
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      <div className="absolute top-0 -left-[40%] h-full w-[30%] rotate-12 bg-white/10 blur-2xl animate-[shine_5s_linear_infinite]"></div>
    </div>

    {/* image */}
    <div className="relative overflow-hidden">
      <img
        src={mentor.img}
        alt={mentor.name}
        className="w-full h-[220px] sm:h-[300px] object-cover bg-[#b1e63574] transition-transform duration-700 group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-black/30 to-transparent"></div>
    </div>

    {/* company */}
    <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
      <p className="text-white text-[10px] sm:text-xs font-medium tracking-wide">
        {mentor.company}
      </p>
    </div>

    {/* content */}
    <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">

      <div className="md:w-12 w-8 h-[2px] md:h-[3px] rounded-full bg-[#C7FF6B] mb-1 lg:mb-3"></div>

      <h3 className="text-white text-sm sm:text-xl font-semibold tracking-wide">
        {mentor.name}
      </h3>

      <p className="text-white/80 text-xs sm:text-sm mt-1 leading-relaxed">
        {mentor.role}
      </p>

      <div className="md:mt-4 mt-2 flex items-center justify-between">

        <p className="text-[#C7FF6B] text-[11px] sm:text-xs italic font-medium tracking-wide">
          {mentor.exp}
        </p>

        <div className="flex items-center gap-1">
          <div className="h-[1px] w-10 bg-gradient-to-r from-[#C7FF6B] to-transparent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C7FF6B]"></div>
        </div>

      </div>
    </div>
  </div>
</div>
  </motion.div>
))}
        </motion.div>
      </div>
       <style>{`
    @keyframes shine {
      0% {
        transform: translateX(0);
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      50% {
        opacity: 1;
      }

      100% {
        transform: translateX(450%);
        opacity: 0;
      }
    }

    .shine-effect {
      animation: shine 5s linear infinite;
    }
  `}</style>
    </section>
  );
};

export default Hero;