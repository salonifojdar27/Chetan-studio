import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2c221c] text-white py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Side - Brand */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold tracking-wide">Chetan Studio</h2>
                    <p className="text-gray-300 max-w-sm leading-relaxed">
                        Capturing timeless moments with passion and artistry since 2008.
                    </p>
                </div>

                {/* Middle - Contact */}
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold mb-1">Contact</h3>
                    <p className="text-gray-300 flex items-center gap-2">
                        ✉️ info@chetanstudio.com
                    </p>
                    <p className="text-gray-300 flex items-center gap-2">
                        📞 +91 98765 43210
                    </p>
                </div>

                {/* Right - Social Icons */}
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3029] hover:bg-[#574a41] transition">
                            <FaInstagram className="text-white text-lg" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3029] hover:bg-[#574a41] transition">
                            <FaFacebookF className="text-white text-lg" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Chetan Studio. All rights reserved.
            </div>
        </footer>
    );
}
