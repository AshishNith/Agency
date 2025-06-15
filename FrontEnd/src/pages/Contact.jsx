import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();x1x1
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    // Reset after showing success message
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial form animation
      gsap.from(formRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animate sections on scroll
      gsap.from('.contact-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%'
        }
      });

      // Enhanced card animations
      gsap.from('.contact-card', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-cards',
          start: 'top 75%'
        }
      });

      // Add hover animations for cards
      const cards = document.querySelectorAll('.contact-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const contactCards = [
    {
      title: 'Email Us',
      info: 'goran.dotin@gmail.com',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    },
    {
      title: 'Call Us',
      info: '+91 993-422-5353',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    },
    {
      title: 'Location',
      info: 'Nagpur, Maharashtra',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="contact-title text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50 mb-6">
            Let's Create Something Amazing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, index) => (
            <div key={index} className="contact-card group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-400">{card.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form - Remove motion.div and use regular div */}
        <div
          ref={formRef}
          className="max-w-3xl mx-auto opacity-0"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <select
                value={formState.service}
                onChange={(e) => setFormState({...formState, service: e.target.value})}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="ai">AI Integration</option>
                <option value="automation">Automation</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent peer focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Message"
                id="message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-white/20 to-white/5 hover:from-white/30 hover:to-white/10 border border-white/10 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
