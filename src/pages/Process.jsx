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
      // Animate header
      gsap.from('.process-header', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate process cards
      gsap.from('.process-card', {
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate connecting line
      gsap.from('.process-line', {
        height: 0,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={processRef} className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Process</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional digital solutions
          </p>
        </div>

        {/* Process Grid */}
        <div className="process-grid relative">
          {/* Updated connecting line with darker color and gradient */}
          <div className="process-line absolute left-[50%] top-0 w-px bg-gradient-to-b from-black/20 to-black/20 transform -translate-x-1/2" 
            style={{
              backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.2) 90%, transparent)',
              boxShadow: '0 0 8px rgba(0,0,0,0.1)'
            }}
          />

          {/* Process Steps */}
          {processes.map((process, index) => (
            <div
              key={process.step}
              className={`process-card flex items-center gap-8 mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 p-8">
                <div 
                  className={`group inline-block bg-white border border-gray-100 rounded-2xl p-8 w-full transform transition-all duration-300 hover:shadow-xl ${process.color}`}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <div className="text-black mb-4">
                    {process.icon}
                  </div>
                  <span className="text-sm text-gray-400 block mb-2">Step {process.step}</span>
                  <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
              
              {/* Updated timeline node */}
              <div className="relative z-10">
                <div className="w-6 h-6 rounded-full bg-black border-4 border-white shadow-md" />
                <div className="absolute -inset-2 rounded-full bg-black/5 scale-0 group-hover:scale-100 transition-transform" />
              </div>
              
              <div className="w-1/2" />
            </div>
          ))}
        </div>

        {/* Updated CTA Section */}
        <div className="text-center mt-20">
          <button className="group relative px-8 py-4 bg-black text-white rounded-lg overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <span className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
