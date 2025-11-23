import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className=" w-full top-0 z-50 bg-amber-50/70 backdrop-blur-md shadow-md"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 h-18">

                {/* Logo (same size as your original) */}
                <Link to="/">
                    <img src={logo} className="object-contain w-22" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-lg text-bronze font-normal">
                    <Link to="/" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110">Home</Link>
                    <Link to="/gallery" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110">Gallery</Link>
                    <Link to="/stories" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110">Stories</Link>
                    <Link to="/about" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110">About</Link>
                    <Link to="/contact" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110">Contact</Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl text-bronze"
                >
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-amber-50/90 backdrop-blur-md shadow-md p-6 flex flex-col gap-6 text-lg font-semibold text-bronze"
                >
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link to="/stories" onClick={() => setOpen(false)}>Stories</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
