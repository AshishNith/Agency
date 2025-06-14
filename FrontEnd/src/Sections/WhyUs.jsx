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
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="brain-path" d="M12 4C7 4 3 7 3 12C3 17 7 20 12 20C17 20 21 17 21 12C21 7 17 4 12 4Z" strokeWidth="1.5"/>
          <path className="brain-wave" d="M8 12C8 12 10 14 12 14C14 14 16 12 16 12" strokeWidth="1.5"/>
          <circle className="brain-pulse" cx="12" cy="12" r="1"/>
        </svg>
      ),
      title: "AI-Powered Efficiency",
      description: "We automate what others do manually—saving you hours and increasing productivity with smart AI tools.",
      stat: "70% Task Automation"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="rocket-body" d="M4.5 16.5L8 20M15 15L20 20" strokeWidth="1.5"/>
          <path className="rocket-flame" d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" strokeWidth="1.5"/>
          <path className="rocket-window" d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Lightning-Fast Launches",
      description: "Our agile process and pre-built modules let us deliver fully functional products in record time.",
      stat: "2x Faster Go-to-Market"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="graph-line" d="M3 12L8 7L13 12L21 4" strokeWidth="1.5" strokeLinecap="round"/>
          <circle className="graph-dot" cx="8" cy="7" r="2"/>
          <circle className="graph-dot" cx="13" cy="12" r="2"/>
          <circle className="graph-dot" cx="21" cy="4" r="2"/>
        </svg>
      ),
      title: "Results That Matter",
      description: "We don't just build pretty websites—we build systems that convert, scale, and drive growth.",
      stat: "40% Avg. Conversion Boost"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="shield-outer" d="M12 3L20 7V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V7L12 3Z" strokeWidth="1.5"/>
          <path className="shield-inner" d="M12 7L16 9V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V9L12 7Z" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Rock-Solid Reliability",
      description: "From code quality to uptime and security, our systems are built to withstand the real world.",
      stat: "99.99% Uptime Guarantee"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="code-bracket" d="M8 6L3 12L8 18" strokeWidth="1.5"/>
          <path className="code-bracket" d="M16 6L21 12L16 18" strokeWidth="1.5"/>
          <path className="code-slash" d="M14 4L10 20" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Founder-Led Execution",
      description: "Work directly with engineers, not account managers. We're hands-on, technical, and care deeply.",
      stat: "100% Dev-Involved Leadership"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="support-circle" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" strokeWidth="1.5"/>
          <path className="support-headset" d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12" strokeWidth="1.5"/>
          <path className="support-mic" d="M12 12V16" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Always-On Support",
      description: "We're available when you need us—Slack, WhatsApp, email—whatever works best for you.",
      stat: "<1 Hr Avg. Response Time"
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path className="tools-wrench" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Free 2-Month Maintenance",
      description: "We don't just deliver and disappear. After launch, we stick around to squash bugs, make tweaks, and ensure everything runs smoothly.",
      stat: "60 Days Post-Launch Support"
    }
  ];

  // Update card className with responsive styles
  const cardClassName = (index) => `reason-card-${index} flex-shrink-0 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] md:h-[400px] perspective-1000`;

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

      // Update horizontal scroll animation with responsive values
      gsap.to('.reasons-container', {
        xPercent: -100,
        x: () => window.innerWidth,
        scrollTrigger: {
          trigger: '.reasons-wrapper',
          start: 'top top',
          end: () => `+=${window.innerWidth * 2.5}`, // Responsive scroll length
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="reasons-wrapper relative h-screen">
        <h2 className="whyus-title absolute top-4 sm:top-10 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center z-10 px-4">
          Why Choose Us
        </h2>

        <div ref={containerRef} className="reasons-container backdrop-blur-[2px] absolute top-1/2 -translate-y-1/2 flex gap-4 sm:gap-6 md:gap-8 px-[20vw] sm:px-[30vw] md:px-[50vw]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={cardClassName(index)}
            >
              <div className="relative h-full group transform-style-3d transition-transform duration-500 hover:rotate-y-12">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 backface-hidden overflow-hidden">
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-10 pointer-events-none" />

                  {/* Shine swipe effect */}
                  <div className="absolute top-0 left-[-75%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shine rounded-2xl" />

                  <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4 md:mb-6 relative z-20">{reason.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 relative z-20">{reason.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-5 md:mb-6 relative z-20">{reason.description}</p>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20">
                    <span className="text-sm sm:text-base md:text-xl font-bold text-white bg-white/10 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full">
                      {reason.stat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shine Animation Keyframe */}
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-100%) rotate(12deg);
            }
            100% {
              transform: translateX(100%) rotate(12deg);
            }
          }
          .animate-shine {
            animation: shine 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WhyUs;