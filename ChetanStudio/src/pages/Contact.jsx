import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/bannerImg1.jpg"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F3EDE4]  pt-20 pb-20">

      {/* Banner Section with Animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={banner}
          alt="banner"
          className="w-full h-[280px] md:h-[450px] object-cover  shadow-lg"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mt-20 mb-20">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#5c483b]">
          Get in Touch
        </h1>
        <p className="text-center mt-3 text-[#7b6a5f] text-lg">
          Let's discuss how we can capture your special moments
        </p>

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 mt-10">
          <form className="space-y-6">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-[#7b6a5f] font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b48b76] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#7b6a5f] font-medium">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b48b76] outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-[#7b6a5f] font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+91 xxxxx xxxxx"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b48b76] outline-none"
              />
            </div>

            {/* Wedding Date */}
            <div>
              <label className="block mb-2 text-[#7b6a5f] font-medium">Wedding Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b48b76] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-[#7b6a5f] font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your special day..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b48b76] outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#e27b94] text-white text-lg py-3 rounded-xl font-semibold hover:bg-[#d16983] transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
