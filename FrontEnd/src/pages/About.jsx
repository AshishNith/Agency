// NOTE: Assumes components like FloatingParticles, SpinningEarth, ScrollRobot, AnimatedCounter are already available in your project
// You can extract sections like TechUsed, Founders, Testimonials as separate components for cleaner code, if needed

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import FloatingParticles from "../Components/FloatingParticles";
import SpinningEarth from "../Components/SpinningEarth";
import ScrollRobot from "../Components/ScrollRobot";

const techStack = [
  "Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "GPT", "OpenAI API", "Stripe", "Flask", "n8n"
];

const services = [
  "Website Development",
  "AI Agents",
  "AI Workflows",
  "AI Automations",
  "Chatbot Development",
  "Consulting & Integration"
];

const founders = [
  {
    name: "Ashish Ranjan",
    role: "Founder & CEO",
    bio: "Full-Stack Developer and AI Engineer specializing in building intelligent solutions and automation systems.",
    extendedBio: "Led multiple successful AI projects and developed innovative automation solutions for businesses. Expertise in AI/ML, system architecture, and scalable web applications.",
    expertise: ["AI/ML", "System Architecture", "Full-Stack Development", "Team Leadership"],
    achievements: ["10+ Enterprise Solutions", "5+ AI Implementations", "Multiple Startup Consultations"],
    image: "https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw",
    socials: {
      linkedin: "https://www.linkedin.com/in/ashish-ranjan-225404237/",
      twitter: "https://twitter.com/ashishranjan_12",
      github: "https://github.com/ATHARVISM2004"
    }
  },
  {
    name: "Atharv Golait",
    role: "Co-Founder & CFO",
    bio: "Finance expert and marketing strategist with a passion for AI innovation and business growth.",
    extendedBio: "Drives financial strategy and business development. Specializes in market analysis, growth strategies, and sustainable business scaling.",
    expertise: ["Financial Strategy", "Marketing", "Business Development", "Growth Hacking"],
    achievements: ["Strategic Partnerships", "Market Expansion", "Revenue Growth"],
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEP8_8EaQfmyA/profile-framedphoto-shrink_400_400/B4DZdBXZ5YHkAc-/0/1749148344291?e=1749906000&v=beta&t=jeBL3lOQYPVoT9mpyQTyQvAMY1y52qfCnXJWOx8__2c",
    socials: {
      linkedin: "https://www.linkedin.com/in/atharv-golait-121b00251/",
      twitter: "https://twitter.com/golait_atharv",
      github: "https://github.com/ATHARVISM2004"
    }
  }
];

const testimonials = [
  {
    quote: "Working with GoRan was transformative — their automation and AI expertise elevated our operations beyond expectations.",
    author: "Rahul Sharma",
    company: "TechVision AI",
    role: "CTO"
  },
  {
    quote: "The chatbot they developed increased our customer engagement by 200% and significantly reduced response times.",
    author: "Priya Patel",
    company: "CloudServe Solutions",
    role: "Head of Operations"
  },
  {
    quote: "Their expertise in AI integration helped us streamline our workflows and reduce operational costs by 40%.",
    author: "Amit Kumar",
    company: "DataFirst Analytics",
    role: "CEO"
  },
  {
    quote: "Exceptional service and technical expertise. They delivered our project ahead of schedule with outstanding quality.",
    author: "Sarah Chen",
    company: "InnovateX",
    role: "Product Manager"
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Keep existing background components */}
      <FloatingParticles />
      <SpinningEarth />
      <ScrollRobot />

      {/* Hero Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-[55vh] w-full overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="https://res.cloudinary.com/dmhabztbf/image/upload/v1753467280/pexels-pavel-danilyuk-8294605_owebyo.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
          alt="About Hero"
        />
        <div className="absolute inset-0 bg-gradient-radial from-black via-black/80 to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-lg mb-6">
              About Us
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Designing intelligent experiences at the intersection of AI, automation and web innovation.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-20 space-y-32">
        {/* Mission Section - Enhanced */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto glare-effect hover-card-animation bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-12 border border-white/10"
        >
          <div className="inline-block p-4 rounded-full bg-white/10 mb-6">
            <span className="text-4xl">🎯</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To empower businesses through AI-driven design, automation workflows, and next-gen digital platforms that scale with elegance and intelligence.
          </p>
        </motion.section>

        {/* Services Grid - Enhanced */}
        <motion.section className="text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative glare-effect hover-card-animation bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20"
              >
                <div className="relative z-10">
                  <span className="text-3xl mb-4 block">{service}</span>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto my-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack - Enhanced */}
        <motion.section className="text-center relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glare-effect hover-card-animation px-6 py-3 bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-xl border border-white/10 text-white backdrop-blur-sm hover:border-white/20 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Founders Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Meet Our Founders
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative max-w-lg w-full glare-effect hover-card-animation"
              >
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl p-10 border border-white/10 h-full flex flex-col">
                  {/* Profile Image with Glow */}
                  <div className="relative w-40 h-40 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/10 transform transition-transform group-hover:scale-105">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {founder.name}
                    </h3>
                    <p className="text-purple-300 font-medium mb-4 text-lg">{founder.role}</p>
                    <p className="text-gray-400 mb-6">{founder.extendedBio}</p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-white/80 font-semibold mb-3">Expertise</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {founder.expertise.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-purple-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-white/80 font-semibold mb-3">Key Achievements</h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        {founder.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-auto">
                      <a
                        href={founder.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
                      >
                        <i className="fab fa-linkedin text-2xl"></i>
                      </a>
                      <a
                        href={founder.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
                      >
                        <i className="fab fa-twitter text-2xl"></i>
                      </a>
                      <a
                        href={founder.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
                      >
                        <i className="fab fa-github text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Testimonials Section */}
        <motion.section className="text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glare-effect hover-card-animation bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 rounded-2xl border border-white/10"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-6" />
                <p className="italic mb-6 text-gray-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-white">{testimonial.author}</span>
                  <span className="text-purple-300/80 text-sm">{testimonial.role}</span>
                  <span className="text-gray-400 text-sm">{testimonial.company}</span>
                </div>
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
            <motion.h2 className="text-4xl font-bold mb-6">Let's Build Something Intelligent</motion.h2>
            <motion.p className="text-gray-200 mb-8 leading-relaxed text-lg">
              From concept to creation — we're ready to help you launch powerful digital products.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-full shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;