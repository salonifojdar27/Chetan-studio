
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = () => {

    return (

        <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className=" w-full top-0 z-50 bg-amber-50/70 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 h-18">
                <Link to="/"><img src={logo} className="object-contain w-22" /></Link>
                <div className="flex gap-6 text-lg text-bronze font-semibold ">
                    <Link to="/" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110 ">Home</Link>
                    <Link to="/gallery" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110 ">Gallery</Link>
                    <Link to="/stories" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110 ">Stories</Link>
                    <Link to="/about" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110 ">About</Link>
                    <Link to="/contact" className="transition-transform duration-300 hover:text-[#b48b76] hover:scale-110" >Contact</Link>
                </div>
                <div className='flex gap-5'>
                    <p> instagram</p>
                    <p>facebook</p>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
