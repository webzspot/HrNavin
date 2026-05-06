"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Check, Video, Infinity, Users, Briefcase } from "lucide-react";
import { Headphones } from "lucide-react";

const data = [
  { img: "https://images.unsplash.com/photo-1557862921-37829c790f19", tall: true },
  { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
  { img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", tall: true },
  { img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126" },
  { img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c", tall: true },
  { img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
];

const chunk = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const pages = chunk(data, window.innerWidth < 768 ? 2 : 4);

const mentors = [
  {
    id: 1,
    name: "Navin",
    role: "IT Recruitment & HR Career Strategy",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
    bg: "from-purple-300 to-purple-600",
  },
  {
    id: 2,
    name: "Ramya",
    role: "Communication & Confidence Building",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
    bg: "from-blue-300 to-blue-600",
  },
  {
    id: 3,
    name: "Melvin",
    role: "8+ Years IT Recruitment (End-To-End)",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
    bg: "from-yellow-200 to-yellow-400",
  },
  {
    id: 4,
    name: "Sangeetha",
    role: "HR Generalist, Payroll & Compliance",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
    bg: "from-green-300 to-green-500",
  },
  {
    id: 5,
    name: "Suganya",
    role: "Advanced HR Guidance",
    img: "https://ik.imagekit.io/psltlu4ds/HR%20navin/image%208.png?updatedAt=1777720252004",
    bg: "from-gray-300 to-gray-500",
  },
];

export default function CoverflowCarousel() {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % pages.length);
  const prev = () => setIndex((prev) => (prev - 1 + pages.length) % pages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mentors.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-10 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto lg:text-center lg:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn From Multiple Mentors
          </h2>
          <p className="text-gray-600 mt-2">
            Across 60 days, 7–8 working HR professionals guide you.
          </p>
        </div>

        {/* DESKTOP COVERFLOW */}
        <div className="hidden md:flex justify-center items-center relative h-[420px]">
          <div
            className="relative flex items-center justify-center w-full"
            style={{ perspective: "1200px" }}
          >
            {mentors.map((mentor, index) => {
              let position = (index - activeIndex + mentors.length) % mentors.length;
              if (position > mentors.length / 2) position -= mentors.length;

              const rotate = position * -25;
              const translateX = position * 280;
              const scale = position === 0 ? 1 : 0.85;
              const opacity = Math.abs(position) > 2 ? 0 : 1;
              const zIndex = 10 - Math.abs(position);

              return (
                <div
                  key={mentor.id}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotate}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="w-[280px] rounded-2xl bg-[#f1f1f1] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600 leading-snug">{mentor.role}</p>
                      </div>
                      <span className="text-xs bg-white px-2 py-1 rounded-full shadow text-gray-700">
                        8+ Years
                      </span>
                    </div>
                    <div className="rounded-xl overflow-hidden mt-3">
                      <div className={`w-full h-[220px] flex items-end justify-center bg-gradient-to-br ${mentor.bg}`}>
                        <img src={mentor.img} alt={mentor.name} className="h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden flex justify-center items-center relative h-[340px]">
          <div className="relative flex items-center justify-center w-full">
            {mentors.map((mentor, index) => {
              let position = (index - activeIndex + mentors.length) % mentors.length;
              if (position > mentors.length / 2) position -= mentors.length;

              const rotate = position * -18;
              const translateX = Math.round(position * 190);
              const scale = position === 0 ? 0.9 : 0.82;
              const opacity = Math.abs(position) > 2 ? 0 : 1;
              const zIndex = 10 - Math.abs(position);

              return (
                <div
                  key={mentor.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotate}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transformOrigin: "center center",
                  }}
                >
                  <div className="w-[210px] mx-[8px] rounded-2xl bg-[#f1f1f1] p-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">{mentor.name}</h3>
                        <p className="text-xs text-gray-600 leading-snug">{mentor.role}</p>
                      </div>
                      <span className="text-[10px] bg-white px-2 py-1 rounded-full shadow-sm text-gray-700">
                        8+ Years
                      </span>
                    </div>
                    <div className="rounded-xl overflow-hidden mt-2">
                      <div className={`w-full h-[150px] flex items-end justify-center bg-gradient-to-br ${mentor.bg}`}>
                        <img
                          src={mentor.img}
                          alt={mentor.name}
                          className="h-full object-contain select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-10">
            60 Day Transformation
          </h2>

          <div className="bg-[#F3F0EB] rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
            <div className="flex flex-wrap gap-3 items-center mb-6">
              <span className="bg-black text-white text-base md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                📅 Month 1
              </span>
              <span className="bg-white text-gray-700 text-base md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Daily 2 Hours | Live
              </span>
            </div>
            <div className="border-t border-black/10 mb-6"></div>
            <h3 className="text-lg md:text-4xl font-semibold mb-4 tracking-wide">
              FOUNDATION + CONFIDENCE
            </h3>
            <ul className="space-y-2 text-base md:text-xl text-gray-800">
              <li>• HR Fundamentals & IT Recruitment Basics</li>
              <li>• Live Sourcing On Naukri & LinkedIn</li>
              <li>• Resume Screening & ATS Practice</li>
              <li>• Communication Training + Roleplays</li>
            </ul>
            <div className="mt-6 inline-block bg-white text-gray-700 text-base md:text-xl px-4 py-2 rounded-lg shadow-sm">
              Outcome: You Stop Fearing Calls & Interviews
            </div>
          </div>

          <div className="bg-[#B1E635] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap gap-3 items-center mb-6">
              <span className="bg-black text-white text-base md:text-lg px-3 py-1 rounded-full flex items-center gap-2">
                📅 Month 2
              </span>
              <span className="bg-[#d8ff75] text-gray-800 text-base md:text-lg px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Daily 2 Hours | Live
              </span>
            </div>
            <div className="border-t border-black/10 mb-6"></div>
            <h3 className="text-lg md:text-4xl font-semibold mb-4 tracking-wide">
              ADVANCED HR + PLACEMENT
            </h3>
            <ul className="space-y-2 text-base md:text-xl text-gray-900">
              <li>• Salary Negotiation & Offer Handling</li>
              <li>• Interview Coordination & HR Operations</li>
              <li>• Payroll & HR Generalist Exposure</li>
              <li>• Mock Interviews + Job Search Strategy</li>
            </ul>
            <div className="mt-6 inline-block bg-white text-gray-800 text-base md:text-xl px-4 py-2 rounded-lg shadow-sm">
              Outcome: You Start Attending Interviews With Confidence
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Real People <br /> Real Result.
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-sm">Excellent</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-green-500 rounded-sm"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">500+ reviews</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-black text-white shadow flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((group, i) => (
                <div key={i} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                  {group.map((item, j) => (
                    <div
                      key={j}
                      className={`relative rounded-2xl overflow-hidden ${
                        item.tall ? "md:row-span-2 h-[420px]" : "h-[200px]"
                      }`}
                    >
                      <img src={item.img} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                          <Play size={18} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-16 px-4">
        <div className="max-w-7xl container mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 text-gray-800">
            Pricing That Removes Fear
          </h2>

          <div className="relative rounded-2xl p-6 md:p-8 text-white mb-10 bg-gradient-to-r from-[#2f6edc] to-[#0f5cc9] overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <img src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Frame%202147224409.png" alt="icon" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-2xl">Full Program (All)</h3>
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">Best Value</span>
                </div>
                <p className="text-sm text-white/80">Everything you need to become job-ready.</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row md:items-center gap-6 text-sm">
              <div className="whitespace-nowrap">
                <p className="text-white/70 mb-1">Pay During Training</p>
                <p className="md:text-4xl text-xl font-bold">₹20,000</p>
              </div>
              <div className="h-10 hidden md:block w-[1px] bg-white/30"></div>
              <div className="whitespace-nowrap">
                <p className="text-white/70 text-xs mb-1">Pay After Training</p>
                <p className="md:text-4xl text-xl font-bold">₹0</p>
              </div>
              <div className="h-10 hidden md:block w-[1px] bg-white/30"></div>
              <div className="flex items-center text-lg w-full xl:whitespace-nowrap gap-4 flex-wrap">
                <span className="flex items-center gap-2"><Video size={16} /> All Training Programs</span>
                <span className="flex items-center gap-2"><Users size={16} /> Priority Placement Support</span>
                <span className="flex items-center gap-2"><Infinity size={16} /> Real-Time Internship</span>
                <span className="flex items-center gap-2"><Briefcase size={16} /> HR Generalist Program</span>
              </div>
              <button className="md:ml-auto mx-auto whitespace-nowrap bg-white/90 text-gray-900 px-8 py-3 rounded-lg font-medium shadow border border-white/40 hover:bg-white">
                Go All-in
              </button>
            </div>
          </div>

          <div className="bg-[#e9e6e3] rounded-2xl p-4 lg:p-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Recruitment Only",
                desc: "Start your career with core hiring skills.",
                during: "₹10,000",
                after: "₹10,000",
                color: "bg-[#CCDCFF] border border-blue-300",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2user.png?updatedAt=1778004321209",
                features: [
                  { text: "Communication Training", icon: <Headphones size={16} /> },
                  { text: "Interview Preparation", icon: <Check size={16} /> },
                  { text: "Placement Support", icon: <Briefcase size={16} /> },
                  { text: "Core Recruitment Training", icon: <Users size={16} /> },
                ],
              },
              {
                title: "Recruitment + Generalist",
                desc: "Expand beyond hiring into complete HR skills.",
                during: "₹15,000",
                after: "₹5,000",
                color: "bg-[#a8e0cf] border border-green-400",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/briefcase.png?updatedAt=1778004321314",
                features: [
                  { text: "Everything in Recruitment Only", icon: <Users size={16} /> },
                  { text: "HR Generalist Program", icon: <Headphones size={16} /> },
                ],
              },
              {
                title: "Recruitment + Internship",
                desc: "Gain real-world experience while you learn.",
                during: "₹15,000",
                after: "₹5,000",
                color: "bg-[#f1c892] border border-orange-400",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/teacher.png?updatedAt=1778004321092",
                features: [
                  { text: "Everything in Recruitment Only", icon: <Users size={16} /> },
                  { text: "Real-Time Internship", icon: <Infinity size={16} /> },
                ],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-3 lg:p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 w-24 h-24 rounded-full">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg lg:text-xl">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <div className="border-t border-[#E9EAEB] my-4"></div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center flex-1">
                    <p className="font-semibold lg:text-2xl">{item.during}</p>
                    <p className="text-gray-400 text-base">Pay during training</p>
                  </div>
                  <div className="w-[1px] h-10 bg-gray-200"></div>
                  <div className="text-center flex-1">
                    <p className="font-semibold lg:text-2xl">{item.after}</p>
                    <p className="text-gray-400 text-base">Pay after training</p>
                  </div>
                </div>
                <div className="border-t border-[#E9EAEB] my-4"></div>
                <div className={`${item.color} rounded-lg text-center py-3 mt-4`}>
                  <p className="text-base text-gray-600">TOTAL FEE</p>
                  <h4 className="text-2xl font-bold">₹20,000</h4>
                </div>
                <button className="w-full mt-4 border border-gray-300 rounded-lg py-2 bg-gray-100 hover:bg-gray-200">
                  Get started
                </button>
                <div className="border-t border-[#E9EAEB] my-4"></div>
                <ul className="space-y-3 text-sm text-gray-700">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-lg gap-3">
                      <span className="text-blue-600 text-xl">{f.icon}</span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}