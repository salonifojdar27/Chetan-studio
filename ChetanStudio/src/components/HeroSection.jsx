// import React from 'react'

// const HeroSection = () => {
//     return (
//         <div>
//             <div>
//                 <img src="/photos/logo.png" alt="chetan Studio" />
//                 <div>
//                     <nav>
//                         <a href="">HOME</a>
//                         <a href="">GALLERY</a>
//                         <a href="">STORIES</a>
//                         <a href="">ABOUT</a>
//                         <a href="">CONTACT</a>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React, { useState } from "react";

const HeroSection = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white fixed w-full z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="/photos/logo.png"
                                alt="Chetan Studio"
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
                        <a href="#home" className="hover:text-rose-500">HOME</a>
                        <a href="#gallery" className="hover:text-rose-500">GALLERY</a>
                        <a href="#about" className="hover:text-rose-500">ABOUT</a>
                        <a href="#contact" className="hover:text-rose-500">CONTACT</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            {/* simple hamburger icon */}
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        <a href="#home" className="block py-2">HOME</a>
                        <a href="#gallery" className="block py-2">GALLERY</a>
                        <a href="#about" className="block py-2">ABOUT</a>
                        <a href="#contact" className="block py-2">CONTACT</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeroSection;
