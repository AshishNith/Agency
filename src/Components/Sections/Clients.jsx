import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const clients = [
    { id: 1, name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-2.svg' },
    { id: 2, name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
    { id: 3, name: 'Dropbox', logo: 'https://cdn.worldvectorlogo.com/logos/dropbox-2.svg' },
    { id: 4, name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
    { id: 5, name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
    { id: 6, name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb.svg' },
    { id: 7, name: 'Discord', logo: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg' },
    { id: 8, name: 'Twitter', logo: 'https://cdn.worldvectorlogo.com/logos/twitter-6.svg' }
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
      // Pin the section and animate horizontal scroll
      const pinAndScrollAnimation = gsap.to(containerRef.current, {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // markers: true, // Remove in production
        }
      });

      gsap.from(".clients-title", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".clients-title",
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        }
      });

      gsap.to(".logo-container", {
        yPercent: -50,
        opacity: 0.3,
        scrollTrigger: {
          trigger: ".logo-container",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });

      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%"
        }
      });

      gsap.from(".testimonial-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 70%",
          end: "bottom 20%",
        }
      });

      return () => {
        pinAndScrollAnimation.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Main horizontal scroll container */}
      <div 
        ref={containerRef} 
        className="relative flex items-start gap-20 p-20"
      >
        {/* Title Section */}
        <div className="flex-shrink-0 w-screen">
          <div className="max-w-7xl mx-auto">
            <h2 className="clients-title text-8xl md:text-[12rem] font-bold">
              <span className="block text-2xl">Our</span>
              Clients
            </h2>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex-shrink-0 w-screen">
          <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            {clients.map((client) => (
              <div 
                key={client.id}
                className="aspect-square bg-white/50 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center group hover:bg-white transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex-shrink-0 w-screen">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl pb-20 text-center font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex-shrink-0 w-screen">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="stat-number text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
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
