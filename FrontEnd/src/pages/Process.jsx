import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processRef = useRef(null);

  const processes = [
    {
      step: '01',
      title: 'Discovery Phase',
      description: 'We dive deep into understanding your business, goals, and vision through collaborative sessions.',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      color: 'hover:bg-black/5'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Developing comprehensive roadmap and technical architecture for your project.',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18M3 12h18M3 21h18" /></svg>,
      color: 'hover:bg-black/5'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'Creating intuitive interfaces and interactive prototypes for seamless user experience.',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m10-10H2" /></svg>,
      color: 'hover:bg-black/5'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building your solution with cutting-edge technologies and best practices.',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7-2 2m-7 7l-7 7-2-2m18-18l2 2" /></svg>,
      color: 'hover:bg-black/5'
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Rigorous testing and smooth deployment of your project.',
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m10-10H2" /></svg>,
      color: 'hover:bg-black/5'
    }
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position relative to card
    const y = e.clientY - rect.top;  // Mouse Y position relative to card
    
    // Calculate rotation angles based on mouse position
    const xRotation = ((y - rect.height / 2) / rect.height) * -10;
    const yRotation = ((x - rect.width / 2) / rect.width) * 10;

    // Apply transform using GSAP
    gsap.to(card, {
      rotateX: xRotation,
      rotateY: yRotation,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header with fade up and scale
      gsap.from('.process-header', {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: '.process-header',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1
        }
      });

      // Animate timeline line with drawing effect
      gsap.from('.process-line', {
        height: '0%',
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true
        }
      });

      // Animate process cards
      const cards = document.querySelectorAll('.process-card');
      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        
        // Card container animation
        gsap.from(card, {
          x: direction,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1
          }
        });

        // Timeline node animation
        gsap.from(card.querySelector('.timeline-node'), {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1
          }
        });

        // Content animation with stagger
        gsap.from(card.querySelectorAll('.animate-content'), {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top %',
            end: 'top 55%',
            scrub: 1
          }
        });
      });

      // // Floating animation for icons
      // gsap.to('.icon-float', {
      //   y: -10,
      //   duration: 1.5,
      //   ease: 'power1.inOut',
      //   repeat: -1,
      //   yoyo: true
      // });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={processRef} className="min-h-screen  py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#F2F2F2]">Our Process</h1>
          <p className="text-[#EAE4D4] text-lg max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional digital solutions
          </p>
        </div>

        {/* Process Grid */}
        <div className="process-grid relative">
          {/* Timeline connector */}
          <div className="process-line absolute left-[50%] top-0 w-px transform -translate-x-1/2" 
            style={{
              backgroundImage: 'linear-gradient(180deg, transparent, rgba(242,242,242,0.1) 10%, rgba(242,242,242,0.1) 90%, transparent)',
            }}
          />

          {processes.map((process, index) => (
            <div
              key={process.step}
              className={`process-card flex items-center gap-8 mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 p-8">
                <div className="group relative p-8 rounded-2xl transition-all duration-500 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="icon-float text-[#F2F2F2] bg-white/10 p-4 rounded-xl backdrop-blur-sm mb-4 inline-block animate-content">
                    {process.icon}
                  </div>
                  <span className="text-sm text-[#B6B19E] block mb-2 animate-content">Step {process.step}</span>
                  <h3 className="text-2xl font-bold mb-4 text-[#F2F2F2] animate-content">{process.title}</h3>
                  <p className="text-[#EAE4D4] animate-content">{process.description}</p>
                </div>
              </div>
              
              <div className="timeline-node relative z-10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-sm" />
                <div className="absolute -inset-2 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform" />
              </div>
              
              <div className="w-1/2" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="group relative px-8 py-4 bg-gradient-to-br from-white/20 to-white/5 text-[#F2F2F2] rounded-lg overflow-hidden border border-white/10">
            <span className="relative z-10 flex items-center">
              Start Your Project
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
