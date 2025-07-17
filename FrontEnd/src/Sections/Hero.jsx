import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAuth } from "../auth/AuthContext"; 
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  // const sectionRefs = useRef([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCalendlyClick = () => {
    if (currentUser) {
      setShowCalendly(true);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.from('.hero-content', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out'
        });
        return;
      }

      gsap.from('.hero-bg-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });

      gsap.from('.word', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

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

      const parallaxBg = document.querySelector('.parallax-bg');
      const grid = document.querySelector('.animated-grid');

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
            gsap.set(parallaxBg, {
              opacity: 1 - (self.progress * 0.5)
            });
          }
        }
      });

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
            const progress = self.progress;
            grid.style.backgroundSize = `${64 + (progress * 32)}px ${64 + (progress * 32)}px`;
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const calendlyUrl = currentUser
    ? `https://calendly.com/goran-dotin/30min?email=${encodeURIComponent(currentUser.email)}`
    : "https://calendly.com/goran-dotin/30min";

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <div ref={containerRef} className="relative z-10 h-screen">
        <div className="hero-content flex flex-col items-center justify-center min-h-screen text-center max-w-7xl mx-auto px-4 py-20">
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

          <p className="hero-description text-lg md:text-xl text-[#EAE4D4] max-w-2xl mb-12 relative overflow-hidden">
            <span className="relative z-10">We help Indian businesses, creators, and teams grow with smart websites, 
            AI automation, and custom chatbots—designed for real results.</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></span>
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6">
            <button
              onClick={handleCalendlyClick}
              className="group relative px-8 py-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm text-white rounded-lg overflow-hidden border border-white/10 hover:from-white/30 hover:to-white/10 transition-all duration-300"
            >
              Schedule A Free Meeting →
            </button>
            <button 
              onClick={() => window.location.href = '/services'}
              className="group relative px-8 py-4 text-white rounded-lg overflow-hidden border border-white/10">
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {showCalendly && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-xl overflow-hidden">
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-6 text-gray-800 hover:text-red-600 text-3xl font-bold"
              >
                ×
              </button>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Scheduler"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;