import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "TechVision",
      logo: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg",
      industry: "Technology"
    },
    {
      id: 2,
      name: "EcoSmart",
      logo: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg",
      industry: "Sustainability"
    },
    {
      id: 3,
      name: "FinCore",
      logo: "https://images.pexels.com/photos/7239550/pexels-photo-7239550.jpeg",
      industry: "Finance"
    },
    {
      id: 4,
      name: "HealthPlus",
      logo: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      industry: "Healthcare"
    },
    {
      id: 5,
      name: "MediaPro",
      logo: "https://images.pexels.com/photos/5054152/pexels-photo-5054152.jpeg",
      industry: "Entertainment"
    },
    {
      id: 6,
      name: "SportFit",
      logo: "https://images.pexels.com/photos/6664255/pexels-photo-6664255.jpeg",
      industry: "Sports"
    },
    {
      id: 7,
      name: "EduLearn",
      logo: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      industry: "Education"
    },
    {
      id: 8,
      name: "FoodCo",
      logo: "https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg",
      industry: "Food & Beverage"
    }
  ];

  useEffect(() => {
    // First row animation
    gsap.to(firstRowRef.current, {
      x: '-50%',
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    // Second row animation (reverse direction)
    gsap.to(secondRowRef.current, {
      x: '0%',
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
    
    // Set initial position for second row
    gsap.set(secondRowRef.current, {
      x: '-50%',
    });

    return () => {
      // Cleanup animations
      gsap.killTweensOf([firstRowRef.current, secondRowRef.current]);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      <div className="text-center mb-16">
        <span className="block text-sm md:text-lg text-[#EAE4D4] tracking-[0.3em] mb-4 uppercase">
          Trusted by Industry Leaders
        </span>
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white/90 to-white/50 text-transparent bg-clip-text">
          Our Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
        {/* Side Blur Effects */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

        {/* First Row */}
        <div 
          ref={firstRowRef}
          className="first-row flex gap-8 px-20"
          style={{ 
            width: 'max-content',
            position: 'absolute',
            top: '0'
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={`first-${index}`}
              className="client-card flex-shrink-0 w-[280px] transform-gpu bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-cover rounded-xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 mx-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {client.name}
                </h3>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/5 text-white/60">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div 
          ref={secondRowRef}
          className="second-row flex gap-8 px-20"
          style={{ 
            width: 'max-content',
            position: 'absolute',
            top: '320px'
          }}
        >
          {clients.concat(clients).reverse().map((client, index) => (
            <div
              key={`second-${index}`}
              className="client-card flex-shrink-0 w-[280px] transform-gpu bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-cover rounded-xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 mx-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {client.name}
                </h3>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/5 text-white/60">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
//               <div
//                 key={`second-${index}`}
//                 className="client-card flex-shrink-0 w-[280px] transform-gpu bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="w-20 h-20 object-cover rounded-xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 mx-auto"
//                 />
//                 <div className="mt-4 text-center">
//                   <h3 className="text-white font-semibold text-lg mb-1">
//                     {client.name}
//                   </h3>
//                   <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/5 text-white/60">
//                     {client.industry}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
