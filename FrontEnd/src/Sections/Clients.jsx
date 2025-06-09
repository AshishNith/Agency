import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "TechVision",
      logo: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg",
      industry: "Technology"
    },
    {
      id: 2,
      name: "EcoSmart",
      logo: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg",
      industry: "Sustainability"
    },
    {
      id: 3,
      name: "FinCore",
      logo: "https://images.pexels.com/photos/7239550/pexels-photo-7239550.jpeg",
      industry: "Finance"
    },
    {
      id: 4,
      name: "HealthPlus",
      logo: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      industry: "Healthcare"
    },
    {
      id: 5,
      name: "MediaPro",
      logo: "https://images.pexels.com/photos/5054152/pexels-photo-5054152.jpeg",
      industry: "Entertainment"
    },
    {
      id: 6,
      name: "SportFit",
      logo: "https://images.pexels.com/photos/6664255/pexels-photo-6664255.jpeg",
      industry: "Sports"
    },
    {
      id: 7,
      name: "EduLearn",
      logo: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      industry: "Education"
    },
    {
      id: 8,
      name: "FoodCo",
      logo: "https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg",
      industry: "Food & Beverage"
    }
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
    const ctx = gsap.context(() => {      // Enhanced horizontal scroll with smoother transitions and parallax
      const horizontalScroll = gsap.to(".horizontal-section", {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-container",
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth + window.innerHeight * 1.5}`,
          pin: true,
          scrub: 2,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Parallax effect for client logos
            gsap.utils.toArray('.client-logo').forEach((logo, i) => {
              const speed = i % 2 === 0 ? 0.2 : -0.2;
              gsap.set(logo, {
                x: self.progress * 100 * speed
              });
            });
          },
          onEnter: () => {
            // Fade in effect when section enters
            gsap.to(".horizontal-section", {
              opacity: 1,
              duration: 1,
              ease: "power2.out"
            });
          },
          onLeave: (self) => {
            // Enhanced transition to vertical scrolling
            gsap.to(window, {
              duration: 1.5,
              scrollTo: self.end,
              ease: "power4.inOut",
              onComplete: () => {
                // Bounce effect for vertical content
                gsap.from(".vertical-content", {
                  y: 50,
                  opacity: 0,
                  duration: 1,
                  ease: "back.out(1.2)"
                });
              }
            });
          }
        }
      });

      // Vertical scroll animations with delayed start
      gsap.from(".vertical-content", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".vertical-section",
          start: "top 90%",
          end: "top 40%",
          scrub: 1.5,
          toggleActions: "play none none reverse"
        }
      });

      return () => horizontalScroll.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      {/* Main Container */}
      <div className="horizontal-container relative min-h-screen bg-gradient-to-b from-black via-black/90 to-black overflow-hidden perspective-1000">
        <div
          ref={containerRef}
          className="horizontal-section relative flex items-start gap-32 p-24"
        >
          {/* Hero Title Section */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="relative z-10 text-center">
              <span className="block text-sm md:text-lg text-[#EAE4D4] tracking-[0.3em] mb-4 uppercase">
                Trusted by Industry Leaders
              </span>
              <h2 className="relative clients-title inline-block">
                <span className="block text-7xl md:text-9xl font-bold bg-gradient-to-r from-white via-white/90 to-white/50 text-transparent bg-clip-text">
                  Our Partners
                </span>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl" />
              </h2>
            </div>
          </div>

          {/* Clients Grid Section */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center border border-white/5 group-hover:border-white/20 transition-all duration-500">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-20 h-20 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white/90 font-medium">{client.name}</h3>
                      <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-white/5 text-white/60">
                        {client.industry}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Sections */}
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
    </section>
  );
};

export default Clients;
