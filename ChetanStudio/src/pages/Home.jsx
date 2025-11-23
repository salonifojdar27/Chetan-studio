import React from "react";
import { motion } from "framer-motion";
import homeImg1 from "../assets/homeImg1.jpg";
import homeImg2 from "../assets/homeImg2.avif";
import homeImg3 from "../assets/homeImg3.jpg";
import weddingVideo from "../assets/HomeVideo.mp4";
import MissionSection from "../components/MissionSection";
import HomeBanner from "../assets/HomeBanner2.webp";
import HomeGallery from "../components/HomeGallery";

export default function HomePage() {

  const images = [
    {
      src: homeImg1,
      title: "VIBRANT",
      height: "h-[500px]",
      delay: 0,
      margin: "mt-10"
    },
    {
      src: homeImg2,
      title: "TIMELESS",
      height: "h-[650px]",
      delay: 0.2,
      margin: "mt-0"
    },
    {
      src: homeImg3,
      title: "AUTHENTIC",
      height: "h-[500px]",
      delay: 0.4,
      margin: "mt-10"
    },
  ];

  return (
    <div className="w-full bg-[#F3EDE4] pb-20 pt-20">
      {/* Banner Section with Animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={HomeBanner}
          alt="banner"
          className="w-full h-[280px] md:h-[450px] object-cover shadow-lg"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl md:text-6xl font-serif tracking-wide pt-25"
      >
        CINEMATIC <span className="font-light">Journeys</span>
      </motion.h1>

      {/* Diagonal Mask Video Section */}
      <div className="relative w-full mt-12">
        <div
          className="overflow-hidden w-full"
          style={{
            clipPath: "polygon(41% 21%, 77% 34%, 100% 30%, 100% 100%, 67% 96%, 33% 93%, 0 100%, 0% 30%)"
          }}
        >
          <video
            src={weddingVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[75vh] object-cover"
          />


          {/* Caption */}
          <div className="absolute bottom-6 right-10 text-white text-lg md:text-xl font-light drop-shadow-2xl">
            Capturing Dreams, Freezing Moments
          </div>
        </div>
      </div>

      <MissionSection />

      {/* Image Grid Section */}
      <div className="min-h-screen bg-[#FAF9F4] flex flex-col items-center py-20 px-6">
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full items-start mt-15">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: img.delay }}
              className={`relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer ${img.height} ${img.margin}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 text-white text-4xl md:text-5xl font-bold drop-shadow-2xl">
                {img.title}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

        <HomeGallery />
     
    </div >
  );
}

