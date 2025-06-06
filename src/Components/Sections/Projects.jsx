import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsRef = useRef([]);
  
  const categories = ['All', 'Branding', 'Web Design', 'Development', 'E-commerce'];
  
  const projects = [
    {
      title: "Lumbazzi",
      category: "Branding",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
      link: "https://lumbazzi.com",
      agency: "Disruptive Brand"
    },
    {
      title: "Roberta's Society",
      category: "Web Design",
      image: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg",
      link: "https://robertassociety.com",
      agency: "Rockbell"
    },
    {
      title: "Exclusive Furniture",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/7147854/pexels-photo-7147854.jpeg",
      link: "https://exclusive.com",
      agency: "Proweb"
    },
    {
      title: "Digital Creators",
      category: "Development",
      image: "https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg",
      link: "https://digitalcreators.com",
      agency: "Webflow Studio"
    },
    {
      title: "Artisan Coffee",
      category: "Branding",
      image: "https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg",
      link: "https://artisancoffee.com",
      agency: "Creative Labs"
    },
    {
      title: "Tech Innovate",
      category: "Development",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      link: "https://techinnovate.com",
      agency: "Digital Wave"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category.toLowerCase().includes(activeFilter.toLowerCase())
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset any existing animations
      gsap.set(projectsRef.current, {
        clearProps: "all"
      });

      // Projects animation timeline
      const projectsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      });

      projectsTimeline
        .from(projectsRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            grid: "auto"
          },
          ease: "power3.out"
        });

      // Filter change animation
      if (filteredProjects.length > 0) {
        gsap.to(projectsRef.current, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut"
        });
      }
    });

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section - Remove opacity-0 */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6">what we DO</h2>
            <p className="text-gray-600 max-w-lg text-lg">
              Explore our portfolio of award-winning digital experiences and brand transformations
            </p>
          </div>
          
          {/* Category Filter - Add class name for animation */}
          <div className="filter-buttons flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-4 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category.toLowerCase())}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeFilter === category.toLowerCase()
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <a
              ref={el => projectsRef.current[index] = el}
              href={project.link}
              key={index}
              className={`group relative block overflow-hidden ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${
                index % 5 === 0 ? 'h-[600px]' : 'h-[400px]'
              } w-full overflow-hidden bg-gray-100`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="overlay absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transform translate-y-4">
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium inline-block mb-4 w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white/70 text-sm">{project.agency}</p>
                      <svg className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
