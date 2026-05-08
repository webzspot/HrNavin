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

  Smart HR Training
</motion.div>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-7xl font-bold leading-normal"
        >
          Become a job ready IT <br /> HR in{" "}
          <motion.span
            variants={shaggyVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <span className="inline-block rotate-[6deg] bg-[#B1E635] text-black shadow-xl text-3xl md:text-5xl shadow-[#B1E635] px-2 py-3 rounded-xl">
              60
            </span>
          </motion.span>{" "}
          Days
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-[#B3B3B6] max-w-2xl text-xl mx-auto"
        >
          Even If You Have No HR Experience, Career Gaps, or Weak Communication
        </motion.p>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300"
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          className="inline-block hover:scale-105 tran transition-transform p-[1.5px] rounded-xl mt-5 bg-gradient-to-r from-[#FFF0F0] to-transparent"
        >
          <button className="bg-[#4043FE]  px-8 py-3 rounded-xl lg:text-xl flex items-center gap-2 text-white transition-all duration-300 ">
            Book Your Seat Now <ArrowUpRight size={18} />
          </button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="text-xs text-gray-400 mt-2"
        >
          Learn From Top Industry Mentors
        </motion.p>
      </div>

      {/* 🔥 CAROUSEL */}
      <div className="relative mt-16 max-w-7xl mx-auto overflow-hidden">
        <div className="pointer-events-none absolute -left-2 md:left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
        <div className="pointer-events-none absolute -right-1 md:right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

        <motion.div
          className="flex gap-6"
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
              className="min-w-[240px] rounded-[30px] shadow-[0_0_25px_rgba(255,255,255,0.12)]"
            >
              <div className="rounded-[27px] p-[2px] bg-[#c7cbd6a4]">
                <div className="rounded-[24px] bg-[#4A5064] p-2">
                  <div className="relative rounded-[20px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${mentor.bg}`}></div>
                    <div className="relative z-10 flex justify-center items-end h-[200px] lg:h-[230px]">
                      <img src={mentor.img} alt={mentor.name} className="h-full object-contain object-bottom" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                      <div>
                        <h3 className="text-white text-sm font-medium">{mentor.name}</h3>
                        <p className="text-white text-sm leading-tight">{mentor.role}</p>
                        <p className="text-white italic lg:text-xs">{mentor.exp}</p>
                      </div>
                      <p className="text-white text-sm whitespace-nowrap">{mentor.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;