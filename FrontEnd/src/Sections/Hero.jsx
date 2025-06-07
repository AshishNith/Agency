import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the large background text
      gsap.from('.hero-bg-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });

      // Animate the main heading words separately
      gsap.from('.word', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      });

      // Subtle float animation for the background text
      gsap.to('.hero-bg-text', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen  overflow-hidden flex items-center">


      {/* Background Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <h1 className="hero-bg-text text-[20vw] font-black text-white whitespace-nowrap transform -rotate-12">
              
        </h1>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Large Heading with split words for animation */}
          <h2 ref={textRef} className="flex flex-wrap justify-center gap-x-4 text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8">
            <span className="word">Powering</span>
            <span className="word">Next-Gen</span>
            <div className="w-full"></div>
            <span className="word">Digital</span>
            <span className="word relative">
              Solutions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F2F2F2] to-transparent"></span>
            </span>
          </h2>

          {/* Description with gradient background */}
          <p className="text-lg md:text-xl text-[#EAE4D4] max-w-2xl mb-12 relative">
            <span className="relative z-10">We help Indian businesses, creators, and teams grow with smart websites, 
            AI automation, and custom chatbots—designed for real results.</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></span>
          </p>

          {/* Buttons with updated design */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm text-white rounded-lg overflow-hidden border border-white/10">
              <span className="relative z-10 flex items-center justify-center">
                Book a Free Demo
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12"></div>
            </button>
            
            <button className="group relative px-8 py-4 text-white rounded-lg overflow-hidden border border-white/10">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
