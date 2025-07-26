import React from 'react';
import { motion } from 'framer-motion';

const SpinningEarth = () => {
  return (
    <div className="fixed top-20 right-10 z-0 opacity-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 rounded-full relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #4CAF50, #2E7D32, #1B5E20)',
          boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 40px rgba(76, 175, 80, 0.2)'
        }}
      >
        {/* Continent shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-6 w-6 h-4 bg-green-600 rounded-full opacity-80" />
          <div className="absolute top-8 right-4 w-8 h-6 bg-green-700 rounded-lg opacity-70" />
          <div className="absolute bottom-6 left-8 w-5 h-8 bg-green-600 rounded-full opacity-80" />
          <div className="absolute bottom-4 right-6 w-7 h-5 bg-green-700 rounded-lg opacity-70" />
        </div>
        
        {/* Atmosphere glow */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm" />
      </motion.div>
    </div>
  );
};

export default SpinningEarth;