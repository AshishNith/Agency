import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      title: "Lumbazzi",
      category: "Brand Identity",
      description: "A revolutionary e-commerce platform transforming the furniture industry",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
      link: "https://lumbazzi.com",
      agency: "Disruptive Brand"
    },
    {
      title: "Roberta's Society",
      category: "Web Design",
      description: "An innovative platform blending art and technology",
      image: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg",
      link: "https://robertassociety.com",
      agency: "Rockbell"
    },
    {
      title: "Exclusive Furniture",
      category: "E-commerce",
      description: "High-end furniture solutions for modern homes",
      image: "https://images.pexels.com/photos/7147854/pexels-photo-7147854.jpeg",
      link: "https://exclusive.com",
      agency: "Proweb"
    },
    {
      title: "Digital Creators",
      category: "Development",
      description: "Empowering creators with cutting-edge digital tools",
      image: "https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg",
      link: "https://digitalcreators.com",
      agency: "Webflow Studio"
    },
    {
      title: "Artisan Coffee",
      category: "Branding",
      description: "Crafting unique brand identities for passionate entrepreneurs",
      image: "https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg",
      link: "https://artisancoffee.com",
      agency: "Creative Labs"
    },
    {
      title: "Tech Innovate",
      category: "Development",
      description: "Innovative solutions for a digital-first world",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      link: "https://techinnovate.com",
      agency: "Digital Wave"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for project cards
      gsap.from(projectsRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "random"
        },
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 90%",
          end: "top 30%",
          scrub: 1
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32  overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap transform -rotate-12">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl lg:text-9xl font-bold mb-6 text-[#F2F2F2]">
            Featured Works
          </h2>
          <p className="text-[#EAE4D4] max-w-2xl mx-auto text-lg">
            Explore our latest work and see how we help businesses grow
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
              className={`group relative ${
                index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
              } ${index % 5 === 0 ? 'md:row-span-2' : ''}`}
            >
              <a 
                href={project.link}
                className="block w-full h-full overflow-hidden rounded-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 z-10"/>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-[#F2F2F2] border border-white/10">
                      {project.category}
                    </span>
                    <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                      <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#EAE4D4] text-sm mb-4">{project.description}</p>
                    <p className="text-white/70 text-sm">{project.agency}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
