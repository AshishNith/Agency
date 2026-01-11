import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Coffee, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] mb-10 text-white font-sans overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 404 Number with enhanced styling */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/60 to-white/20 drop-shadow-2xl">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              Page Not Found
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best explorers sometimes take a wrong turn.
            </p>
          </motion.div>

          {/* Action Cards */}
          <motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
>
  {[
    {
      icon: <Home size={24} />,
      title: 'Go Home',
      desc: 'Back to safety',
    },
    {
      icon: <ArrowLeft size={24} />,
      title: 'Go Back',
      desc: 'Previous page',
    },
    {
      icon: <Search size={24} />,
      title: 'Search',
      desc: 'Find what you need',
    },
    {
      icon: <Coffee size={24} />,
      title: 'Take a Break',
      desc: 'Relax a moment',
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-300"
    >
      <div className="text-white mb-4 p-3 bg-white/10 rounded-lg w-fit mx-auto group-hover:scale-110 transition-transform">
        {item.icon}
      </div>

      <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {item.title}
      </h3>

      <p className="text-gray-400 text-sm">{item.desc}</p>
    </motion.div>
  ))}
</motion.div>


          {/* Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                <Home size={20} className="mr-2" />
                Back to Home
              </span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </span>
            </button>
          </motion.div>

          {/* Error Info Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-gradient-to-br mb-10 from-white/[0.05] to-white/[0.01] backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-md mx-auto hover:border-white/20 transition-all duration-300"
          >
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">Error Code:</span> 404 | Page Not Found
            </p>
            <p className="text-gray-400 text-xs mt-2">
              If you believe this is an error, please contact support
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};

export default NotFound;
