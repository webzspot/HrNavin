import React from 'react'
import { Check, Video, Infinity, Users, Briefcase } from "lucide-react";

const Pricing = () => {
  return (
    <div>
        <section  className="bg-[#f4f4f4] scroll-mt-12 py-16 px-4">
        <div className="max-w-7xl container mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 text-gray-800">
            Pricing That Removes Fear
          </h2>

          <div className="relative rounded-2xl p-4 md:px-8 md:py-16 text-white mb-10 bg-gradient-to-r from-[#2f6edc] to-[#0f5cc9] overflow-hidden">
            <div className="bg-gradient-to-r from-[#1161D2] to-[#2380FF] absolute  hidden md:block right-16 -top-12 z-30 w-36 opacity-70 rounded-full h-32"></div>
            <div className="bg-gradient-to-r from-[#1768D8] to-[#0963DF] absolute hidden md:block right-0 -top-12 z-20 w-36 opacity-65 rounded-full h-32"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16  rounded-lg flex items-center justify-center">
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

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm">
              <div className="whitespace-nowrap">
                <p className="text-white/70 mb-1">Pay During Training</p>
                <p className="md:text-4xl text-xl font-bold">₹20,000</p>
              </div>
              <div className="h-10 hidden lg:block w-[1px] bg-white/30"></div>
              <div className="whitespace-nowrap">
                <p className="text-white/70 text-xs mb-1">Pay After Training</p>
                <p className="md:text-4xl text-xl font-bold">₹0</p>
              </div>
              <div className="h-10 hidden lg:block w-[1px] bg-white/30"></div>
              <div className="flex items-center text-base xl:text-xl w-full xl:whitespace-nowrap xl:w-150 flex-wrap  gap-3 xl:gap-6 ">
                <span className="flex items-center gap-2"><Video size={16} /> All Training Programs</span>
                <span className="flex items-center gap-2"><Users size={16} /> Priority Placement Support</span>
                <span className="flex items-center gap-2"><Infinity size={16} /> Real-Time Internship</span>
                <span className="flex items-center gap-2"><Briefcase size={16} /> HR Generalist Program</span>
              </div>
              <button className="md:ml-auto mx-auto whitespace-nowrap flex items-start bg-white/90 text-gray-900 px-10 py-3 rounded-lg font-medium shadow border border-white/40 hover:bg-white">
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
                color: "bg-[#CCDCFF] border border-[#7EA7FF]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2user.png?updatedAt=1778004321209",
                features: [
                  { text: "Communication Training", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/video.png' },
                  { text: "Interview Preparation", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector.png' },
                  { text: "Placement Support", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/driver.png' },
                  { text: "Core Recruitment Training", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2use.png' },
                ],
              },
              {
                title: "Recruitment + Generalist",
                desc: "Expand beyond hiring into complete HR skills.",
                during: "₹15,000",
                after: "₹5,000",
                color: "bg-[#9BE8D2] border border-[#1BE0A8]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/briefcase.png?updatedAt=1778004321314",
                features: [
                  { text: "Everything in Recruitment Only", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2u.png' },
                  { text: "HR Generalist Program", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/airdrop.png' },
                ],
              },
              {
                title: "Recruitment + Internship",
                desc: "Gain real-world experience while you learn.",
                during: "₹15,000",
                after: "₹5,000",
                color: "bg-[#E8C79A] border border-[#E59421]",
                icon: "https://ik.imagekit.io/psltlu4ds/HR%20navin/teacher.png?updatedAt=1778004321092",
                features: [
                  { text: "Everything in Recruitment Only", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/profile-2user.png' },
                  { text: "Real-Time Internship", icon: 'https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20(4).png' },
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
                    <p className="font-semibold text-xl lg:text-3xl">{item.during}</p>
                    <p className="text-gray-400 text-sm lg:text-base">Pay during training</p>
                  </div>
                  <div className="w-[1px] h-10 bg-gray-200"></div>
                  <div className="text-center flex-1">
                    <p className="font-semibold text-xl lg:text-3xl">{item.after}</p>
                    <p className="text-gray-400 text-sm md:text-base">Pay after training</p>
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
      <img src={f.icon} alt="" className="w-5 h-5 object-contain" />
      {f.text}
    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing