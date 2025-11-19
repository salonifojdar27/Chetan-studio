import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/galleryImg1.jpg";
import img2 from "../assets/galleryImg2.jpg";
import img3 from "../assets/galleryImg3.jpg";
import img4 from "../assets/galleryImg4.webp";
import img5 from "../assets/galleryImg5.jpg";
import img6 from "../assets/galleryImg6.avif";
import img7 from "../assets/galleryImg7.avif";
import img8 from "../assets/galleryImg8.jpg";
import img9 from "../assets/galleryImg9.jpg";
import img10 from "../assets/galleryImg10.avif";
import img11 from "../assets/galleryImg11.webp";
import img12 from "../assets/galleryImg12.jpg";
import gallerybanner1 from "../assets/galleryBanner1.jpg"

export default function Gallery() {
  const photos = [
    { src: img1, title: "Wedding Moments", colSpan: 1, rowSpan: 2 },
    { src: img2, title: "Bride Portrait", colSpan: 1, rowSpan: 1 },
    { src: img3, title: "Couple Shoot", colSpan: 1, rowSpan: 2 },
    { src: img4, title: "Candid Shot", colSpan: 2, rowSpan: 1 },
    { src: img5, title: "Haldi Ceremony", colSpan: 1, rowSpan: 1 },
    { src: img6, title: "Engagement", colSpan: 1, rowSpan: 1 },
    { src: img7, title: "Outdoor Shoot", colSpan: 2, rowSpan: 1 },
    { src: img8, title: "Traditional Look", colSpan: 1, rowSpan: 1 },
    { src: img9, title: "Traditional Look", colSpan: 1, rowSpan: 1 },
    { src: img12, title: "Haldi Ceremony", colSpan: 1, rowSpan: 1 },
    { src: img10, title: "Engagement", colSpan: 2, rowSpan: 1 },
    { src: img11, title: "Outdoor Shoot", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div className="bg-[#F3EDE4] min-h-screen pb-20 pt-20">

      {/* HERO BANNER */}
      <div className="relative w-full h-[55vh] md:h-[65vh] mb-14 overflow-hidden">
        <img
          src={gallerybanner1}
          alt="Gallery Banner"
          className="w-full h-full object-cover object-center"
        />
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
              style={{
                gridColumn: `span ${photo.colSpan}`,
                gridRow: `span ${photo.rowSpan}`,
              }}
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
            className=" bg-[#e27b94] text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Book Your Shoot
          </motion.a>
        </div>
      </div>
    </div>
  );
}




