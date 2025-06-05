import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "AI Workflow Automation",
      description: "Automate boring, repetitive business tasks with custom AI bots & tools.",
      stats: "10+ Workflows",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Smart Website Development",
      description: "Custom-coded websites with built-in AI features to boost conversion & user retention.",
      stats: "25+ Projects",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h10M4 18h10" />
        </svg>
      )
    },
    {
      title: "AI Chatbot Development",
      description: "Build WhatsApp, web, and in-app AI chatbots that handle leads, support, and bookings.",
      stats: "15+ Bots Deployed",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V9a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Creator Tools & Portfolios",
      description: "Helping content creators, YouTubers, and freelancers build powerful online identities.",
      stats: "12+ Creators Helped",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7 7h10v10H7V7z" />
        </svg>
      )
    }
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = ((mouseX - centerX) / centerX) * 15;
    const offsetY = ((mouseY - centerY) / centerY) * 15;

    gsap.to(card, {
      rotateX: -offsetY,
      rotateY: offsetX,
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial title animation
      gsap.set('.services-title', { opacity: 0, y: 100 });
      gsap.to('.services-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 20%',
          scrub: 1
        }
      });

      // Title blur effect on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=50%',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          gsap.to('.services-title', {
            opacity: 1 - self.progress,
            filter: `blur(${self.progress * 20}px)`,
            scale: 1 - (self.progress * 0.1),
            duration: 0.1
          });
        }
      });

      // Staggered card animations
      gsap.from('.service-card', {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32">
      {/* Main Title */}
      <div className="services-title fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h2 className="text-8xl md:text-[12rem] font-bold">Services</h2>
      </div>

      {/* Cards Grid with Higher Z-index */}
      <div className="relative z-20 pt-[100vh]">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-16 pt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                style={{ perspective: '1000px' }}
              >
                <div className="group relative bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_80px_rgba(0,0,0,0.07)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-black/[0.02] rounded-2xl transform transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-black text-white p-4 rounded-xl">
                        {service.icon}
                      </div>
                      <span className="text-sm font-medium bg-black/[0.03] px-4 py-2 rounded-full">
                        {service.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mt-6 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8">
                      {service.description}
                    </p>
                    
                    <button className="group inline-flex items-center text-sm font-semibold">
                      <span className="relative">
                        Explore
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
