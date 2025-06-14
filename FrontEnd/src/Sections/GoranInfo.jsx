import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import GoranInfoImg from "../../public/Assets/GoranInfo1.jpg"

gsap.registerPlugin(ScrollTrigger);

const GoranInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split and animate the heading text
      const titleText = new SplitType('.GoranInfo-title', { types: 'chars' });
      
      gsap.from(titleText.chars, {
        scrollTrigger: {
          trigger: '.GoranInfo-title',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0.2,
        stagger: 0.1,
        y: 100,
        rotateX: 90,
        transformOrigin: 'bottom'
      });

      // Animate the description text
      gsap.from('.GoranInfo-description', {
        scrollTrigger: {
          trigger: '.GoranInfo-description',
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        },
        y: 50,
        opacity: 0
      });

      // Animate the illustration
      gsap.from('.GoranInfo-illustration', {
        scrollTrigger: {
          trigger: '.GoranInfo-illustration',
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        x: 100,
        opacity: 0,
        rotation: 10
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-40 rounded-5xl bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-20 relative  z-10">
        <div className="flex flex-col lg:flex-row items-center  justify-between gap-12 lg:gap-24">
          
          <div className="flex-1 max-w-2xl">
            <h2 className="GoranInfo-title text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
              Welcome to GoRan
            </h2>
            
            <div className="GoranInfo-description space-y-6 text-gray-300">
              <p className="text-lg sm:text-xl leading-relaxed">
                We are a 100% trusted and registered company in India, delivering top-tier web development and web design services.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed">
                At Fillip Technologies, we specialize in building multi-functional web portals that are both visually appealing and performance-driven. Our mission is to craft dynamic, user-friendly websites that help our clients achieve ROI-focused results and online growth.
              </p>

              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-300 mb-2">100+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-300 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-300 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="GoranInfo-illustration flex-1 w-full max-w-lg">
            <img 
              src={GoranInfoImg}
              alt="Web Development Illustration"
              className="w-full h-auto rounded-2xl"
            />
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default GoranInfo;
