import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Footer sections reveal
    gsap.from(footerRef.current.querySelectorAll('.footer-section'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <footer ref={footerRef} className="relative pt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-6">AGENCY.</h3>
            <p className="text-gray-600 mb-8 pr-8">
              We craft digital experiences that inspire and transform businesses through innovative design and technology.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
                <a key={social} href={`https://${social}.com`} className="text-gray-400 hover:text-black transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-base font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-black cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-black cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-black cursor-pointer transition-colors">Brand Strategy</li>
              <li className="hover:text-black cursor-pointer transition-colors">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-base font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@agency.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="md:col-span-3">
            <h4 className="text-base font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
              />
              <button className="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Interactive Bottom Bar */}
      <div className="border-t bg-white border-gray-200  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} AGENCY. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-black text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
        {/* Animated background pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000),linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000)] bg-[length:40px_40px]" />
      </div> */}
      
    </footer>
  );
};

export default Footer;
