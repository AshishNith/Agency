import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support' }
];

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated text reveal
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      });

      // Stats counter animation
      stats.forEach((_, index) => {
        gsap.from(`.stat-item-${index}`, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Crafting Digital Excellence
            </h2>
            <p className="text-[#EAE4D4] text-lg sm:text-xl leading-relaxed">
              We're not just another agency – we're your partners in digital transformation. 
              Our team combines creative design with cutting-edge technology to deliver 
              solutions that drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-6 py-3 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white">
                <span className="relative z-10 flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-container grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-item-${index} p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all`}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-[#EAE4D4] text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features/Services Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🎯', title: 'Strategic Approach', desc: 'Data-driven solutions tailored to your goals' },
            { icon: '💡', title: 'Modern Technology', desc: 'Cutting-edge tech stack for optimal performance' },
            { icon: '🤝', title: 'Client Success', desc: 'Dedicated support and continuous improvement' }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all group">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-[#EAE4D4] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
