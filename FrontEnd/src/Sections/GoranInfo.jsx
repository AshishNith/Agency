import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
<<<<<<< HEAD
import GoranInfoVid from "../assets/Image_Animation_Rotating_Gear_Waving_Hand.mp4"
=======
import GoranInfoVid from "../Assets/Image_Animation_Rotating_Gear_Waving_Hand.mp4"
>>>>>>> 8ed2ff8d2beb3ba5246f43534a5909f55a9d6ab1

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
    <section ref={sectionRef} className="relative min-h-screen py-20 sm:py-40 md:py-80 rounded-5xl bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
          
          <div className="flex-1 max-w-2xl">
            <h2 className="GoranInfo-title text-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
              Welcome to GoRan
            </h2>
            
            <div className="GoranInfo-description space-y-4 sm:space-y-6 text-gray-300">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
  We are a premier, registered AI agency in India, delivering cutting-edge artificial intelligence and autonomous agent services.
</p>

<p className="text-base sm:text-lg md:text-xl leading-relaxed">
  At GoRan, we specialize in developing intelligent, agentic AI solutions that are both powerful and performance-driven. Our mission is to deploy custom AI models, automated workflows, and smart calling agents that help our clients achieve scalable growth and data-driven results.
</p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="text-center w-24 sm:w-auto">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 mb-1 sm:mb-2">20+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center w-24 sm:w-auto">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center w-24 sm:w-auto">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 mb-1 sm:mb-2">3+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="GoranInfo-illustration flex-1 w-full h-xl max-w-lg px-4 sm:px-0">
            <video 
              src={GoranInfoVid}
              alt="Web Development Animation"
              className="h-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoranInfo;
