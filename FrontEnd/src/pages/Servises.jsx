import React, { useEffect, useRef, useState } from 'react';
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
  Code,
  Check,
  ArrowRight,
  Star,
  Coffee,
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

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    duration: 'per project',
    features: [
      'Custom AI Agent or Chatbot',
      'Basic Integration',
      '2 Weeks Support',
      '1 Revision Round',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$4,999',
    duration: 'per project',
    features: [
      'Advanced AI Integration',
      'Custom Dashboard',
      '1 Month Support',
      '3 Revision Rounds',
      'Performance Analytics',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    duration: 'tailored solution',
    features: [
      'Full-Scale Development',
      'Multiple AI Integrations',
      'Dedicated Support',
      'Unlimited Revisions',
      'Custom Features',
    ],
    highlight: false,
  },
];

const Servises = () => {
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Batch animations for better performance
      ScrollTrigger.batch('.service-card', {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          }),
        start: 'top 85%',
      });

      // Fixed pricing cards animation
      gsap.set('.pricing-card', { opacity: 0, y: 50 }); // Set initial state
      
      gsap.to('.pricing-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-section',
          start: 'top 80%',
          once: true, // Only animate once
          markers: false
        }
      });

      // Optimized stats animation
      const statsAnimation = gsap.utils
        .toArray('.stat-number')
        .map((stat) => {
          const target = parseFloat(stat.getAttribute('data-target'));
          return gsap.to(stat, {
            duration: 2,
            snap: { innerHTML: 1 },
            innerHTML: target,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              once: true,
            },
          });
        });

      // Process steps animation
      gsap.from('.process-step', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 75%',
        },
      });

      return () => {
        statsAnimation.forEach((anim) => anim.kill());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-black py-28 space-y-32"
    >
      {/* Hero Section */}
      <section className="px-6 bg-black sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-6 bg-clip-text  bg-gradient-to-r from-white via-white/90 to-white/50">
            Transform Your Business With AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We build intelligent solutions that automate, optimize, and elevate
            your digital presence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: 45, label: 'Projects Delivered' },
              { number: 98, label: 'Satisfied Clients' },
              { number: 125000, label: 'Lines of Code' },
              { number: 24, label: 'AI Models Integrated' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.label.includes('Lines') && '+'}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Enhanced Cards */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-white mb-4 p-3 bg-white/10 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="flex items-center text-sm text-white/90 hover:text-white transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 sm:px-12 md:px-20 lg:px-32 py-20 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Coffee />,
                title: 'Discovery',
                desc: 'Understanding your needs',
              },
              {
                icon: <Code />,
                title: 'Development',
                desc: 'Building your solution',
              },
              {
                icon: <Check />,
                title: 'Testing',
                desc: 'Ensuring perfection',
              },
              {
                icon: <Star />,
                title: 'Launch',
                desc: 'Going live with support',
              },
            ].map((step, i) => (
              <div key={i} className="text-center relative process-step">
                <div className="relative z-10 bg-white/15 p-6 rounded-xl border border-white/20">
                  <div className="text-white mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-white/30 to-transparent -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Updated */}
      <section className="pricing-section relative z-10 px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card relative p-8 rounded-2xl border ${
                  plan.highlight
                    ? 'border-white/30 bg-gradient-to-b from-white/15 to-white/5'
                    : 'border-white/20 bg-gradient-to-b from-white/10 to-transparent'
                } backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-medium rounded-full">
                    Popular Choice
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm"> {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <Check size={16} className="mr-2 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg border ${
                    plan.highlight
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'border-white/20 hover:bg-white/10'
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-28 flex justify-center">
        <div className="backdrop-blur-md bg-white/15 border border-white/20 shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-100">
            Got a Custom Project in Mind?
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Let’s bring your idea to life — whether it’s an AI tool, automated
            workflow, or a full-scale web platform.
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