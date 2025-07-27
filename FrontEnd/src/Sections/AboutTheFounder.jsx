import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const founders = [
    {
    name: "Ashish Ranjan",
    role: "Founder and CEO",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753597480/1727822390748_qe6sbm.jpg",
    bio: "Passionate engineer and founder of GoRan, blending AI, automation, and web tech to solve real-world problems.",
    socialLinks: {
      instagram: "https://instagram.com/ig_ashish.ranjan",
      linkedin: "https://www.linkedin.com/in/fictech/",
      twitter: "https://x.com/AshishR9992"
    }
  },
  {
    name: "Atharv Golait",
    role: "Cofounder and CFO",
    image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1750314113/profile_pic_ar5nim.jpg",
    bio: "Passionate about building scalable solutions and pushing technological boundaries. Specialized in modern web technologies, Sales & Marketing.",
    socialLinks: {
      instagram: "https://www.instagram.com/atharv.vv_?igsh=MzZ2NDlrNXVvbmJy",
      linkedin: "https://www.linkedin.com/in/atharv-golait-9048772ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Atharv_Golait?t=FKwzQ_VDSlRuUgBXkanvTw&s=09"
    }
  },
  
];

const AboutTheFounder = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - set cards to be rotated
      gsap.set('.founder-card:first-child', {
        rotationY: -90,
        x: -100,
        opacity: 0,
        transformPerspective: 1000,
        transformOrigin: "center center"
      });
      
      gsap.set('.founder-card:last-child', {
        rotationY: 90,
        x: 100,
        opacity: 0,
        transformPerspective: 1000,
        transformOrigin: "center center"
      });

      // Updated animations with repeat
      ['.founder-card:first-child', '.founder-card:last-child'].forEach(selector => {
        gsap.to(selector, {
          rotationY: 0,
          x: 0,
          opacity: 1,
          delay: 0.3,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            end: 'bottom center-=100',
            toggleActions: 'restart reverse restart reverse', // This makes it trigger every time
            scrub: false, // Remove scrub for instant animations
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen  text-white py-24 px-6 relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Meet Our Founders
        </h2>
        <p className="text-[#EAE4D4] text-center max-w-2xl mx-auto mb-16 text-lg">
          Passionate developers turning ideas into reality through code and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="founder-card group preserve-3d backface-hidden"
            >
              <div className="relative p-8 bg-gradient-to-tl from-[#252420] via-[#34322a]/80 to-black/90 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-semibold text-white mb-1">{founder.name}</h3>
                      <p className="text-sm text-[#EAE4D4]">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mt-6 leading-relaxed">{founder.bio}</p>

                  <div className="flex items-center justify-center sm:justify-start gap-5 mt-6">
                    {Object.entries(founder.socialLinks).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <span className="sr-only">{platform}</span>
                        <i className={`fab fa-${platform} text-xl`}></i>
                      </a>
                    ))}
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

export default AboutTheFounder;

