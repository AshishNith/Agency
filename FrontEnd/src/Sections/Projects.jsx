import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Roboweek",
    description: "Robosoc - Roboweek 3.0 - A robotics event.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829595/roboweek_vaqwym.png",
    link: "https://roboweek3.com/",
  },
  {
    title: "Hotel Website",
    description: "Hotel Chi - A hotel booking website.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/hotel_klzkwb.png",
    link: "https://saksham-chi.vercel.app/",
  },
  {
    title: "Literacy Mission",
    description: "Literacy Mission NITH - A social initiative.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/literacy_mission_cnii7k.png",
    link: "https://literacymission.nith.ac.in/",
  },
  {
    title: "Pahadi Craft",
    description: "Pahadi Craft - A platform for Himachali handicrafts.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/pahadicraftwebsite_z3g08n.png",
  },
  {
    title: "SKipIt",
    description: "SkipIt - A smart saloon.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829578/SkipIt_kre9aw.png",
  },
  {
    title: "Claim Ai",
    description: "Claim Ai - An AI-powered claims processing platform.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829563/Claim_Ai_aic5tw.png",
  },
];

const ProjectStackGSAP = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + (projects.length * 300 + 500), // extra 500 for the hold
          scrub: true,
          pin: true,
        },
      });

      projects.forEach((_, i) => {
        timeline.fromTo(
          `.card-${i}`,
          {
            opacity: 0,
            y: 1000,
          },
          {
            opacity: 1,
            y: 0,
            duration: 4,
            // ease: "power2.out",
          },
          "+=4"
        );
      });

      // ⏸️ Hold at the end
      timeline.to({}, { duration: 3 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl h-full px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-center justify-center gap-6 sm:gap-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-12 sm:mb-20 z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Featured Projects
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute w-[92%] sm:w-[85%] bg-gradient-to-tl from-[#252420] via-[#34322a]/80 to-black/90 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-${index} shadow-2xl flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 hover:border-white/20 transition-all duration-300`}
            style={{ zIndex: 100 + index }}
            onClick={() => {
                if (project.link) {
                    window.open(project.link, "_blank");
                }
            }
            }
          >
            <div className="w-full md:w-4/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 w-full md:w-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              <button className="group flex items-center gap-2 text-white/80 hover:text-white w-fit text-sm sm:text-base md:text-lg">
                <span>View Project</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStackGSAP;
