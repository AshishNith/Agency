import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const reasons = [
    {
      icon: "🚀",
      title: "Fast Development",
      description: "Launch your project 2x faster with our optimized workflow and expert team.",
      stat: "50% Time Saved"
    },
    {
      icon: "💎",
      title: "Proven Results",
      description: "Our solutions deliver measurable ROI with 95% client satisfaction rate.",
      stat: "40% Avg. ROI"
    },
    {
      icon: "⚡",
      title: "Modern Tech Stack",
      description: "Built with cutting-edge technologies ensuring scalability and future-proof solutions.",
      stat: "99.9% Uptime"
    },
    {
      icon: "🌟",
      title: "Dedicated Support",
      description: "24/7 expert support with average response time under 2 hours.",
      stat: "98% Resolution"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      const titleText = new SplitType('.whyus-title', { types: 'chars' });
      gsap.from(titleText.chars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1
      });

      // Horizontal scroll animation
      gsap.to('.reasons-container', {
        xPercent: -100,
        x: window.innerWidth,
        scrollTrigger: {
          trigger: '.reasons-wrapper',
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: 1,
        }
      });

      // Individual card animations
      reasons.forEach((_, index) => {
        gsap.from(`.reason-card-${index}`, {
          scrollTrigger: {
            trigger: `.reason-card-${index}`,
            start: 'left center',
            end: 'right center',
            containerAnimation: ScrollTrigger.getById('reasons-container'),
            toggleActions: 'play none none reverse'
          },
          scale: 0.8,
          rotateY: -30,
          opacity: 0,
          duration: 1
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen  overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="reasons-wrapper relative h-screen">
        <h2 className="whyus-title absolute top-10 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold text-white text-center z-10">
          Why Choose Us
        </h2>

        <div ref={containerRef} className="reasons-container absolute top-1/2 -translate-y-1/2 flex gap-8 px-[50vw]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reason-card-${index} flex-shrink-0 w-[600px] h-[400px] perspective-1000`}
            >
              <div className="relative h-full group transform-style-3d transition-transform duration-500 hover:rotate-y-12">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 p-8 backface-hidden">
                  <div className="text-6xl mb-6">{reason.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{reason.description}</p>
                  <div className="absolute bottom-8 right-8">
                    <span className="text-xl font-bold text-white bg-white/10 px-4 py-2 rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
                  

