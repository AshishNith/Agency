import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  Briefcase,
  Globe,
  Settings,
  Sparkles,
  Zap,
  MessageSquare,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    icon: <Bot size={30} />,
    title: 'AI Agent Development',
    description:
      'We design intelligent agents that automate decision-making, customer interactions, and data analysis for your business.',
  },
  {
    icon: <MessageSquare size={30} />,
    title: 'Custom Chatbots',
    description:
      'Conversational AI bots tailored for customer support, sales, and user onboarding, built with GPT, Rasa, or Dialogflow.',
  },
  {
    icon: <Globe size={30} />,
    title: 'Website & Web App Development',
    description:
      'Blazing-fast, responsive websites and web apps with sleek UI/UX built using React, Next.js, and modern backend stacks.',
  },
  {
    icon: <Settings size={30} />,
    title: 'Workflow Automation',
    description:
      'Save hours with automation using tools like Zapier, n8n, and Make — fully customized to your processes.',
  },
  {
    icon: <Sparkles size={30} />,
    title: 'AI Integration & Consulting',
    description:
      'Get expert guidance and implementation support for AI integration, including OpenAI, LangChain, Pinecone, and more.',
  },
  {
    icon: <Zap size={30} />,
    title: 'Prompt Engineering',
    description:
      'Craft effective prompts for generative AI to produce accurate, safe, and contextually relevant outputs in apps or chatbots.',
  },
];

const Servises = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.service-card').forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0B0C10] text-white py-28 px-6 sm:px-12 md:px-20 lg:px-32 min-h-screen font-sans"
    >
      {/* Header Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-90">
          We blend strategy, design, and AI technology to build future-ready digital solutions tailored to your goals.
        </p>
      </section>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-white mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-28 flex justify-center">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-100">
            Got a Custom Project in Mind?
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Let’s bring your idea to life — whether it’s an AI tool, automated workflow, or a full-scale web platform.
          </p>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:opacity-90 transition-all duration-300">
            Let’s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servises;