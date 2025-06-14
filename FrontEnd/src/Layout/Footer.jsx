import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <>
      {/* Add Remix Icons CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      
      <footer ref={footerRef} className="relative pt-8 sm:pt-16 pb-6 sm:pb-8 bg-black/50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-12">
            {/* Brand & Social */}
            <div className="footer-section flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">GoRan</h3>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="https://twitter.com/agency" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-all text-lg sm:text-xl p-2">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href="https://linkedin.com/company/agency" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-all text-lg sm:text-xl p-2">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://instagram.com/agency" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-all text-lg sm:text-xl p-2">
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <li className="flex items-center group cursor-pointer">
                  <i className="ri-mail-line mr-2 sm:mr-3 group-hover:text-white transition-colors"></i>
                  <span className="group-hover:text-white transition-colors">goran.dotin@gmail.com</span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <i className="ri-phone-line mr-2 sm:mr-3 group-hover:text-white transition-colors"></i>
                  <span className="group-hover:text-white transition-colors">+91 9934225353</span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <i className="ri-phone-line mr-2 sm:mr-3 group-hover:text-white transition-colors"></i>
                  <span className="group-hover:text-white transition-colors">+91 8329310930</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs sm:text-sm text-center px-4">
              © {new Date().getFullYear()} GoRan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
