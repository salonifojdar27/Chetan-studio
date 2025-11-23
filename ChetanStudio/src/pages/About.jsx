import React from "react";
import { motion } from "framer-motion";
import banner3 from "../assets/banner3.jpg";
import banner5 from "../assets/banner5.avif";

// ICONS
import { FaCameraRetro, FaVideo, FaBookOpen, FaMagic } from "react-icons/fa";

export default function About() {
  const services = [
    {
      title: "PHOTOGRAPHY",
      desc: "Candid photography focusing on natural moments & traditional full-event coverage.",
      icon: <FaCameraRetro className="text-5xl mx-auto mb-4 text-[#C6A667] hover:text-black transition" />,
    },
    {
      title: "VIDEOGRAPHY",
      desc: "Cinematic videography capturing emotions, candid moments & full wedding story.",
      icon: <FaVideo className="text-5xl mx-auto mb-4 text-[#C6A667] hover:text-black transition" />,
    },
    {
      title: "PHOTOBOOKS & ALBUMS",
      desc: "Handcrafted wedding albums designed with premium quality & custom layouts.",
      icon: <FaBookOpen className="text-5xl mx-auto mb-4 text-[#C6A667] hover:text-black transition" />,
    },
    {
      title: "POST-PRODUCTION",
      desc: "Creative editing services for cinematic teaser, short film & traditional video.",
      icon: <FaMagic className="text-5xl mx-auto mb-4 text-[#C6A667] hover:text-black transition" />,
    },
  ];


  return (
    <div className="bg-[#F3EDE4] min-h-screen pt-15 pb-20">

      {/* HERO BANNER */}
      <div className="relative w-full h-[55vh] md:h-[65vh] mb-14">
        <img
          src={banner3}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            About Chetan Studio
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Crafting Memories With Art & Passion
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">Chetan Studio</span>, we believe photography is more
            than just clicking pictures — it’s about capturing emotions,
            preserving moments, and telling your story in the most beautiful way.
            With a professional approach and eye for detail, we deliver timeless
            visuals that speak your heart.
          </p>
        </motion.div>

        {/* ABOUT IMAGE + TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={banner5}
            alt="About"
            className="rounded-xl shadow-xl w-full h-[400px] object-contain bg-white p-2"
          />

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              A Professional Approach You Can Trust
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since 2008, we’ve captured unforgettable moments for couples,
              families, and individuals across India. Our expertise spans
              weddings, pre-weddings, portraits, candid moments, cinematic
              visuals, and more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team focuses on creativity, precision, and quality — ensuring
              every project receives a personal touch and professional finish.
            </p>
          </motion.div>
        </div>

        {/* SERVICES HIGHLIGHTS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10"
        >
          What We Specialize In
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 shadow-xl rounded-xl border border-gray-100 text-center hover:shadow-2xl transition"
            >
              {/* ICON */}
              {service.icon}

              {/* TITLE */}
              <h2 className="text-lg font-extrabold text-gray-800 tracking-wide">
                {service.title}
              </h2>

              <div className="w-10 h-[2px] bg-gray-300 mx-auto my-3"></div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

