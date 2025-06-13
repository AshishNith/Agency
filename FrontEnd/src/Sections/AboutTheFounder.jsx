import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const founders = [
    {
    name: "Ashish Ranjan",
    role: "Cofounder and CEO",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw",
    bio: "Creative developer focused on crafting beautiful user experiences. Expert in animation and interactive web design.",
    socialLinks: {
      github: "https://github.com/ashishranjan",
      linkedin: "https://linkedin.com/in/ashishranjan",
      twitter: "https://twitter.com/ashishranjan"
    }
  },
  {
    name: "Atharv Golait",
    role: "Cofounder and CFO",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEP8_8EaQfmyA/profile-framedphoto-shrink_400_400/B4DZdBXZ5YHkAc-/0/1749148344291?e=1749906000&v=beta&t=jeBL3lOQYPVoT9mpyQTyQvAMY1y52qfCnXJWOx8__2c",
    bio: "Passionate about building scalable solutions and pushing technological boundaries. Specialized in AI integration and modern web technologies.",
    socialLinks: {
      github: "https://github.com/atharvgolaith",
      linkedin: "https://linkedin.com/in/atharvgolait",
      twitter: "https://twitter.com/atharvgolait"
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

      // Animate cards when scrolled into view
      gsap.to('.founder-card:first-child', {
        rotationY: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.to('.founder-card:last-child', {
        rotationY: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black pointer-events-none" />

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
