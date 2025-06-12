import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const workItems = [
  {
    title: 'Website for AI SaaS Startup',
    description:
      'Developed a responsive and high-converting website for a startup offering AI-powered writing tools. Integrated animations, GPT-powered chatbot, and lead collection workflows.',
    link: '#',
  },
  {
    title: 'Custom AI Chatbot for EdTech',
    description:
      'Built a contextual, GPT-powered chatbot for an EdTech platform to help students find resources, track progress, and automate FAQs.',
    link: '#',
  },
  {
    title: 'Workflow Automation for D2C Brand',
    description:
      'Created backend automation to streamline order processing, CRM sync, and customer support using n8n and custom APIs.',
    link: '#',
  },
  {
    title: 'LangChain Agent for Data Analysis',
    description:
      'Engineered a LangChain agent to analyze CSVs, extract trends, and answer data questions using natural language.',
    link: '#',
  },
];

const Work = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white px-6 sm:px-12 md:px-20 lg:px-32 py-28 font-sans z-10">
      {/* Header */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          <Briefcase className="inline-block mr-2 mb-1" size={36} />
          Our Work
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto opacity-90">
          A look into what we’ve built with our clients — merging AI innovation, clean design, and automation.
        </p>
      </section>

      {/* Work Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white hover:underline hover:text-white/80 transition"
            >
              View Project <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-3 drop-shadow">
          Want to Build With Us?
        </h3>
        <p className="text-gray-200 mb-6">
          Whether it’s a chatbot, agent, automation, or full AI-powered platform — we can help you build it.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Let’s Talk
        </a>
      </div>
    </div>
  );
};

export default Work;