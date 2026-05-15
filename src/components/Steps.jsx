import React, { useEffect, useState, useRef, useCallback } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IoCheckmarkSharp } from "react-icons/io5";
import CTAButtonPopup from "./Button";

/* ---------------- ICONS ---------------- */
const BookIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const ArrowIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="9" /><path d="M10 8l4 4-4 4" />
  </svg>
);
const LightningIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);
const PeopleIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="3" />
    <path d="M4 20c0-3 2-5 5-5" /><path d="M14 20c0-3 2-5 5-5" />
  </svg>
);
const MicIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" />
  </svg>
);
const SearchIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" />
  </svg>
);
const InternIcon = ({ color = "#111" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M5 12h10" /><path d="M12 5l7 7-7 7" />
  </svg>
);

const STEP_ICONS = [BookIcon, ArrowIcon, LightningIcon, PeopleIcon, MicIcon, SearchIcon, InternIcon];

/* ---------------- DATA ---------------- */
const STEPS = [
  {
    id: 1,
    title: "HR Recruitment Fundamentals",
    sub: "Learn End-to-End Recruitment Practically",
    points: [
      "Understanding the complete recruitment lifecycle",
      "Resume screening & candidate shortlisting",
      "LinkedIn & Naukri sourcing techniques",
      "IT & Non-IT recruitment basics",
      "Real-time recruitment workflow exposure",
    ],
    outcome: "Build strong recruiter skills from scratch.",
  },
  {
    id: 2,
    title: "Communication & Confidence Building",
    sub: "Improve Your Professional Communication",
    points: [
      "HR communication fundamentals",
      "Interview speaking practice sessions",
      "Voice & confidence improvement activities",
      "Professional email & WhatsApp communication",
      "Mock HR calling & roleplay practice",
    ],
    outcome: "Speak confidently in interviews and HR discussions.",
  },
  {
    id: 3,
    title: "HR Generalist Training",
    sub: "Learn Core HR Operations",
    points: [
      "Payroll & attendance basics",
      "Employee onboarding process",
      "HR documentation & HR operations",
      "PF, ESI & compliance basics",
      "HR policies & employee management fundamentals",
    ],
    outcome: "Gain practical exposure to HR Generalist activities.",
  },
  {
    id: 4,
    title: "Interview Preparation",
    sub: "Get Ready to Attend Interviews Confidently",
    points: [
      "Resume preparation & profile building",
      "HR interview questions & answers",
      "Mock interviews with trainer feedback",
      "Salary negotiation guidance",
      "Corporate interview preparation strategies",
    ],
    outcome: "Attend interviews with confidence and clarity.",
  },
  {
    id: 5,
    title: "Placement Support",
    sub: "Dedicated Job Support Until Placement",
    points: [
      "Daily job updates & openings",
      "Consultancy & IT company opportunities",
      "Referral & recruiter support",
      "Job application guidance",
      "Placement tracking & follow-up support",
    ],
    outcome: "Increase your chances of getting placed faster.",
  },
  {
    id: 6,
    title: "Internship Opportunity",
    sub: "Gain Real-Time HR Exposure",
    points: [
      "Live internship experience in recruitment",
      "Candidate coordination activities",
      "Practical sourcing exposure",
      "Team collaboration & HR workflow understanding",
      "Experience certificate support",
    ],
    outcome: "Build practical experience before joining a company.",
  },
  {
    id: 7,
    title: "AI in HR",
    sub: "Learn Future-Ready HR Skills",
    points: [
      "AI tools used in recruitment",
      "AI-based resume screening techniques",
      "AI sourcing & outreach automation",
      "ChatGPT & recruitment productivity workflows",
      "Future trends in AI-powered hiring",
    ],
    outcome: "Become an AI-enabled modern HR professional.",
  },
];

const ANGLES = [-90, -35, 20, 75, 130, 180, 225];

/* ---------------- ORBIT ---------------- */
function Orbit({ active, setActive, size }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.4;
  const centerR = size * 0.2;
  const nodeSize = size * 0.12;

  const getPos = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg width={size} height={size} className="absolute inset-0" style={{ overflow: "visible" }}>
        <style>{`
          @keyframes orbitCW { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
          }
          @keyframes orbitACW { 
            0% { transform: rotate(360deg); } 
            100% { transform: rotate(0deg); } 
          }
          @keyframes orbitSlow { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
          }
          .orbit-ring-cw {
            animation: orbitCW 40s linear infinite;
            will-change: transform;
            transform-origin: 50% 50%;
          }
          .orbit-ring-acw {
            animation: orbitACW 40s linear infinite;
            will-change: transform;
            transform-origin: 50% 50%;
          }
          .orbit-ring-slow {
            animation: orbitSlow 24s linear infinite;
            will-change: transform;
            transform-origin: 50% 50%;
          }
        `}</style>
        <g className="orbit-ring-cw">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.8" strokeDasharray="4 10" strokeLinecap="round" />
        </g>
        <g className="orbit-ring-acw">
          <circle cx={cx} cy={cy} r={r * 0.78} fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.7" strokeDasharray="3 9" strokeLinecap="round" />
        </g>
        <g className="orbit-ring-slow">
          <circle cx={cx} cy={cy} r={r * 0.6} fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.6" strokeDasharray="2 8" strokeLinecap="round" />
        </g>
      </svg>

      {/* Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute rounded-full bg-white flex flex-col items-center justify-center"
        style={{
          width: centerR * 2, height: centerR * 2,
          left: cx - centerR, top: cy - centerR,
          boxShadow: "0 0 45px rgba(99,102,241,0.8), 0 0 90px rgba(99,102,241,0.45)",
        }}
      >
        <div className="mb-1 p-1 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2129CA] to-[#0A135A]">
          <PiBookOpenTextLight size={28} className="text-white" />
        </div>
        <div style={{ fontSize: size * 0.038, color: "#111827", fontWeight: 700, textAlign: "center", lineHeight: 1.1 }}>
          HR<br />Fundamentals
        </div>
      </motion.div>

      {/* Nodes */}
      {STEPS.map((step, i) => {
        const pos = getPos(ANGLES[i]);
        const isActive = active === step.id;
        return (
          <motion.button
            key={step.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "backOut" }}
            onClick={() => {
              setActive(step.id);
              const isMobile = window.innerWidth < 1024;
              const element = document.getElementById(
                isMobile
                  ? `mobile-step-${step.id}`
                  : `desktop-step-${step.id}`
              );
              if (element) {
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset -
                  (isMobile ? 260 : 180);
                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute flex items-center justify-center font-bold transition-all duration-300 cursor-pointer"
            style={{
              width: nodeSize, height: nodeSize,
              left: pos.x - nodeSize / 2, top: pos.y - nodeSize / 2,
              borderRadius: 12,
              background: isActive ? "#3B82F6" : "#ffffff",
              color: isActive ? "#fff" : "#111",
              fontSize: size * 0.034,
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: isActive ? "0 0 22px rgba(59,130,246,0.95)" : "0 4px 14px rgba(0,0,0,0.15)",
              transition: "all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
            }}
          >
            {step.id}
          </motion.button>
        );
      })}
    </div>
  );
}

/* ---------------- STEP CARD - Always Open ---------------- */
function StepCard({ step, active, setActive, index, isMobile }) {
  const Icon = STEP_ICONS[step.id - 1];
  const isActive = active === step.id;
  const cardId = isMobile ? `mobile-step-${step.id}` : `desktop-step-${step.id}`;

  return (
    <motion.div
      id={cardId}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "-50px 0px -50px 0px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative w-full"
    >
      <motion.div
        className="w-full rounded-3xl bg-white overflow-hidden"
        animate={{
          boxShadow: isActive
            ? "0 20px 60px rgba(0,0,0,0.16), 0 0 0 2px #3B82F6"
            : "0 6px 18px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex space-x-3 p-4 md:p-6 items-start">
          <motion.div
            animate={{
              backgroundColor: isActive ? "#3B82F6" : "#ffffff",
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: [0.2, 0.8, 0.4, 1],
            }}
            className="rounded-2xl flex items-center justify-center shrink-0 border border-[#e5e7eb]"
            style={{
              width: 60,
              height: 60,
            }}
          >
            <Icon color={isActive ? "#fff" : "#111"} />
          </motion.div>

          <div className="flex-1">
            <motion.p
              animate={{
                color: isActive ? "#111827" : "#374151",
              }}
              transition={{ duration: 0.2 }}
              className="font-bold text-base lg:text-xl leading-tight"
            >
              {step.title}
            </motion.p>

            <p
              className="mt-2 text-sm md:text-base"
              style={{
                color: "#6b7280",
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {step.sub}
            </p>
          </div>

          <motion.div
            animate={{
              height: isActive ? 70 : 24,
              backgroundColor: isActive ? "#3B82F6" : "#e5e7eb",
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              width: 5,
              borderRadius: 30,
            }}
          />
        </div>

        <div className="md:px-6 px-3 pb-6">
          <div className="h-[1px] w-full bg-[#e5e7eb] mb-2 md:mb-6" />

          <div className="flex flex-col gap-2 md:gap-4">
            {step.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: false, margin: "-20px" }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-[2px]">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p
                  className="md:text-[15px] text-xs"
                  style={{
                    color: "#374151",
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: false, margin: "-20px" }}
            className="md:mt-7 mt-4 md:text-sm text-xs rounded-2xl border border-blue-100 bg-blue-50 p-3 md:p-5"
          >
            <p
              style={{
                fontWeight: 700,
                color: "#2563eb",
                marginBottom: 8,
              }}
            >
              🎯 Outcome
            </p>

            <p
              className="lg:text-[15px] text-xs"
              style={{
                color: "#1e3a8a",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              {step.outcome}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- BADGE ---------------- */
function Badge({ text }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{ width: 24, height: 24, background: "#a3e635", boxShadow: "0 0 10px rgba(163,230,53,0.6)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l2.5 2.5L10 3" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span style={{ color: "#fff", fontSize: 15, fontWeight: 500 }}>{text}</span>
    </motion.div>
  );
}

/* -------------------------------------------------- */
/* DESKTOP: Intersection Observer for Highlighting   */
/* -------------------------------------------------- */
function DesktopLayout({ active, setActive, orbitSize }) {
  // Setup intersection observer to highlight active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const stepId = parseInt(id.split("-")[2]);
            if (stepId && stepId !== active) {
              setActive(stepId);
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-15% 0px -65% 0px",
      }
    );

    STEPS.forEach((step) => {
      const element = document.getElementById(`desktop-step-${step.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [active, setActive]);

  return (
    <div
      className="max-w-7xl mx-auto"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "40px",
        position: "relative",
      }}
    >
      {/* LEFT: sticky column */}
      <div
        style={{
          position: "sticky",
          top: "80px",
          width: "50%",
          flexShrink: 0,
          alignSelf: "flex-start",
        }}
      >
        <Orbit active={active} setActive={setActive} size={orbitSize} />

        {/* <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mt-4"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(59,130,246,0.18)",
              color: "#93c5fd",
              border: "1px solid rgba(59,130,246,0.3)",
            }}
          >
            Currently Viewing: Step {active} of {STEPS.length}
          </span>
        </motion.div> */}
      </div>

      {/* RIGHT: All cards always visible */}
      <div
      className=""
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          paddingBottom: "80px",
          paddingTop: "16px",
        }}
      >
        {STEPS.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            active={active}
            setActive={setActive}
            index={index}
            isMobile={false}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* MOBILE: Fixed Intersection with Sticky Orbit Reference */
/* -------------------------------------------------- */
function MobileLayout({ active, setActive, orbitSize }) {
  const orbitRef = useRef(null);
  const isScrollingToCard = useRef(false);

  // Set initial active card
  useEffect(() => {
    setActive(1);
  }, [setActive]);

  // Setup intersection observer for mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToCard.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const stepId = parseInt(id.split('-')[2]);
            if (stepId && stepId !== active) {
              setActive(stepId);
            }
          }
        });
      },
      {
        threshold: 0.83,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    STEPS.forEach((step) => {
      const element = document.getElementById(`mobile-step-${step.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [active, setActive]);

  // Handle orbit button clicks
  const handleOrbitClick = useCallback((stepId) => {
    isScrollingToCard.current = true;
    setActive(stepId);
    
    const element = document.getElementById(`mobile-step-${stepId}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    
    setTimeout(() => {
      isScrollingToCard.current = false;
    }, 600);
  }, [setActive]);

  return (
    <div className="relative">
      {/* STICKY ORBIT */}
      <motion.div
        ref={orbitRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="sticky top-14 z-20 flex flex-col items-center pt-4  pb-10 mb-10"
        style={{
          background: "linear-gradient(to bottom, #010897 85%, transparent)",
        }}
      >
        <Orbit
          active={active}
          setActive={handleOrbitClick}
          size={orbitSize}
        />
      </motion.div>

      {/* CARDS */}
      <div className="flex flex-col px-4 gap-8 mt-9 pb-10">
        {STEPS.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            active={active}
            setActive={setActive}
            index={index}
            isMobile={true}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* MAIN EXPORT                                        */
/* -------------------------------------------------- */
export default function StepsSection() {
  const [active, setActive] = useState(1);
  const [orbitSize, setOrbitSize] = useState(560);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 1024);
      setOrbitSize(w < 1024 ? 340 : 520);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animated cycling text
  const texts = ["Live HR Projects", "Real Recruitment", "HR Operations", "Documentation"];
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setActiveTextIndex((p) => (p + 1) % texts.length), 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full rounded-b-4xl bg-gradient-to-t from-[#020B32] to-[#010897]"
    >
      <div className="md:px-8 pt-14 max-w-7xl mx-auto md:pt-20">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="font-bold text-white text-xl md:text-5xl leading-tight text-center lg:text-left"
          
        >
          The 7-Step System That
          <br />
          Gets You Placed
        </motion.h1>

        {/* DESKTOP layout */}
        <div className="hidden lg:block">
          <DesktopLayout active={active} setActive={setActive} orbitSize={orbitSize} />
        </div>

        {/* MOBILE layout */}
        <div className="block lg:hidden">
          <MobileLayout active={active} setActive={setActive} orbitSize={orbitSize} />
        </div>

       <div className="mx-auto flex items-center justify-center">
         <CTAButtonPopup
  buttonText="Join HR Program"
 
/>
       </div>
      </div>

      {/* BOTTOM SECTION */}
     <div className="relative mt-6 md:mt-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-20">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2    py-2 mb-3 md:mb-6"
    >
      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
      <span className="md:text-base text-xs  text-gray-300 tracking-wide">
        REAL-TIME INTERNSHIP EXPERIENCE <span className="line-through">Not a Fake Certificate</span>
      </span>
    </motion.div>

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-white font-bold leading-tight max-w-5xl"
      
    >
      
      <span className=" text-lg md:text-5xl">
        Work On LIVE HR Projects While Learning.
      </span>
    </motion.h2>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-white/60 text-sm md:text-base leading-relaxed mt-3 md:mt-6 max-w-3xl"
      
    >
      Through our HR consulting brand{" "}
      <span className="text-white font-semibold">HR Squad</span>,
      selected learners get 
    </motion.p>

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-10 items-center mt-5">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:space-y-5 space-y-3 text-sm md:text-base"
      >

        {[
          "Real IT recruitment exposure",
          "Live hiring support work",
          "HR operations & documentation",
          "Consulting-style HR experience",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-start gap-4  "
          >
            <div className="md:w-6 md:h-6 w-4 h-4 rounded-full bg-lime-400 flex items-center justify-center shrink-0 mt-1">
  <IoCheckmarkSharp className=" md:text-base text-sm text-black" />
</div>

            <p className="text-white/90 leading-relaxed font-medium text-xs md:text-lg">
              {item}
            </p>
          </motion.div>
        ))}

        {/* WARNING BOX */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 mt-8"
        >
          <p className="text-red-300 font-bold text-xs md:text-lg">
            ⚠️ This is not a dummy internship.
          </p>

          <p className="text-white/70  text-xs md:text-base leading-relaxed mt-3">
            You’ll work on actual client hiring requirements,
            
          </p>

          <p className="text-lime-300 text-xs md:text-base font-semibold mt-5">
            👉 This experience makes recruiters take you seriously.
          </p>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
     <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-[40px] scale-90" />

  {/* Glass Card */}
  <div className="relative p-4 md:p-6 rounded-[36px] border border-white/40 bg-white/10 backdrop-blur-2xl shadow-[0_10px_60px_rgba(255,255,255,0.08)] overflow-hidden">

    {/* Inner Border */}
    <div className="rounded-[28px] border border-white/20 overflow-hidden">
      <img
        src="https://ik.imagekit.io/psltlu4ds/WhatsApp%20Image%202026-05-12%20at%205.21.43%20PM.jpeg"
        alt="Internship Certificate"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  <div className="mx-auto flex items-center justify-center">
         <CTAButtonPopup
  buttonText="Join HR Program"
 
/>
</div>
</motion.div>
    </div>
  </div>
</div>
    </motion.div>
  );
}