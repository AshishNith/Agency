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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading with split text
      const heading = sectionRef.current.querySelector('h2');
      const chars = heading.textContent.split('');
      heading.textContent = '';
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'inline-block';
        heading.appendChild(span);
      });

      gsap.from(heading.children, {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%"
        }
      });

      // Staggered card animations
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_1px,transparent_1px),linear-gradient(-45deg,#000000_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-7xl md:text-9xl font-bold mb-24 overflow-hidden">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-black transition-colors">
                    {service.stats}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                <div className="inline-flex items-center text-sm font-medium">
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 bottom-0 w-full h-px bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
