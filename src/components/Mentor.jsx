"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Check, Video, Infinity, Users, Briefcase } from "lucide-react";
import { Headphones } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const initialData = [
  {
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19",
    tall: true,
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    tall: true,
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  },
  {
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    tall: true,
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

// const chunk = (arr, size) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// };

// const pages = chunk(data, 4);

const mentors = [
  { name:"Navin",     role:"IT Recruitment & HR Career Strategy",   years:"8+ Years", bg:"linear-gradient(160deg,#c9a5f7,#8b3fe8)", img:"https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004" },
  { name:"Ramya",     role:"Communication & Confidence Building",    years:"8+ Years", bg:"linear-gradient(160deg,#82c4f8,#1a6fd4)", img:"https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004" },
  { name:"Melvin",    role:"8+ Years IT Recruitment (End-To-End)",   years:"8+ Years", bg:"linear-gradient(160deg,#ffe97a,#f5c800)", img:"https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004" },
  { name:"Sangeetha", role:"HR Generalist, Payroll & Compliance",    years:"8+ Years", bg:"linear-gradient(160deg,#74f0a8,#18b85c)", img:"https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004" },
  { name:"Suganya",   role:"Advanced HR Guidance",                   years:"6+ Years", bg:"linear-gradient(160deg,#d4d4d4,#a0a0a0)", img:"https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004" },
];

const doubled = [...mentors, ...mentors]; 

export default function CoverflowCarousel() {

  const containerRef = useRef(null);

  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // SECOND CARD ANIMATION
  const secondCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [0, 1, 1]
  );

  const secondCardY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [120, 0]
  );

  const secondCardScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.95, 1]
  );
  // const [index, setIndex] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const next = () => setIndex((prev) => (prev + 1) % pages.length);
  // const prev = () => setIndex((prev) => (prev - 1 + pages.length) % pages.length);



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % mentors.length);
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, []);

  const imgs = [
  "https://images.unsplash.com/photo-1557862921-37829c790f19",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
];

  const [slide, setSlide] = useState(0);
  const [items, setItems] = useState(imgs);

  const next1 = () => {
    setItems((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const prev1 = () => {
    setItems((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  const TpStar = ({ size = 22 }) => (
    <div
      style={{ width: size, height: size, background: "#00b67a", borderRadius: 3 }}
      className="flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" style={{ width: size * 0.62, height: size * 0.62, fill: "#fff" }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  );

  // ── Play button ──────────────────────────────────────────────────────────────
  const PlayBtn = ({ size = 46, className = "" }) => (
    <button
      className={`flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer border-0 ${className}`}
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      <FaPlay size={size * 0.33} color="#111" style={{ marginLeft: 2 }} />
    </button>
  );

  // ── Avatar stack (3 rounded-square avatars) ──────────────────────────────────
  const AvatarStack = ({ size = 38 }) => {
    const gradients = [
      "linear-gradient(135deg,#c9a882,#a07850)",
      "linear-gradient(135deg,#9ab8d4,#6888a8)",
      "linear-gradient(135deg,#444,#222)",
    ];
    return (
      <div className="flex">
        {gradients.map((bg, i) => (
          <div
            key={i}
            style={{
              width: size, height: size,
              borderRadius: 10,
              background: bg,
              border: "2.5px solid #fff",
              marginLeft: i === 0 ? 0 : -10,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    );
  };

  // ── Single video card ─────────────────────────────────────────────────────────
  const VideoCard = ({ imgSrc, gradient, width, height, playPos = "center", className = "" }) => {
    const posMap = {
      "bottom-left": "absolute bottom-4 left-4",
      center:        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "center-low":  "absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    };
    return (
      <div
        className={`relative rounded-2xl overflow-hidden flex-shrink-0 ${className}`}
        style={{ width, height, background: gradient || "#ccc" }}
      >
        {imgSrc && (
          <img src={imgSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <PlayBtn className={posMap[playPos] || posMap.center} size={46} />
      </div>
    );
  };

  const g = [
    "linear-gradient(170deg,#5a8c5a 0%,#2d5c2d 100%)",
    "linear-gradient(170deg,#e0d4c0 0%,#b8a484 100%)",
    "linear-gradient(170deg,#aaa098 0%,#6e6460 100%)",
    "linear-gradient(170deg,#c8c0b0 0%,#908070 100%)",
  ];

  const mPairs = [[0, 1], [2, 3]];
  const pair = mPairs[slide % mPairs.length];

  return (
    <>
       <section  className="py-12 container mx-auto px-4 relative">
      <div className=" mb-12 z-40">
        <h2 className=" text-3xl lg:text-5xl font-semibold ">Learn From Multiple Mentors</h2>
        <p className="text-gray-400 mt-2 font-light">Across 60 days, 7–8 working HR professionals guide you.</p>
      </div>
 
      {/* Marquee wrapper */}
      <div className="relative overflow-hidden ">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 h-full w-28 lg:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 lg:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
<div className="absolute w-full h-full  -top-52 z-10 "><img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/bottom%20curve.png" alt="" /></div>
<div className="absolute w-full h-full  -bottom-80 z-10 "><img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/bottom%20curve.png" alt="" /></div>
        <div className="marquee-track">
          {doubled.map((m, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] rounded-lg bg-[#f0f0ec]  pt-4 pb-0 hover:-translate-y-2 transition-transform shadow-sm">
              {/* Top info */}
              <div className="flex justify-between items-start px-4 mt-7 mb-3">
                <div>
                  <h3 className="font-black text-xl ">{m.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug h-9 max-w-[150px]">{m.role}</p>
                </div>
                <span className="text-[11px] bg-white px-3 py-1 rounded-full shadow text-gray-700 whitespace-nowrap">
                  {m.years}
                </span>
              </div>

              {/* Photo */}
              <div className="rounded-t-2xl h-[230px] overflow-hidden" style={{background: m.bg}}>
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          ))}
        </div>
      </div>

       <style>{`
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: slide 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>

 <section
      ref={containerRef}
      className="py-10 lg:py-16 mb-20 px-4"
    >
      <div className="max-w-5xl mx-auto">

        {/* WRAPPER */}
        <div className="relative h-[800px] md:h-[950px]">

          {/* FIRST CARD */}
          <div className="sticky top-24 z-20 w-full">

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10">
              60 Day Transformation
            </h2>

            {/* CARD */}
            <div className="bg-[#F3F0EB] rounded-2xl p-6 md:px-8 md:py-14 shadow-sm">

              {/* TOP BADGES */}
              <div className="flex flex-wrap gap-3 items-center mb-6">

                <span className="bg-black text-white text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                  📅 Month 1
                </span>

                <span className="bg-white text-gray-700 text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Daily 2 Hours | Live
                </span>

              </div>

              {/* DIVIDER */}
              <div className="border-t border-black/10 mb-6"></div>

              {/* TITLE */}
              <h3 className=" md:text-4xl font-semibold mb-4 tracking-wide">
                FOUNDATION + CONFIDENCE
              </h3>

              {/* LIST */}
              <ul className="space-y-2 text-sm md:text-xl text-gray-800">
                <li>• HR Fundamentals & IT Recruitment Basics</li>
                <li>• Live Sourcing On Naukri & LinkedIn</li>
                <li>• Resume Screening & ATS Practice</li>
                <li>• Communication Training + Roleplays</li>
              </ul>

              {/* OUTCOME */}
              <div className="mt-6 inline-block bg-white text-gray-700 text-base md:text-xl px-4 py-2 rounded-lg shadow-sm">
                Outcome: You Stop Fearing Calls & Interviews
              </div>

            </div>
          </div>

          {/* SECOND CARD */}
          <motion.div
            style={{
              
              y: secondCardY,
              scale: secondCardScale,
            }}
            className="relative z-30 w-full mt-20 md:mt-12"
          >

            <div className="bg-[#B1E635] rounded-2xl p-6 md:px-8 md:py-14 shadow-xl">

              {/* TOP BADGES */}
              <div className="flex flex-wrap gap-3 items-center mb-6">

                <span className="bg-black text-white text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                  📅 Month 2
                </span>

                <span className="bg-[#d8ff75] text-gray-800 text-sm md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Daily 2 Hours | Live
                </span>

              </div>

              {/* DIVIDER */}
              <div className="border-t border-black/10 mb-6"></div>

              {/* TITLE */}
              <h3 className=" md:text-4xl font-semibold mb-4 tracking-wide">
                ADVANCED HR + PLACEMENT
              </h3>

              {/* LIST */}
              <ul className="space-y-2 text-sm md:text-xl text-gray-900">
                <li>• Salary Negotiation & Offer Handling</li>
                <li>• Interview Coordination & HR Operations</li>
                <li>• Payroll & HR Generalist Exposure</li>
                <li>• Mock Interviews + Job Search Strategy</li>
              </ul>

              {/* OUTCOME */}
              <div className="mt-6 inline-block bg-white text-gray-800 text-base md:text-xl px-4 py-2 rounded-lg shadow-sm">
                Outcome: You Start Attending Interviews With Confidence
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>

 <div className="bg-white py-16 select-none">
  {/* ══ DESKTOP ══ */}
  <div className="hidden sm:flex justify-center gap-4 px-6 py-10 max-w-7xl mx-auto items-start">
    
    {/* LEFT CONTENT */}
    <div className="flex relative  flex-col gap-5 w-[260px] lg:w-[300px] xl:w-[320px]">
      
      {/* Heading */}
      <div className="absolute -top-0">
        <div className="flex items-start gap-2 mb-3">
          <h2 className="text-[2.25rem] font-extrabold whitespace-nowrap leading-[1.1] m-0 text-gray-950">
            Real People
            <br />
            Real Result.
          </h2>

          <div className="pt-1">
            <AvatarStack size={40} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            Excellent
          </span>

          <div className="flex gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <TpStar key={i} size={22} />
            ))}
          </div>

          <span className="text-sm text-gray-900 underline cursor-pointer font-medium">
            500+ reviews
          </span>
        </div>
      </div>

      {/* FIRST CARD */}
      <div className="w-full mt-32">
        <VideoCard
          imgSrc={imgs[0]}
          height={440}
          width="100%"
          playPos="bottom-left"
          className="w-full"
        />
      </div>
    </div>

    {/* CENTER CARD */}
   {/* CENTER CARD */}
<div className="w-[260px] lg:w-[300px] xl:w-[320px] flex justify-end self-end">
  <VideoCard
    imgSrc={imgs[1]}
    height={315}
    width="100%"
    playPos="center"
    className="w-full"
  />
</div>

    {/* RIGHT CARD */}
    <div className="w-[260px] lg:w-[300px] xl:w-[320px]">
      <VideoCard
        imgSrc={imgs[2]}
        height={440}
        width="100%"
        playPos="center-low"
        className="w-full"
      />
    </div>

    {/* LAST CARD */}
    <div className="w-[260px] lg:w-[300px] xl:w-[320px] flex justify-start self-start mt-20">
      <VideoCard
        imgSrc={imgs[3]}
        height={315}
        width="100%"
        playPos="center"
        className="w-full"
      />
    </div>
  </div>

  {/* ══ MOBILE ══ */}
  <div className="sm:hidden px-5 pt-6 pb-5">
    <div className="mb-4">
      <div className="flex items-start gap-2 mb-2.5">
        <h2 className="text-[1.65rem] font-extrabold  leading-[1.15] m-0 text-gray-950">
          Real People
          <br />
          Real Result.
        </h2>

        <div className="pt-1">
          <AvatarStack size={32} />
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="text-sm font-semibold text-gray-900">
          Excellent
        </span>

        <div className="flex gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <TpStar key={i} size={19} />
          ))}
        </div>

        <span className="text-sm text-gray-900 underline cursor-pointer font-medium">
          500+ reviews
        </span>
      </div>
    </div>

   <div className="flex gap-3 items-end justify-center">
  <VideoCard
    imgSrc={imgs[pair[0]]}
    width={170}
    height={248}
    playPos="bottom-left"
  />

  <VideoCard
    imgSrc={imgs[pair[1]]}
    width={170}
    height={205}
    playPos="center"
    className="self-start mt-10"
  />
</div>

    <div className="flex justify-end gap-2 mt-3">
      <button
        onClick={() =>
          setSlide((s) => (s - 1 + mPairs.length) % mPairs.length)
        }
        className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-800 transition-colors cursor-pointer"
      >
        <FiArrowLeft size={15} color="#111" />
      </button>

      <button
        onClick={() => setSlide((s) => (s + 1) % mPairs.length)}
        className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-800 transition-colors cursor-pointer"
      >
        <FiArrowRight size={15} color="#111" />
      </button>
    </div>
  </div>
</div>


      
    </>
  );
}