import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const photos = [
    { src: "../assets/img2.jpg", title: "Wedding Moments" },
    { src: "/photos/2.jpg", title: "Bride Portrait" },
    { src: "/photos/3.jpg", title: "Couple Shoot" },
    { src: "/photos/4.jpg", title: "Candid Shot" },
    { src: "/photos/5.jpg", title: "Haldi Ceremony" },
    { src: "/photos/6.jpg", title: "Engagement" },
    { src: "/photos/7.jpg", title: "Outdoor Shoot" },
    { src: "/photos/8.jpg", title: "Traditional Look" },
  ];

  return (
    <div className="bg-cream min-h-screen pb-20">

      {/* HERO BANNER */}
      <div className="relative w-full h-[55vh] md:h-[65vh] mb-14">
        <img
          src="/banner-gallery.jpg" // change this banner
          alt="Gallery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            Our Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-gray-700 mb-10 text-center"
        >
          Capturing Emotions Through the Lens
        </motion.h2>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-[380px] object-cover transform group-hover:scale-110 transition-all duration-700"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Title on Hover */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold tracking-wide">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Book Your Shoot
          </motion.a>
        </div>
      </div>
    </div>
  );
}
