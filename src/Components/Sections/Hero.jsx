import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Content */}
      <div className="max-w-7xl relative mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-4xl leading-tight mb-6">
            Powering Startups with <span className="text-black">AI & Web Solutions</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            We help Indian businesses, creators, and teams grow with smart websites, AI automation, and custom chatbots—designed for real results, not buzzwords.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Book a Free Demo
            </button>
            <button className="px-8 py-4 border border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors">
              Explore Our Work
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Startups Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
              <div className="text-gray-600">Work Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4X</div>
              <div className="text-gray-600">Lead Generation Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
