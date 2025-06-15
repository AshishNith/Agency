import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Roboweek",
    description:
      "Revolutionized student engagement with an interactive robotics platform — 500+ participants across 50+ colleges engaged in virtual workshops and competitions, driving 3x increase in robotics club membership.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829595/roboweek_vaqwym.png",
    link: "https://roboweek3.com/",
  },
  {
    title: "Hotel Chi",
    description:
      "Transformed hotel booking experience with AI-powered personalization — resulting in 45% higher booking conversion rate and 60% increase in customer satisfaction scores.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/hotel_klzkwb.png",
    link: "https://saksham-chi.vercel.app/",
  },
  {
    title: "Literacy Mission",
    description:
      "Empowered rural education through digital transformation — connected 1000+ students with 200+ volunteer teachers, improving literacy rates by 40% in target communities.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/literacy_mission_cnii7k.png",
    link: "https://literacymission.nith.ac.in/",
  },
  {
    title: "Pahadi Craft",
    description:
      "Digitalized traditional Himachali handicrafts marketplace — enabled 100+ local artisans to reach global markets, increasing their average monthly income by 2.5x.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/pahadicraftwebsite_z3g08n.png",
  },
  {
    title: "SKipIt",
    description:
      "Modernized salon management with AI scheduling — reduced wait times by 70% and increased customer retention by 85% through smart appointment optimization.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829578/SkipIt_kre9aw.png",
  },
  {
    title: "Claim Ai",
    description:
      "Revolutionized insurance claims processing with AI — reduced processing time by 75% and operational costs by 50% while maintaining 99% accuracy rate.",
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
          end: "+=" + (projects.length * 400 + 700), // increased scroll length
          scrub: 1.5, // increased scrub value for smoother animation
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
            duration: 6, // increased duration
            ease: "power2.inOut", // added smooth easing
          },
          "+=6" // increased spacing between animations
        );
      });

      // Hold at the end with longer duration
      timeline.to({}, { duration: 4 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl h-full px-2 sm:px-6 py-8 sm:py-12 md:py-20 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 sm:mb-12 md:mb-20 z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Featured Projects
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute w-[95%] sm:w-[92%] md:w-[85%] bg-gradient-to-tl from-[#252420] via-[#34322a]/80 to-black/90 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 card-${index} shadow-2xl flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 hover:border-white/20 transition-all duration-300`}
            style={{ zIndex: 100 + index }}
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank");
              }
            }}
          >
            <div className="w-full md:w-4/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              <button className="group flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white w-fit text-xs sm:text-sm md:text-base lg:text-lg">
                <span>View Project</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
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
