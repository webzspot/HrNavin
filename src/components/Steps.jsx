import React, { useEffect, useState } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { motion } from "framer-motion";

/* ---------------- ICONS ---------------- */
const BookIcon = ({ color = "#fff" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ArrowIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8l4 4-4 4" />
  </svg>
);

const LightningIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const PeopleIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="10" r="3" />
    <path d="M4 20c0-3 2-5 5-5" />
    <path d="M14 20c0-3 2-5 5-5" />
  </svg>
);

const MicIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
  </svg>
);

const SearchIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);

const InternIcon = ({ color = "#111" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M5 12h10" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const STEP_ICONS = [
  BookIcon,
  ArrowIcon,
  LightningIcon,
  PeopleIcon,
  MicIcon,
  SearchIcon,
  InternIcon,
];

/* ---------------- DATA ---------------- */
const STEPS = [
  {
    id: 1,
    title: "HR Fundamentals",
    sub: "Understand How HR Really Works Inside IT Companies",
  },
  {
    id: 2,
    title: "Advance HR Knowledge",
    sub: "Build Practical HR Decision Making Skills",
  },
  {
    id: 3,
    title: "Deep Recruitment Training",
    sub: "Master Candidate Screening & Hiring Flow",
  },
  {
    id: 4,
    title: "Communication Mastery",
    sub: "Professional HR Communication Methods",
  },
  {
    id: 5,
    title: "Interview Preparation",
    sub: "Crack Interviews With Confidence",
  },
  {
    id: 6,
    title: "Job Search Strategy",
    sub: "Learn Smart Placement Strategies",
  },
  {
    id: 7,
    title: "Real-Time Internship Exposure",
    sub: "Hands-on Real Company Experience",
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

    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  return (
    <div
      className="relative left-0 lg:-left-10 w-full"
      style={{
        width: size,
        height: size,
        maxWidth: "100%",
      }}
    >
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        style={{
          overflow: "visible",
        }}
      >
        <g
          style={{
            transformOrigin: "50% 50%",
            animation: "orbitClockwise 40s linear infinite",
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="1.8"
            strokeDasharray="4 10"
            strokeLinecap="round"
          />
        </g>

        <g
          style={{
            transformOrigin: "50% 50%",
            animation: "orbitAnti 40s linear infinite",
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={r * 0.78}
            fill="none"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="1.7"
            strokeDasharray="3 9"
            strokeLinecap="round"
          />
        </g>

        <g
          style={{
            transformOrigin: "50% 50%",
            animation: "orbitClockwiseSlow 24s linear infinite",
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={r * 0.6}
            fill="none"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="1.6"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <style>
        {`
          @keyframes orbitClockwise {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes orbitAnti {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes orbitClockwiseSlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      {/* center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute rounded-full bg-white flex flex-col items-center justify-center"
        style={{
          width: centerR * 2,
          height: centerR * 2,
          left: cx - centerR,
          top: cy - centerR,
          boxShadow:
            "0 0 45px rgba(99,102,241,0.8), 0 0 90px rgba(99,102,241,0.45)",
        }}
      >
        <div className="mb-2 md:w-15 md:h-15 p-1 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2129CA] to-[#0A135A]">
          <PiBookOpenTextLight size={30} className="text-white" />
        </div>

        <div
          style={{
            fontSize:
              window.innerWidth < 640
                ? size * 0.032
                : size * 0.042,
            color: "#111827",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          HR
          <br />
          Fundamentals
        </div>
      </motion.div>

      {/* nodes */}
      {STEPS.map((step, i) => {
        const pos = getPos(ANGLES[i]);
        const isActive = active === step.id;

        return (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            viewport={{ once: true }}
            key={step.id}
            onClick={() => setActive(step.id)}
            className="absolute flex items-center justify-center font-bold transition-all duration-300"
            style={{
              width: nodeSize,
              height: nodeSize,
              left: pos.x - nodeSize / 2,
              top: pos.y - nodeSize / 2,
              borderRadius: 12,
              background: isActive ? "#3B82F6" : "#ffffff",
              color: isActive ? "#fff" : "#111",
              fontSize: size * 0.034,
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: isActive
                ? "0 0 22px rgba(59,130,246,0.95)"
                : "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            {step.id}
          </motion.button>
        );
      })}
    </div>
  );
}

/* ---------------- STEP CARD ---------------- */
function StepCard({ step, active, setActive, index }) {
  const Icon = STEP_ICONS[step.id - 1];
  const isActive = active === step.id;

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setActive(step.id)}
      onClick={() => setActive(step.id)}
      className="group w-full rounded-2xl transition-all duration-300 text-left"
      style={{
        background: "#fff",
        padding: "16px 18px",
        minHeight: isActive ? 90 : 72,
        boxShadow: isActive
          ? "0 10px 30px rgba(0,0,0,0.18)"
          : "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex gap-4 items-center">
  <div
    className="rounded-xl flex items-center justify-center shrink-0"
    style={{
      width: 54,
      height: 54,
      background: isActive ? "#3B82F6" : "#fff",
      border: "1px solid #e5e7eb",
    }}
  >
    <Icon color={isActive ? "#fff" : "#111"} />
  </div>

  <div className="flex-1 flex flex-col justify-center">
    <p
      style={{
        fontSize: 17,
        fontWeight: 700,
        color: "#111827",
        lineHeight: 1.2,
      }}
    >
      {step.title}
    </p>

    <div
      className="overflow-hidden transition-all duration-300"
      style={{
        maxHeight: isActive ? 50 : 0,
        opacity: isActive ? 1 : 0,
        marginTop: isActive ? 8 : 0,
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: "#6b7280",
          lineHeight: 1.4,
        }}
      >
        {step.sub}
      </p>
    </div>
  </div>
</div>
    </motion.button>
  );
}

/* ---------------- MAIN ---------------- */
export default function StepsSection() {
  const [active, setActive] = useState(1);

  const texts = [
    "Live HR Projects",
    "Real Recruitment",
    "HR Operations",
    "Documentation",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  function Badge({ text }) {
    return (
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 24,
            height: 24,
            background: "#a3e635",
            boxShadow: "0 0 10px rgba(163,230,53,0.6)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l2.5 2.5L10 3"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden rounded-b-4xl bg-gradient-to-t from-[#020B32] to-[#010897]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 md:pt-20">
        {/* MAIN HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="font-bold text-white leading-tight"
          style={{
            fontSize: "clamp(34px,5vw,64px)",
            marginBottom: 50,
          }}
        >
          The 7-Step System That
          <br />
          Gets You Placed
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* orbit */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Orbit
              active={active}
              setActive={setActive}
              size={window.innerWidth < 768 ? 340 : 560}
            />
          </motion.div>

          {/* cards */}
          <div className="flex flex-col gap-5">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                active={active}
                setActive={setActive}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-20">
          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-white lg:font-semibold leading-tight"
            style={{ fontSize: "clamp(28px,4vw,48px)" }}
          >
            Frustrated With Theory-Only Courses,
            <br />
            But Still Not Getting Real HR Experience?
          </motion.h2>

          {/* MAIN GRID */}
          <div className="grid gap-10 items-start mb-16 mt-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className=""
              style={{
                fontSize: "clamp(26px,3.5vw,40px)",
                lineHeight: 1.3,
                fontWeight: 700,
              }}
            >
              <div className="flex flex-wrap lg:flex-nowrap">
                <span className="text-white mr-3">
                  Don’t Have Access To
                </span>

                <div
                  className="relative overflow-hidden"
                  style={{
                    height: "1.3em",
                    minWidth: "360px",
                  }}
                >
                  {texts.map((text, i) => {
                    const isActive = i === activeIndex;

                    return (
                      <div
                        key={i}
                        className="absolute left-0 top-0 transition-all duration-700"
                        style={{
                          color: "#a3e635",
                          opacity: isActive ? 1 : 0,
                          transform: isActive
                            ? "translateY(0px)"
                            : "translateY(25px)",
                          filter: isActive
                            ? "blur(0px)"
                            : "blur(8px)",
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {text}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:w-112">
                <p
                  className="text-white/50 font-normal leading-relaxed mt-4"
                  style={{ fontSize: 18 }}
                >
                  You're Learning HR... But Not Applying It. That’s Why
                  Confidence Is Missing. We Built Something Different — A
                  Real-Time Internship Experience That Puts You Inside Actual HR
                  Work.
                </p>
              </div>
            </motion.div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 mb-8" />

          {/* BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.1,
            }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 md:gap-14"
          >
            <Badge text="No Fake Certificate" />
            <Badge text="No Dummy Case Studies" />
            <Badge text="No Passive Learning" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}