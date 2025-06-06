import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    
    // Initial state
    gsap.set(navRef.current, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)"
    });

    // Scroll handler
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = prevScrollPos < currentScrollPos;
      
      gsap.to(navRef.current, {
        y: scrollingDown ? -100 : 0,
        backgroundColor: currentScrollPos > 50 ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
        backdropFilter: `blur(${Math.min(currentScrollPos / 10, 8)}px)`,
        duration: 0.3,
        ease: "power2.out"
      });

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial reveal animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Link hover animations
    linkRefs.current.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -2,
          duration: 0.2,
          ease: "power1.out"
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 0,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="backdrop-blur-md bg-white/80 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animated dot */}
          <div className="relative group">
            <Link to="/" className="text-2xl font-bold flex items-center">
              AGENCY
              <span className="w-2 h-2 bg-black rounded-full ml-1 group-hover:animate-ping"/>
            </Link>
          </div>

          {/* Navigation Links with hover effect */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Work', 'Process', 'Blog'].map((item, index) => (
              <Link
                key={item}
                ref={el => linkRefs.current[index] = el}
                to={`/${item.toLowerCase()}`}
                className="relative text-gray-700 px-3 py-2 text-sm font-medium group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"/>
              </Link>
            ))}
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center space-x-6">
            <button className="relative overflow-hidden px-6 py-2.5 group">
              <span className="relative z-10 text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
                Sign In
              </span>
              <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform"/>
            </button>
            <button className="relative overflow-hidden bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium group">
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;