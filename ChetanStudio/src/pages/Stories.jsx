import React, { useState } from "react";
import { motion } from "framer-motion";
import s1 from "../assets/storyImg.avif";
import s2 from "../assets/storyImg2.jpg";
import s3 from "../assets/storyImg3.jpg";
import s4 from "../assets/storyImg4.avif";
import s5 from "../assets/storyImg5.webp";
import s7 from "../assets/storyImg7.jpg";
import s6 from "../assets/storyImg6.jpg";

export default function StoriesSection() {
  const images = [s1, s2, s3, s4, s5, s7, s6];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === 0 ? 3 : 0));
  };

  return (
    <div className="w-full bg-[#F3EDE4] py-16 px-6 flex flex-col items-center ">

      {/* HEADER */}
      <div className="w-full max-w-6xl flex items-center justify-between mt-20">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-serif italic">The STORIES</h1>
          <div className="h-px w-48 bg-black"></div>
        </div>

        <p className="text-sm text-gray-600">
          Where Every Frame Tells Infinite Stories
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full max-w-6xl mt-12 overflow-hidden">

        <motion.div
          animate={{ x: -index * 330 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex gap-10"
        >
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              className="w-[300px] h-[420px] rounded-xl object-cover shadow-md"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </motion.div>

        {/* ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-[-25px] top-1/2 -translate-y-1/2
                     w-9 h-9 bg-white shadow-md rounded-full
                     flex items-center justify-center text-lg
                     hover:scale-110 transition"
        >
          →
        </button>
      </div>

      {/* CAPTION */}
      <p className="text-xs text-gray-700 mt-4 max-w-6xl">
        Dreams Painted In The Sky, Hopes Reflected In The Stars.
      </p>

      <button className="mt-10 border border-black px-8 py-2 text-sm 
                         hover:bg-black hover:text-white transition">
        Explore All
      </button>
    </div>
  );
}
