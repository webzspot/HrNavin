import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white px-4 pt-24 pb-16">

      {/* Background */}
      <img
        src="https://ik.imagekit.io/psltlu4ds/HR%20navin/e2cd13c5695d245f7a7413b6b88742e0a16c798a.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <div className="inline-block px-4 py-1 text-sm bg-white/10 border border-white/20 rounded-full mb-6">
          ✨ Smart HR Training
        </div>

        <h1 className="text-3xl md:text-7xl font-bold leading-normal">
          Become a job ready IT <br /> HR in{" "}
          <span className="bg-lime-400 text-black px-3 py-1 rounded-xl">
            60
          </span>{" "}
          Days
        </h1>

        <p className="mt-4 text-[#B3B3B6] max-w-2xl text-xl mx-auto">
          Even If You Have No HR Experience, Career Gaps, or Weak Communication
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group.png" className="w-7 h-7" />
            <span>Internship Program</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/sound.png" className="w-7 h-7" />
            <span>Placement Support</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/flash.png" className="w-7 h-7" />
            <span>AI Tools for HR</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Group%201707481681.png" className="w-7 h-7" />
            <span>Training + Real Projects</span>
          </div>

        </div>

        {/* CTA */}
        <div className="inline-block p-[1.5px] rounded-xl mt-5 bg-gradient-to-r from-[#FFF0F0] to-transparent">
          <button className="bg-[#4043FE] hover:bg-indigo-600 px-8 py-3 rounded-xl flex items-center gap-2 text-white">
            Book Your Seat Now <ArrowUpRight size={18} />
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Learn From Top Industry Mentors
        </p>
      </div>

      {/* 🔥 CAROUSEL */}
      <div className="relative mt-16 max-w-7xl mx-auto  overflow-hidden ">

      <div className="pointer-events-none absolute  -left-2 md:left-0 top-0 h-full w-16 md:w-24 
bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
{/* Right Fade */}
<div className="pointer-events-none absolute -right-1 md:right-0 top-0 h-full w-12 md:w-20 
bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

        <motion.div
          className="flex gap-6 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {loopMentors.map((mentor, index) => (
            <div
              key={index}
              className="min-w-[240px] p-[1px] rounded-2xl 
              bg-gradient-to-b from-white/40 to-white/10 
              shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-3">

                <div className="relative rounded-xl overflow-hidden">

                  <div className={`absolute inset-0 bg-gradient-to-b ${mentor.bg}`}></div>

                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="relative z-10 w-44 h-44 object-cover"
                  />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 via-60% to-transparent"></div>

                  <div className="absolute bottom-3 left-3 z-20">
                    <h3 className="font-semibold text-sm text-white">{mentor.name}</h3>
                    <p className="text-xs text-gray-200">{mentor.role}</p>
                    <p className="text-xs text-gray-300">{mentor.exp}</p>
                  </div>

                </div>

                <p className="text-xs mt-2 text-right text-gray-300">
                  {mentor.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;