import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const blurReveal = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      {/* SECTION 1 */}
      <motion.section
        id="company"
        className="lg:py-16 scroll-mt-12 py-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl container px-4 mx-auto">
          {/* TOP ROW */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 flex items-center gap-2 text-gray-600"
            >
              <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
              <span>About HR Learners Hub</span>
            </motion.div>

            {/* Heading */}
            <div className="lg:col-span-9">
              <motion.h2
                variants={blurReveal}
                className="text-2xl lg:text-3xl text-gray-900 leading-snug"
              >
                We empower aspiring HR professionals with real-world IT hiring
                skills beyond classroom learning.
              </motion.h2>

              <div className="grid lg:grid-cols-12 gap-6 mt-12 items-start">
                {/* Stats */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="lg:col-span-6 flex gap-16 lg:border-r border-b lg:border-b-0 border-[#E9E9E9] py-5"
                >
                  {/* Stat 1 */}
                  <motion.div variants={fadeUp}>
                    <h3 className="text-5xl lg:text-7xl font-bold text-black">
                      550
                      <span className="text-3xl align-top ml-1">+</span>
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Students Trained
                    </p>
                  </motion.div>

                  {/* Stat 2 */}
                  <motion.div variants={fadeUp}>
                    <h3 className="text-5xl lg:text-7xl font-bold text-black">
                      250
                      <span className="text-2xl align-top ml-1">+</span>
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Students Trained
                    </p>
                  </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-[2px] h-full bg-gray-300"></div>
                </div>

                {/* Right Content */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:col-span-5"
                >
                  <p className="text-gray-600 md:text-xl leading-relaxed">
                    HR Learners Hub delivers hands-on, placement-focused HR
                    training with real IT hiring, sourcing, communication, and
                    AI tools to make you job-ready.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                  >
                    Start Your Journey <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div id="feature">
        {/* SECTION 2 */}
        <motion.section
          className="container mx-auto py-10 lg:py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-gray-600 mb-10"
            >
              <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
              <span>REAL TALK (Why Most HR Aspirants Fail)</span>
            </motion.div>

            {/* Wrapper */}
            <div className="relative">
              {/* Background Shadow */}
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 1.2 }}
                src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20998.png"
                alt="shadow"
                className="hidden lg:block absolute right-0 top-1/3 xl:top-1/2 -translate-y-1/2 w-[80%] opacity-60 blur-xl z-20"
              />

              {/* BLACK CARD */}
              <motion.div
                variants={fadeUp}
                className="relative"
              >
                <div
                  className="flex flex-col lg:flex-row gap-10 justify-between 
                  bg-[#272727]
                  rounded-3xl p-5 py-6 md:p-14 text-white shadow-xl lg:pr-14"
                >
                  {/* LEFT */}
                  <div>
                    <motion.h2
                      variants={blurReveal}
                      className="text-2xl md:text-5xl font-semibold leading-snug mb-8"
                    >
                      Let’s Be Honest. Most <br />
                      HR Students Struggle <br />
                      Because:
                    </motion.h2>

                    <motion.ul
                      variants={stagger}
                      className="space-y-5 text-gray-300"
                    >
                      {[
                        "Too much theory, no real HR work",
                        "No understanding of IT recruitment process",
                        "Weak communication & interview fear",
                        "Certificates but no practical confidence",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={fadeUp}
                          className="flex md:text-xl gap-3 items-start"
                        >
                          <img
                            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG.png"
                            className="w-5 h-5 lg:w-8 lg:h-8 mt-1"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* RIGHT */}
                  <motion.div
                    variants={fadeUp}
                    className="relative z-30 
                    border-4 lg:border-none
                    lg:bg-none bg-[radial-gradient(circle_at_center,#282FE0_0%,#020C32_100%)] 
                    px-6 py-6 lg:px-0 lg:py-0 rounded-xl lg:w-[40%]"
                  >
                    <motion.h2
                      variants={blurReveal}
                      className="text-2xl md:text-5xl leading-snug font-semibold mb-8"
                    >
                      What Makes HR <br />
                      Learners Hub <br />
                      Different?
                    </motion.h2>

                    <motion.ul
                      variants={stagger}
                      className="space-y-5 text-gray-200"
                    >
                      {[
                        "100% practical HR training",
                        "End-to-end IT recruitment mastery",
                        "Daily communication & interview practice",
                        "Real-time internship experience",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={fadeUp}
                          className="flex md:text-xl gap-3 items-start"
                        >
                          <img
                            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/SVG%20(1).png"
                            className="w-5 h-5 mt-1"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* BLUE BG CARD */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
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
                <div
                  className="
                    w-full h-full 
                    rounded-2xl
                    bg-[radial-gradient(circle_at_center,#282FE0_0%,#0B1445_60%,#020C32_70%)]
                    bg-no-repeat bg-center
                  "
                />
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.p
              variants={blurReveal}
              className="text-center text-gray-700 mt-10 lg:mt-20 text-lg lg:text-3xl"
            >
              You don’t feel like a{" "}
              <span className="text-[#2A74DB] font-medium">
                fresher in interviews.
              </span>
            </motion.p>
          </div>
        </motion.section>

        {/* SECTION 3 */}
        <motion.section
          className="relative py-10 lg:py-20 px-4 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Background */}
          <img
            src="https://ik.imagekit.io/psltlu4ds/HR%20navin/image%20207994.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Content */}
          <div className="relative z-10 container max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center items-center gap-2 text-sm lg:text-lg text-gray-600 mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 lg:text-lg rounded-full"></span>
              <span>Our Promise</span>
            </motion.div>

            {/* Heading */}
            <div className="relative inline-block">
              {/* Curve */}
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 0.8 }}
                src="https://ik.imagekit.io/psltlu4ds/HR%20navin/Vector%20(2).png"
                alt="curve"
                className="hidden md:block absolute -left-5 top-30 w-12 opacity-80"
              />

              <motion.h2
                variants={blurReveal}
                className="text-2xl md:text-[40px] font-extrabold leading-relaxed lg:leading-snug text-gray-800"
              >
                If You Follow Our Process For{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{
                      scale: 0.7,
                      rotate: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 6,
                      opacity: 1,
                     
                    }}
                    transition={{ duration: 0.7 }}
                    className="
                      inline-block
                      rotate-3
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
                  </motion.span>
                </span>
                , You'll Be Interview-Ready, Industry-Ready, And Job-Ready.
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-gray-700"
            >
              We Don't Promise Shortcuts.{" "}
              <span className="text-blue-600 font-medium">
                We Promise Transformation.
              </span>
            </motion.p>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutSection;