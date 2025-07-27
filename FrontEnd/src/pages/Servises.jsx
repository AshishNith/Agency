import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PopupButton } from 'react-calendly';
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
import { motion } from 'framer-motion';
import FloatingParticles from '../Components/FloatingParticles';
import SpinningEarth from '../Components/SpinningEarth';
import ScrollRobot from '../Components/ScrollRobot';

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
    price: '₹ 4,999',
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
    price: '₹ 14,999',
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

const statsData = [
  { number: 15, label: 'Projects Delivered', suffix: '+' },
  { number: 10, label: 'Satisfied Clients', suffix: '+' },
  { number: 100000, label: 'Lines of Code', suffix: '+' },
  { number: 25, label: 'AI Models Integrated', suffix: '+' },
];

const Servises = () => {
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fix for stats animation
      statsData.forEach((stat, index) => {
        const el = document.querySelector(`.stat-number-${index}`);
        if (el) {
          let value = { val: 0 };
          gsap.to(value, {
            val: stat.number,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              el.innerHTML = Math.round(value.val);
            },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          });
        }
      });

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
            markers: false,
          },
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

        // Fixed Process Steps Animation
        const processSteps = gsap.utils.toArray('.process-step');
        processSteps.forEach((step, i) => {
          gsap.set(step, { opacity: 0, y: 50 });

          ScrollTrigger.create({
            trigger: step,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
              gsap.to(step, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'power3.out',
              });
            },
            once: true,
          });
        });

        // Process Connection Lines Animation
        const processLines = gsap.utils.toArray('.process-line');
        processLines.forEach((line) => {
          gsap.set(line, { width: 0 });

          ScrollTrigger.create({
            trigger: line,
            start: 'top 70%',
            end: 'bottom 20%',
            onEnter: () => {
              gsap.to(line, {
                width: '100%',
                duration: 0.8,
                ease: 'power2.inOut',
              });
            },
            once: true,
          });
        });

        return () => {
          statsAnimation.forEach((anim) => anim.kill());
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, sectionRef);

      return () => ctx.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden"
    >
      {/* Background Animations */}
      <FloatingParticles />
      <SpinningEarth />
      <ScrollRobot />

      {/* Hero Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="https://res.cloudinary.com/dmhabztbf/image/upload/v1753467280/pexels-pavel-danilyuk-8294605_owebyo.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
          alt="Services Hero"
        />
        <div className="absolute inset-0 bg-gradient-radial from-black via-black/80 to-transparent opacity-90" />

        {/* Improved Content Alignment */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl mt-10 lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-lg mb-6 mx-auto">
              Transform Your Business With AI
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We build intelligent solutions that automate, optimize, and elevate your
              digital presence.
            </p>

            {/* Stats Section with fixed animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {statsData.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                    <span className={`stat-number-${i}`}>0</span>
                    {stat.suffix}
                  </motion.div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-20 space-y-32">
        {/* Services Grid - Enhanced */}
        <motion.section className="text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative glare-effect hover-card-animation bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-white mb-4 p-3 bg-white/10 rounded-lg w-fit mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="flex items-center text-sm text-white/90 hover:text-white transition-colors mx-auto">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Process Section */}
        <motion.section className="relative process-section">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  icon: <Coffee className="text-purple-300" />,
                  title: 'Discovery',
                  desc: 'Understanding your needs',
                  gradient: 'from-purple-500/20 to-blue-500/20',
                },
                {
                  icon: <Code className="text-blue-300" />,
                  title: 'Development',
                  desc: 'Building your solution',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                },
                {
                  icon: <Check className="text-green-300" />,
                  title: 'Testing',
                  desc: 'Ensuring perfection',
                  gradient: 'from-cyan-500/20 to-emerald-500/20',
                },
                {
                  icon: <Star className="text-yellow-300" />,
                  title: 'Launch',
                  desc: 'Going live with support',
                  gradient: 'from-emerald-500/20 to-purple-500/20',
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <motion.div className="process-step relative z-20">
                    <div
                      className={`relative glare-effect hover-card-animation bg-gradient-to-br ${step.gradient} p-8 rounded-xl border border-white/20 backdrop-blur-md group transition-all duration-300`}
                    >
                      <div className="text-white mb-6 mx-auto w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                  {i < 3 && (
                    <div className="process-line hidden md:block absolute top-1/2 left-[calc(100%_-_1px)] w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section - Enhanced */}
        <motion.section className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative glare-effect hover-card-animation p-8 rounded-2xl border ${
                  plan.highlight
                    ? 'border-white/30 bg-gradient-to-br from-white/[0.15] to-white/[0.05]'
                    : 'border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02]'
                } backdrop-blur-sm`}
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.section className="text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glare-effect hover-card-animation bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/10 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Got a Custom Project in Mind?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Let's bring your idea to life — whether it's an AI tool, automated workflow, or a full-scale web platform.
            </p>
            <PopupButton
              url="https://calendly.com/goran-dotin/30min"
              rootElement={document.getElementById('root')}
              text="Let's Talk →"
              className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Servises;