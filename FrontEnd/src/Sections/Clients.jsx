import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const clients = [
    
  ];

  const testimonials = [
    {
      quote: "The team delivered beyond our expectations. Their attention to detail and creative approach set them apart.",
      author: "Sarah Johnson",
      role: "Chief Design Officer",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
    },
    {
      quote: "Working with them transformed our digital presence. The results speak for themselves.",
      author: "Michael Chen",
      role: "Product Lead",
      company: "Innovate Inc",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
    }
  ];

  const stats = [
    { number: "200+", label: "Happy Clients" },
    { number: "95%", label: "Client Retention" },
    { number: "12+", label: "Years Experience" },
    { number: "50+", label: "Team Members" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll for clients only
      const horizontalScroll = gsap.to(".horizontal-section", {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-container",
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          pinSpacing: true
        }
      });

      // Vertical scroll animations
      gsap.from(".vertical-content", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".vertical-section",
          start: "top 80%",
          end: "+=300",
          scrub: 1
        }
      });

      return () => horizontalScroll.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Horizontal Scroll Section */}
      <div className="horizontal-container relative min-h-screen ">
        <div 
          ref={containerRef} 
          className="horizontal-section relative flex items-start gap-20 p-20"
        >
          {/* Title Section */}
          <div className="flex-shrink-0 w-screen">
            <div className="max-w-7xl mx-auto">
              <h2 className="relative mt-36 clients-title text-center">
                <span className="absolute top-0 left-1/4 text-2xl text-[#EAE4D4] tracking-widest">Our Trusted</span>
                <span className="text-8xl md:text-[12rem] font-bold text-[#F2F2F2]">Partners</span>
              </h2>
            </div>
          </div>

          {/* Logos Section */}
          <div className="flex-shrink-0 w-screen">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {clients.map((client) => (
                <div 
                  key={client.id}
                  className="aspect-square bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center group border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-24 h-24 object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <div className="vertical-section ">
        {/* Testimonials */}
        <div className="vertical-content py-32">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#F2F2F2]">What They Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/10"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-[#F2F2F2]">{testimonial.author}</h4>
                      <p className="text-[#EAE4D4] text-sm">{testimonial.role}</p>
                      <p className="text-[#B6B19E] text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-[#EAE4D4] leading-relaxed">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="vertical-content py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="text-4xl font-bold mb-2 text-[#F2F2F2] group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-[#B6B19E]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
