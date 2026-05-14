"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export default function CTAButtonPopup() {

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    setOpen(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "spring",
          stiffness: 200,
        }}
        className="inline-block hover:scale-105 transition-transform p-[1.5px] rounded-xl mt-5 bg-gradient-to-r from-[#FFF0F0] to-transparent"
      >
        <button
          onClick={() => setOpen(true)}
          className="
            bg-[#4043FE]
            px-8
            py-3
            rounded-xl
            text-sm
            lg:text-xl
            flex
            items-center
            gap-2
            text-white
            transition-all
            duration-300
          "
        >
          Book Your Seat Now

          <ArrowUpRight size={18} />
        </button>
      </motion.div>

      {/* POPUP */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/60
              backdrop-blur-sm
              px-4
            "
          >

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: 80,
                scale: 0.8,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
                relative
                w-full
                max-w-md
                rounded-[28px]
                bg-white/80
                p-6
                md:p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.25)]
              "
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  bg-black/5
                  flex
                  items-center
                  justify-center
                  hover:bg-black/10
                  transition-all
                "
              >
                <X size={18} />
              </button>

              {/* HEADING */}
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Book Your Slot
              </h2>

              <p className="text-gray-500 mt-2">
                Fill your details and we’ll contact you.
              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* NAME */}
                <div className="flex flex-col items-start">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                   
                   
                    className="
                      w-full
                      mt-2
                      px-4
                      py-3
                      rounded-xl
                      placeholder:text-gray-700
                      border
                      border-gray-600
                      outline-none
                      focus:border-[#4043FE]
                    "
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col items-start">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="
                      w-full
                      mt-2
                      px-4
                      py-3
                      rounded-xl
                      placeholder:text-gray-700
                      border
                      border-gray-600
                      outline-none
                      focus:border-[#4043FE]
                    "
                  />
                </div>

                {/* PHONE */}
                <div className="flex flex-col items-start">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="
                      w-full
                      mt-2
                      px-4
                      py-3
                      rounded-xl
                      placeholder:text-gray-700
                      border
                      border-gray-600
                      outline-none
                      focus:border-[#4043FE]
                    "
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#4043FE]
                    hover:bg-[#3134db]
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Submit Details
                </button>

              </form>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}