import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from('.hero-bg-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });

      // Split text animation for each word
      gsap.from('.word', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Main timeline with enhanced pin effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "0% 0%",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: self => {
            gsap.set(".hero-content", {
              y: self.progress * -50
            });
          }
        }
      });

      // Add timeline animations
      tl.to('.hero-content', {
        scale: 0.95,
        opacity: 0.8,
        duration: 1,
        ease: "power2.inOut"
      })
      .to('.hero-content', {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
        ease: "power4.in"
      }, ">+=0.2");

      // Enhanced parallax effects for background elements
      const parallaxBg = document.querySelector('.parallax-bg');
      const grid = document.querySelector('.animated-grid');
      
      // Parallax background with scale and blur
      gsap.to('.parallax-bg', {
        y: -150,
        scale: 1.3,
        filter: 'blur(5px)',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          onUpdate: (self) => {
            // Dynamic opacity based on scroll
            gsap.set(parallaxBg, {
              opacity: 1 - (self.progress * 0.5)
            });
          }
        }
      });

      // Animated grid with rotation and scale
      gsap.to('.animated-grid', {
        y: -50,
        rotation: -5,
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          onUpdate: (self) => {
            // Dynamic grid size based on scroll
            const progress = self.progress;
            grid.style.backgroundSize = `${64 + (progress * 32)}px ${64 + (progress * 32)}px`;
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Animated background */}
      {/* <div className="parallax-bg absolute  "></div> */}
      
      {/* Animated grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] transform"></div> */}

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 h-screen">
        <div className="hero-content flex flex-col items-center justify-center min-h-screen text-center max-w-7xl mx-auto px-4 py-20">
          {/* Large Heading with split words */}
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

          {/* Description with gradient */}
          <p className="hero-description text-lg md:text-xl text-[#EAE4D4] max-w-2xl mb-12 relative overflow-hidden">
            <span className="relative z-10">We help Indian businesses, creators, and teams grow with smart websites, 
            AI automation, and custom chatbots—designed for real results.</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></span>
          </p>  

          {/* Buttons with enhanced hover effects */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm text-white rounded-lg overflow-hidden border border-white/10">
              <span className="relative z-10 flex items-center justify-center">
                Schedule A Free Meeting
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

        {/* Next Section (Appears on Scroll) */}
        {/* <div className="next-section absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Transform Your Digital Presence</h3>
            <p className="text-xl text-[#EAE4D4] max-w-2xl mx-auto">
              Let's create something extraordinary together.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
