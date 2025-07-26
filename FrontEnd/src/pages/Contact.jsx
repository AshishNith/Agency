import React from "react";
import { motion } from "framer-motion";
import FloatingParticles from "../Components/FloatingParticles";
import SpinningEarth from "../Components/SpinningEarth";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/goran-ai/?viewAsMember=true" },
  { icon: <FaGithub />, url: "https://github.com/ATHARVISM2804" },
  { icon: <FaTwitter />, url: "https://x.com/Goran_Ai_Agency" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/goran.dotin/" },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Animated Background */}
      <FloatingParticles />
      <SpinningEarth />

      {/* Main Section */}
      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Side: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Glare effect */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:rotate-45 before:scale-150 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500 before:z-0" />
          <div className="relative z-10 space-y-10">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-white">CONTACT US</h2>
              <p className="text-sm text-gray-400">GoRan AI Agency</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-yellow-500 font-bold text-lg">📞 Call Us</p>
                <p className="text-gray-300">(+91) 8329310930, (+91) 9934225353</p>
              </div>
              <div>
                <p className="text-yellow-500 font-bold text-lg">📍 Location</p>
                <p className="text-gray-300">Hamirpur, Himachal 177005</p>
              </div>
              <div>
                <p className="text-yellow-500 font-bold text-lg">🕘 Business Hours</p>
                <p className="text-gray-300">Mon – Sat...... 10 am – 8 pm, Sun ........ Closed</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white text-xl p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition duration-300 shadow-md hover:shadow-yellow-500"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-10 overflow-hidden"
        >
          {/* Glare effect */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:rotate-45 before:scale-150 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500 before:z-0" />
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            <input
              type="text"
              placeholder="Name"
              className="px-5 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/10 col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-5 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/10 col-span-1"
            />
            <input
              type="text"
              placeholder="Address"
              className="px-5 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/10 col-span-2"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="px-5 py-3 rounded-lg bg-black/40 text-white placeholder-gray-400 border border-white/10 col-span-2"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg col-span-2 transition-all"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Google Map Embed at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 sm:px-12 md:px-20 lg:px-32 pb-20"
      >
        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.0719477146627!2d76.59458047565981!3d31.71392957412599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d700752a33a1%3A0xf6b0050574ca6745!2sAnu%20chowk!5e0!3m2!1sen!2sin!4v1753531773146!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;


