import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1f1a17] text-gray-200 pt-14 pb-8 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-semibold tracking-wide">Chetan Studio</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        Capturing emotions and timeless memories with artistic excellence since 2008.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/" className="hover:text-white transition cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="hover:text-white transition cursor-pointer">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition cursor-pointer">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Address */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Address</h3>
                    <p className="text-gray-400 leading-relaxed">
                        📍 Siddhi Ganesh,<br />
                        Talangpur Road,<br />
                        Sachin, Surat.
                    </p>
                </div>

                {/* Contact + Socials */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400">📞 +91 9998327983</p>
                    <p className="text-gray-400 mt-2">✉️ info@chetanstudio.com</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Chetan Studio. All Rights Reserved.
            </div>
        </footer>
    );
}
