import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function MissionSection() {
    return (
        <div className="w-full bg-[#F7F3EB] py-28 flex flex-col items-center text-center px-6">
             
            {/* TOP LABEL */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[12px] tracking-[2px] text-gray-600 uppercase"
            >
                Our Mission
            </motion.p>

            {/* BIG TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 text-[45px] md:text-[52px] font-serif leading-tight text-[#111]"
            >
                Where Every Frame <br />
                Tells a Love Story That <br />
                Lasts Forever
            </motion.h1>

            {/* LOGO ICON */}
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={logo}
                alt="brand"
                className="w-16 mt-8 opacity-80"
            />

            {/* PARAGRAPH */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mt-6 max-w-2xl text-[15px] text-gray-700 leading-relaxed"
            >
                Through our lenses, we step beyond these limitations, honing in on
                the emotions that define your story. We capture the essence of who you
                are, creating memories that go beyond labels and speak to the heart.
            </motion.p>

        </div>
    );
}
