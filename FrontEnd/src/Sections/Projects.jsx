import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Autonomous Delivery Bot",
    description: "Smart delivery robot with computer vision.",
    image: "https://unsplash.it/400/300?random=1",
  },
  {
    title: "AI Chat Assistant",
    description: "Custom GPT-based assistant with scraping logic.",
    image: "https://unsplash.it/400/300?random=2",
  },
  {
    title: "Web Dev Agency Site",
    description: "Next.js full-stack site for a digital agency.",
    image: "https://unsplash.it/400/300?random=3",
  },
  {
    title: "Robotic Arm Control",
    description: "IK + joystick controller for robotic arms.",
    image: "https://unsplash.it/400/300?random=4",
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
          y: 500,
        },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          ease: "power2.out",
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
      className="relative min-h-[100vh]  text-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl h-full px-6 py-20 flex flex-col items-center justify-center gap-8">
        <h1 className="text-6xl md:text-9xl font-bold mb-20 z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Featured Projects
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute w-full md:w-[85%] bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-${index} shadow-2xl flex flex-col md:flex-row gap-8 hover:border-white/20 transition-all duration-300`}
            style={{ zIndex: 100 + index }}
          >
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6 w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {project.description}
              </p>
              <button className="group flex items-center gap-2 text-white/80 hover:text-white w-fit">
                <span className="text-lg">View Project</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
