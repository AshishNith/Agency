import React from 'react';
import { Mail, Tag } from 'lucide-react';

const Blog = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white px-6 sm:px-12 md:px-20 lg:px-32 py-28 font-sans z-10">
      {/* Top Section */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4 text-white">
          GoRan Blog
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed opacity-90">
          Insights, ideas, and innovations in AI, automation, and modern web development — powered by GoRan.
        </p>
      </section>

      {/* Call to Action */}
      <div className="mt-28 text-center bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
          Want to Feature on Our Blog?
        </h2>
        <p className="text-gray-200 mb-6 leading-relaxed">
          We love sharing insights from the AI and dev community. Reach out if you'd like to contribute a guest post or showcase your innovative AI solutions.
        </p>
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
          Contact Us
        </button>
      </div>

      {/* Featured Tags */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 drop-shadow">
          <Tag size={20} />
          Featured Topics
        </h3>
        <div className="flex flex-wrap gap-4 text-sm">
          {['AI Agents', 'Chatbots', 'Prompt Engineering', 'Automation', 'OpenAI', 'LangChain'].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/20 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-24 text-center bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2 drop-shadow">
          <Mail size={20} />
          Join Our Newsletter
        </h3>
        <p className="text-gray-200 mb-4">
          Get the latest blog posts, tools, and AI tricks directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-2/3"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* About Company */}
      <div className="mt-24 border-t border-white/20 pt-10 text-center">
        <h4 className="text-xl font-semibold mb-3 drop-shadow">
          About GoRan
        </h4>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          GoRan is your strategic partner in building AI-driven experiences — from custom websites and smart chatbots to full-blown AI workflows. We’re on a mission to democratize intelligent automation and deliver impact-driven digital solutions to startups, agencies, and enterprises.
        </p>
      </div>
    </div>
  );
};

export default Blog;