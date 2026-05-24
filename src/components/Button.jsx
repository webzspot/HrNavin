"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export default function CTAButtonPopup({
  buttonText = "Book Your Seat Now",
  buttonBg = "#4043FE",
  gradientFrom = "#FFF0F0",
  gradientTo = "transparent",
  submitBtnBg = "#4043FE",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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

  // Popup content
  const popupContent = open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        padding: "1rem",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 80, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem",
          borderRadius: "28px",
          backgroundColor: "white",
          padding: "1.5rem",
          boxShadow: "0 20px 80px rgba(0,0,0,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2rem",
            height: "2rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
          }}
        >
          <X size={18} />
        </button>

        <h2 className="text-xl md:text-3xl font-bold text-black">
          Book Your Slot
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          Fill your details and we'll contact you.
        </p>

        <form onSubmit={handleSubmit} className="md:mt-8 mt-4 space-y-5">
          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
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
                md:placeholder:text-base
                placeholder:text-sm
                border
                border-gray-600
                outline-none
                focus:border-[#4043FE]
              "
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-xs md:text-sm font-medium text-gray-700">
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
                md:placeholder:text-base
                placeholder:text-sm
                border
                border-gray-600
                outline-none
                focus:border-[#4043FE]
              "
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="md:text-sm text-xs font-medium text-gray-700">
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
                md:placeholder:text-base
                placeholder:text-sm
                border
                border-gray-600
                outline-none
                focus:border-[#4043FE]
              "
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: submitBtnBg,
              width: "100%",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit Details
          </button>
        </form>
      </motion.div>
    </motion.div>
  );

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
        className="inline-block hover:scale-105 transition-transform p-[1.5px] rounded-xl mt-5"
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: buttonBg,
          }}
          className="
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
            cursor-pointer
          "
        >
          {buttonText}
          <ArrowUpRight size={18} />
        </button>
      </motion.div>

      {/* PORTAL - Renders popup directly in document.body */}
      {mounted && createPortal(
        <AnimatePresence>{popupContent}</AnimatePresence>,
        document.body
      )}
    </>
  );
}