import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollRobot = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const x = useTransform(scrollYProgress, [0, 1], [-200, window.innerWidth + 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1.2, 1.2, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-16 z-20 pointer-events-none"
      style={{ x, scale }}
    >
      <motion.div
        style={{ rotate }}
        className="w-32 h-40 relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* 3D Robot Container */}
        <div className="relative w-full h-full">
          {/* Main Body - 3D Effect */}
          <motion.div
            animate={{
              rotateY: [0, 5, -5, 0],
              rotateX: [0, 2, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-24"
            style={{
              transformStyle: 'preserve-3d',
              background: `
                linear-gradient(135deg, 
                  #e2e8f0 0%, 
                  #cbd5e1 25%, 
                  #94a3b8 50%, 
                  #64748b 75%, 
                  #475569 100%
                )
              `,
              borderRadius: '12px',
              boxShadow: `
                0 0 30px rgba(59, 130, 246, 0.4),
                inset -8px -8px 16px rgba(0, 0, 0, 0.3),
                inset 8px 8px 16px rgba(255, 255, 255, 0.1),
                0 20px 40px rgba(0, 0, 0, 0.4)
              `,
              border: '2px solid rgba(148, 163, 184, 0.3)'
            }}
          >
            {/* 3D Depth Panels */}
            <div 
              className="absolute inset-1 rounded-lg"
              style={{
                background: `
                  linear-gradient(45deg, 
                    rgba(59, 130, 246, 0.1) 0%, 
                    rgba(147, 51, 234, 0.1) 50%, 
                    rgba(59, 130, 246, 0.1) 100%
                  )
                `,
                boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.2)'
              }}
            />

            {/* AI Core - 3D Orb */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotateZ: [0, 360],
                boxShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)',
                  '0 0 40px rgba(0, 255, 255, 1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, 
                    #00ffff 0%, 
                    #0099ff 40%, 
                    #0066cc 100%
                  )
                `,
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div 
                className="absolute inset-1 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8), transparent 60%)'
                }}
              />
            </motion.div>

            {/* 3D Eyes */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {[0, 1].map((eye) => (
                <motion.div
                  key={eye}
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: eye * 0.5,
                    ease: "easeInOut"
                  }}
                  className="relative w-5 h-5"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Eye Socket */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, 
                          #1e293b 0%, 
                          #0f172a 100%
                        )
                      `,
                      boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.8)'
                    }}
                  />
                  
                  {/* Eye Lens */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 15px rgba(0, 255, 255, 0.8)',
                        '0 0 25px rgba(0, 255, 255, 1)',
                        '0 0 15px rgba(0, 255, 255, 0.8)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: eye * 0.3 }}
                    className="absolute inset-0.5 rounded-full"
                    style={{
                      background: `
                        radial-gradient(circle at 35% 35%, 
                          #00ffff 0%, 
                          #0099ff 30%, 
                          #003366 100%
                        )
                      `,
                      border: '1px solid rgba(0, 255, 255, 0.5)'
                    }}
                  >
                    {/* Pupil */}
                    <div 
                      className="absolute top-1 left-1 w-2 h-2 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.9), transparent 70%)'
                      }}
                    />
                    
                    {/* Iris Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-1 rounded-full border border-cyan-300/50"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* 3D Chest Panel */}
            <div 
              className="absolute top-16 left-2 right-2 h-6 rounded-lg"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(148, 163, 184, 0.8) 0%, 
                    rgba(100, 116, 139, 0.9) 100%
                  )
                `,
                boxShadow: `
                  inset -3px -3px 6px rgba(0, 0, 0, 0.3),
                  inset 3px 3px 6px rgba(255, 255, 255, 0.1)
                `,
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}
            >
              {/* Data Streams */}
              {[0, 1, 2].map((line) => (
                <motion.div
                  key={line}
                  animate={{ 
                    width: ['10%', '90%', '20%', '80%'],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2 + line * 0.5, 
                    repeat: Infinity,
                    delay: line * 0.3
                  }}
                  className="absolute rounded-full"
                  style={{
                    top: `${20 + line * 20}%`,
                    left: '10%',
                    height: '2px',
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      #00ffff 50%, 
                      transparent 100%
                    )`,
                    boxShadow: '0 0 4px rgba(0, 255, 255, 0.8)'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* 3D Arms */}
          {[-1, 1].map((side) => (
            <motion.div
              key={side}
              animate={{
                rotateZ: [side * -10, side * 10, side * -10],
                rotateY: [0, side * 15, 0],
                y: [0, -3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: side > 0 ? 0.5 : 0 }}
              className="absolute top-12 w-4 h-12 rounded-full"
              style={{
                left: side > 0 ? 'calc(50% + 40px)' : 'calc(50% - 56px)',
                transformStyle: 'preserve-3d',
                background: `
                  linear-gradient(${side > 0 ? '45deg' : '135deg'}, 
                    #e2e8f0 0%, 
                    #cbd5e1 25%, 
                    #94a3b8 75%, 
                    #64748b 100%
                  )
                `,
                boxShadow: `
                  ${side > 0 ? '-4px' : '4px'} 0 8px rgba(0, 0, 0, 0.3),
                  inset ${side > 0 ? '-2px' : '2px'} 0 4px rgba(255, 255, 255, 0.1),
                  0 0 15px rgba(59, 130, 246, 0.3)
                `,
                border: '1px solid rgba(148, 163, 184, 0.4)'
              }}
            >
              {/* Shoulder Joint */}
              <div 
                className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 40% 40%, #00ffff, #0066cc)',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.6), inset 0 0 4px rgba(255, 255, 255, 0.3)'
                }}
              />
              
              {/* Elbow Joint */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 5px rgba(0, 255, 255, 0.5)',
                    '0 0 15px rgba(0, 255, 255, 0.8)',
                    '0 0 5px rgba(0, 255, 255, 0.5)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: side > 0 ? 0.3 : 0 }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 40% 40%, #00ffff, #003366)'
                }}
              />
            </motion.div>
          ))}

          {/* 3D Legs/Hover Base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[0, 1].map((leg) => (
              <motion.div
                key={leg}
                animate={{
                  y: [0, -4, 0],
                  rotateX: [0, 10, 0],
                  boxShadow: [
                    '0 8px 20px rgba(0, 255, 255, 0.3), 0 0 15px rgba(59, 130, 246, 0.4)',
                    '0 12px 30px rgba(0, 255, 255, 0.5), 0 0 25px rgba(59, 130, 246, 0.6)',
                    '0 8px 20px rgba(0, 255, 255, 0.3), 0 0 15px rgba(59, 130, 246, 0.4)'
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: leg * 0.4,
                  ease: "easeInOut"
                }}
                className="w-5 h-10 rounded-full relative"
                style={{
                  transformStyle: 'preserve-3d',
                  background: `
                    linear-gradient(180deg, 
                      #e2e8f0 0%, 
                      #cbd5e1 25%, 
                      #94a3b8 75%, 
                      #64748b 100%
                    )
                  `,
                  border: '2px solid rgba(148, 163, 184, 0.4)'
                }}
              >
                {/* Thruster Effect */}
                <motion.div
                  animate={{
                    height: ['20%', '60%', '20%'],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: leg * 0.2 }}
                  className="absolute bottom-0 left-0 right-0 rounded-b-full"
                  style={{
                    background: `
                      linear-gradient(180deg, 
                        transparent 0%, 
                        rgba(0, 255, 255, 0.8) 50%, 
                        rgba(0, 150, 255, 1) 100%
                      )
                    `,
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Foot Pad */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-2 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.4), transparent)',
                    filter: 'blur(2px)'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* 3D Energy Field */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `
                conic-gradient(from 0deg, 
                  transparent 0deg, 
                  rgba(0, 255, 255, 0.1) 90deg, 
                  transparent 180deg, 
                  rgba(59, 130, 246, 0.1) 270deg, 
                  transparent 360deg
                )
              `,
              filter: 'blur(1px)'
            }}
          />

          {/* Floating Energy Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 30],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 30],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                background: 'radial-gradient(circle, #00ffff, #0066cc)',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)',
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollRobot;