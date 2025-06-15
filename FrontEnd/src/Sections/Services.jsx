import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  const services = [
    {
      title: "AI Workflow Automation",
      description: "Cut 100s of hours in repetitive work with smart bots tailored for your business. Perfect for e-commerce inventory management, healthcare record processing, and educational admin tasks.",
      stats: "400+ Hours Saved Monthly",
      industries: "E-commerce • Healthcare • Education",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Smart Website Development",
      description: "Transform visitors into customers with AI-powered personalization. Our clients see up to 3x higher conversion rates and 70% better user engagement.",
      stats: "300% Avg. ROI",
      industries: "SaaS • Real Estate • Professional Services",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h10M4 18h10" />
        </svg>
      )
    },
    {
      title: "AI Chatbot Development",
      description: "24/7 intelligent support that actually helps. Our chatbots handle 80% of customer queries instantly, saving you $10k+ monthly in support costs.",
      stats: "90% Resolution Rate",
      industries: "Retail • Customer Service • Hospitality",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V9a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Creator Tools & Portfolios",
      description: "Stand out in the creator economy with AI-enhanced platforms that grow your audience. Our clients average 40% increase in engagement and monetization.",
      stats: "2.5x Revenue Growth",
      industries: "Content Creators • Artists • Freelancers",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7 7h10v10H7V7z" />
        </svg>
      )
    }
  ];
  const isMobile = window.innerWidth < 768;

  const handleMouseMove = (e, card) => {
    if (isMobile) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = ((mouseX - centerX) / centerX) * 12;
    const offsetY = ((mouseY - centerY) / centerY) * 12;
    
    const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
    const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
    const intensity = 1 - Math.min(distance / maxDistance, 1);

    gsap.to(card, {
      rotateX: -offsetY,
      rotateY: offsetX,
      scale: 1.02 + (intensity * 0.03),
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 1000
    });

    // Enhanced glow effect with dynamic positioning
    const glowIntensity = Math.min(Math.abs(offsetX) + Math.abs(offsetY), 15) / 15;
    const glowX = ((mouseX / rect.width) * 100);
    const glowY = ((mouseY / rect.height) * 100);
    
    gsap.to(card.querySelector('.card-glow'), {
      opacity: 0.3 + glowIntensity * 0.7,
      duration: 0.4,
      background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.4), transparent 100%)`,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (card) => {
    if (isMobile) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.to(card.querySelector('.card-glow'), {
      opacity: 0,
      duration: 0.5
    });
  };

  // Add touch event handlers
  const handleTouchStart = (card) => {
    if (!isMobile) return;
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTouchEnd = (card) => {
    if (!isMobile) return;
    handleMouseLeave(card);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        // Simplified mobile animations
        gsap.from('.services-title h2', {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 80%',
          }
        });

        // Simple fade in for cards on mobile
        gsap.utils.toArray('.service-card').forEach(card => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          });
        });

        // Disable pinning on mobile
        return;
      }

      // Desktop animations
      // Enhanced main timeline with smoother progression
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        }
      });

      // Title sequence with character split and 3D effect
      const titleChars = new SplitType('.services-title h2', { types: 'chars' });
      mainTl.from(titleChars.chars, {
        opacity: 0,
        rotateY: -90,
        stagger: 0.02,
        duration: 1,
        transformOrigin: "0% 50%",
        ease: "power2.out"
      })
      .to('.services-title', {
        y: -100,
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, '>1');

      // Enhanced cards animation with 3D perspective
      gsap.set('.service-card', { perspective: 1000 });
      
      const cards = gsap.utils.toArray('.service-card');
      cards.forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        });

        // Random starting position for each card
        const startX = gsap.utils.random(-200, 200);
        const startY = gsap.utils.random(100, 200);
        const startRotation = gsap.utils.random(-30, 30);

        tl.fromTo(card,
          {
            x: startX,
            y: startY,
            rotateZ: startRotation,
            rotateX: 45,
            opacity: 0,
            scale: 0.8
          },
          {
            x: 0,
            y: 0,
            rotateZ: 0,
            rotateX: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power3.out"
          }
        )
        .fromTo(card.querySelector('.service-icon'),
          {
            scale: 0,
            opacity: 0,
            rotation: -90
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)"
          },
          "-=1.5"
        );
      });

      // Parallax background effect
      gsap.to('.parallax-bg', {
        backgroundPosition: `50% ${window.innerHeight/2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Floating animation for icons
      gsap.to('.service-icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-16 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="parallax-bg absolute inset-0">
        {/* <div id="services" className="absolute inset-0 bg-gradient-to-b from-black to-[#1a1a1a] opacity-90"></div> */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="services-title absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] text-[#F2F2F2] font-bold">Services</h2>
        <h2 className="text-sm md:text-base text-[#F2F2F2] tracking-widest uppercase">
          - - - Innovative Solutions - - -
        </h2>
      </div>

      <div ref={containerRef} className="relative z-20 pt-[60vh] md:pt-[100vh]">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 pt-10 md:pt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                onTouchStart={(e) => handleTouchStart(e.currentTarget)}
                onTouchEnd={(e) => handleTouchEnd(e.currentTarget)}
                style={{ perspective: '1000px' }}
              >
                <div className="card-glow absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-2xl opacity-0 blur-xl transition-opacity"></div>
                <div className="group relative p-4 md:p-8 rounded-2xl transition-all duration-500 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-50 rounded-2xl transform transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="service-icon bg-white/10 text-[#F2F2F2] p-2 md:p-4 rounded-xl backdrop-blur-sm transform transition-transform">
                        {service.icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium bg-white/5 text-[#F2F2F2] px-3 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-sm">
                        {service.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4 text-[#F2F2F2] transform transition-transform">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-[#B6B19E] mb-2 md:mb-4 transform transition-transform">
                      {service.description}
                    </p>
                    
                    <p className="text-xs md:text-sm text-[#8B8778] mb-4 md:mb-8">
                      {service.industries}
                    </p>
                    
                    <button className="group inline-flex items-center text-xs md:text-sm font-semibold text-[#F2F2F2]">
                      <span className="relative">
                        Explore
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F2F2F2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  )
}

export default Services;
