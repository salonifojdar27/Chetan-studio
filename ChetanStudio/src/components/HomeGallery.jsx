import { motion } from "framer-motion";
import img1 from "../assets/HomeGallery1.jpg";
import img2 from "../assets/HomeGallery2.jpg";
import img3 from "../assets/HomeGallery3.jpg";
import img4 from "../assets/HomeGallery4.jpg";
import img5 from "../assets/HomeGallery5.jpg";
import img6 from "../assets/HomeGallery6.jpg";
import img7 from "../assets/HomeGallery7.webp";
import img8 from "../assets/HomeGallery8.jpg";
import img10 from "../assets/HomeGallery10.jpg";
import img11 from "../assets/HomeGallery11.webp";
import img12 from "../assets/HomeGallery12.avif";

export default function GallerySection() {

    const images = [img1, img2, img3, img12, img8, img5, img10, img11, img6, img4, img7];

    return (
        <div className="w-full bg-[#F3EDE4] py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10"
                >
                    Our Gallery
                </motion.h2>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden rounded-xl shadow-lg"
                        >
                            <img
                                src={src}
                                alt="gallery"
                                className="w-full rounded-xl hover:opacity-90 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
