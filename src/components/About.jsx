import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const mentors = [
    {
      name: "Navin",
      role: "IT Recruitment & HR Career Strategy",
      exp: "8+ Years",
      img: "/images/m1.png",
      bg: "from-purple-400 to-purple-700",
    },
    {
      name: "Ramya",
      role: "Communication & Confidence Building",
      exp: "8+ Years",
      img: "/images/m2.png",
      bg: "from-blue-400 to-blue-700",
    },
    {
      name: "Melvin",
      role: "IT Recruitment (End-To-End)",
      exp: "8+ Years",
      img: "/images/m3.png",
      bg: "from-yellow-300 to-yellow-500",
    },
    {
      name: "Sangeetha",
      role: "HR Generalist, Payroll & Compliance",
      exp: "8+ Years",
      img: "/images/m4.png",
      bg: "from-green-400 to-green-600",
    },
  ];

  const loopMentors = [...mentors, ...mentors];
  return (
    <>
      <section id="company"  className=" lg:py-16 scroll-mt-12 py-10 ">
        <div className="max-w-7xl container px-4 mx-auto">

          {/* TOP ROW */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">

            {/* Badge (left small) */}
            <div className="lg:col-span-3 flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
              <span>About HR Learners Hub</span>
            </div>

            {/* Heading (right large) */}
            <div className="lg:col-span-9">
              <h2 className="text-2xl lg:text-3xl  text-gray-900 leading-snug">
                We empower aspiring HR professionals with real-world IT hiring
                skills beyond classroom learning.
              </h2>
              <div className="grid lg:grid-cols-12 gap-6 mt-12  items-start">

                {/* Stats */}
                <div className="lg:col-span-6 flex gap-16 lg:border-r border-b lg:border-b-0 border-[#E9E9E9] py-5">

                  {/* Stat 1 */}
                  <div>
                    <h3 className="text-5xl lg:text-7xl font-bold text-black">
                      550<span className="text-3xl align-top ml-1">+</span>
                    </h3>
                    <p className=" text-gray-600 mt-2">
                      Students Trained
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <h3 className=" text-5xl lg:text-7xl font-bold text-black">
                      250<span className="text-2xl align-top ml-1">+</span>
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Students Trained
                    </p>
                  </div>

                </div>

                {/* Divider */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-[2px] h-full bg-gray-300"></div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-5">
                  <p className="text-gray-600 md:text-xl leading-relaxed">
                    HR Learners Hub delivers hands-on, placement-focused HR training
                    with real IT hiring, sourcing, communication, and AI tools to
                    make you job-ready.
                  </p>

                  <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                    Start Your Journey <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM ROW */}


        </div>
      </section>
     <div id="feature" >
 <section  className="container  mx-auto py-10 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Badge */}
          <div className="flex items-center gap-2  text-gray-600 mb-10">
            <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
            <span>REAL TALK (Why Most HR Aspirants Fail)</span>
          </div>

          {/* Wrapper */}
          <div className="relative">

            {/* 🔥 SHADOW IMAGE (BACKGROUND LAYER) */}
            <img
              src='https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20998.png'
              alt="shadow"
              className="hidden lg:block absolute right-0 top-1/3 xl:top-1/2 -translate-y-1/2 
        ] w-[80%] opacity-60 blur-xl z-30"
            />

            {/* BLACK CARD */}
            <div className="relative ">
              <div className="flex flex-col lg:flex-row gap-10 justify-between 
        bg-[#272727]
        rounded-3xl p-5 py-6 md:p-14 text-white shadow-xl lg:pr-14">

                {/* LEFT */}
                <div>
                  <h2 className="text-2xl md:text-5xl font-semibold leading-snug mb-8">
                    Let’s Be Honest. Most <br />
                    HR Students Struggle <br />
                    Because:
                  </h2>

                  <ul className="space-y-5 text-gray-300">
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png' className="w-5 h-5 lg:w-8 lg:h-8 mt-1" />
                      Too much theory, no real HR work
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png' className="w-5 h-5 lg:w-8 lg:h-8  mt-1" />
                      No understanding of IT recruitment process
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png' className="w-5 h-5 lg:w-8 lg:h-8  mt-1" />
                      Weak communication & interview fear
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png' className="w-5 h-5 lg:w-8 lg:h-8  mt-1" />
                      Certificates but no practical confidence
                    </li>
                  </ul>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative z-30 
          border-4  lg:border-none
          lg:bg-none bg-[radial-gradient(circle_at_center,#282FE0_0%,#020C32_100%)] px-6 py-6 lg:px-0 lg:py-0 rounded-xl lg:w-[40%]">

                  <h2 className="text-2xl md:text-5xl leading-snug font-semibold mb-8">
                    What Makes HR <br />
                    Learners Hub <br />
                    Different?
                  </h2>

                  <ul className="space-y-5 text-gray-200">
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png' className="w-5 h-5 mt-1" />
                      100% practical HR training
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png' className="w-5 h-5 mt-1" />
                      End-to-end IT recruitment mastery
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png' className="w-5 h-5 mt-1" />
                      Daily communication & interview practice
                    </li>
                    <li className="flex md:text-xl gap-3 items-start">
                      <img src='https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png' className="w-5 h-5 mt-1" />
                      Real-time internship experience
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 🔥 BLUE CARD BACKGROUND LAYER */}
            <div
          
  className="
    hidden lg:block
    absolute right-4 xl:right-6
    -top-10 -bottom-10
    w-[43%]
    rounded-3xl
    p-[12px]
    z-10
    overflow-hidden
     shadow-lg
    bg-[#E5E5E566]
    
    
  "
>
              {/* INNER BLUE CARD */}
              <div
                className="
  w-full h-full 
  rounded-2xl
bg-[radial-gradient(circle_at_center,#282FE0_0%,#0B1445_60%,#020C32_70%)]
   bg-no-repeat bg-center
"
              />
            </div>

          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-700 mt-10 lg:mt-20  text-lg lg:text-3xl">
            You don’t feel like a{" "}
            <span className="text-[#2A74DB] font-medium">
              fresher in interviews.
            </span>
          </p>

        </div>
      </section>

      <section  className="relative py-10  lg:py-20 px-4 overflow-hidden">

        {/* Background Image */}
        <img
          src='https://ik.imagekit.io/psltlu4ds/HR%20navin/image%20207994.png'
          alt="background"
          className="absolute inset-0 w-full h-full object-cover  z-0"
        />

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="flex justify-center items-center gap-2  text-sm lg:text-lg text-gray-600 mb-6">
            <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
            <span>Our Promise</span>
          </div>

          {/* Heading Wrapper */}
          <div className="relative inline-block">

            {/* Curve Line (Left) */}
            <img
              src='https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20(2).png'
              alt="curve"
              className="hidden md:block absolute -left-5 top-30 w-12 opacity-80"
            />

            {/* Heading */}
            <h2 className="text-2xl md:text-[40px]  font-extrabold leading-relaxed lg:leading-snug text-gray-800">
              If You Follow Our Process For{" "}
              <span className="relative inline-block">

                {/* Floating Badge */}
             <span
  className="
  inline-block
  rotate-6
  bg-[#2A74DB]
  text-white
  text-2xl
  md:text-[40px]
  px-4
  py-2
  rounded-lg
  shadow-[0_0_35px_rgba(42,116,219,0.7)]
"
>
  60 Days
</span>


              </span>
              , You'll Be Interview-Ready, Industry-Ready, And Job-Ready.
            </h2>
          </div>

          {/* Subtext */}
          <p className="mt-8 text-lg md:text-xl text-gray-700">
            We Don't Promise Shortcuts.{" "}
            <span className="text-blue-600 font-medium">
              We Promise Transformation.
            </span>
          </p>

        </div>
      </section>
     </div>
    </>
  );
};

export default AboutSection;