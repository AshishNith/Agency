import React, { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { motion } from 'framer-motion';

  gsap.registerPlugin(ScrollTrigger);

  const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.fade-in-up').forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          });
        });
      }, aboutRef);

      return () => ctx.revert();
    }, []);

    return (
      <div
        ref={aboutRef}
        className=" text-white py-24 px-6 sm:px-10 md:px-20 lg:px-32 min-h-screen space-y-28 font-sans"
      >
        {/* Hero Section */}
        <section className="text-center space-y-4 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Redefining Human-Machine Collaboration
          </h1>
          <p className="text-lg text-[#C9C9C9] max-w-3xl mx-auto">
            We build intelligent, elegant, and scalable digital solutions using AI, automation, and modern design.
          </p>
        </section>

        {/* Mission */}
        <section className="text-center max-w-4xl mx-auto space-y-6 fade-in-up">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-[#EAE4D4] text-lg leading-relaxed">
            Empowering ambitious businesses with intelligent automation and human-centric AI experiences.
          </p>
        </section>

        {/* What We Do */}
        <section className="fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-[#EAE4D4]">
            {[
              'Custom AI Agents',
              'Chatbot Development',
              'Website & App Development',
              'AI Consulting & Integration',
              'Automation Systems',
              'Prompt Engineering',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-[1.04] hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg font-medium">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="fade-in-up text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-[#EAE4D4] text-base leading-relaxed">
            We started as two passionate tech minds who wanted to push the boundaries of design and automation in India.
            Today, we’re helping startups and creators build future-proof digital products.
          </p>
        </section>

        {/* Tech We Use */}
        <section className="fade-in-up text-center">
          <h2 className="text-3xl font-bold mb-6">Tech We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 text-[#EAE4D4] text-sm">
            {[
              'GPT-4o',
              'LangChain',
              'React',
              'Next.js',
              'Tailwind CSS',
              'Framer Motion',
              'GSAP',
              'Node.js',
              'Express',
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full shadow-sm hover:bg-white/10 transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10">Meet the Founders</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            {[
              {
                name: 'Atharv Golait',
                title: 'Co-Founder · Lead Developer',
                img: '/images/founders/atharv.jpg',
                bio: 'Crafting intelligent code behind automation and sleek UIs. Builder at heart.',
              },
              {
                name: 'Ashish Ranjan',
                title: 'Co-Founder · Product Strategist',
                img: '/images/founders/ashish.jpg',
                bio: 'Driving clarity in product design and scalable business logic.',
              },
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border border-white/20">
                  <img src={person.img} alt={person.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-[#EAE4D4]">{person.title}</p>
                <p className="mt-3 text-sm text-[#C9C9C9]">{person.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="fade-in-up text-center space-y-8">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: 'Ananya S.',
                feedback: 'Their chatbot and automation saved us 100+ hours/month. Seamless execution!',
              },
              {
                name: 'Rahul M.',
                feedback: 'Beautiful UI, fast results, and smart solutions. Exactly what we needed.',
              },
            ].map((testi, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl text-[#EAE4D4] shadow-lg hover:shadow-xl transition-all"
              >
                <p className="italic text-base">“{testi.feedback}”</p>
                <p className="mt-4 text-sm text-[#C9C9C9]">— {testi.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-up text-center space-y-4">
          <h2 className="text-3xl font-bold">Let’s Build Something Intelligent</h2>
          <p className="text-[#C9C9C9] text-base">We’re excited to bring your idea to life with smart, human-centric tech.</p>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            Start a Project
          </button>
        </section>
      </div>
    );
  };

  export default About;