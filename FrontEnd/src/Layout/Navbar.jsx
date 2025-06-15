import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useScrollAndNavigate } from '../hooks/useScrollAndNavigate';
import { LoadingContext } from '../App';
import LOGo from "../../public/Assets/LOGO.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection, navigateTo } = useScrollAndNavigate();
  const { handleRouteChange } = useContext(LoadingContext);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = prevScrollPos < currentScrollPos

      // Only trigger hide/show after 100px scroll
      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setIsVisible(!isScrollingDown)
        setPrevScrollPos(currentScrollPos)
      }

      // Background change logic
      if (currentScrollPos > 100) {
        setScrolled(true)
        gsap.to('.navbar', {
          backdropFilter: 'blur(10px)',
          background: 'rgba(0,0,0,0.5)',
          duration: 0.5,
          ease: 'power3.out',
        })
      } else {
        setScrolled(false)
        gsap.to('.navbar', {
          backdropFilter: 'blur(0px)',
          background: 'transparent',
          duration: 0.5,
          ease: 'power3.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  // Animation for navbar visibility
  useEffect(() => {
    gsap.to('.navbar', {
      y: isVisible ? 0 : -150,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }, [isVisible])

  const navItems = [
    { name: 'About', id: 'about', type: 'route', path: '/about' },
    { name: 'Services', id: 'services', type: 'section' },
    { name: 'Process', id: 'process', type: 'section' },
    { name: 'Blog', id: 'blog', type: 'route', path: '/blog' },
  ]

  const handleNavigation = (item) => {
    if (item.type === 'route') {
      handleRouteChange('route'); // Pass the type
      navigateTo(item.path);
    } else if (item.type === 'section') {
      scrollToSection(item.id);
    }
  };

  // Add mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on navigation
  const handleMobileNavigation = (item) => {
    if (item.type === 'route') {
      handleRouteChange('route');
    }
    handleNavigation(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 sm:py-4 mx-2 sm:mx-6 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl max-w-[calc(100%-16px)] sm:max-w-[calc(100%-48px)] border border-white/10'
          : 'py-3 sm:py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        scrolled ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-[120px] sm:w-[180px] h-auto">
            <Link to="/" className="w-full">
              <img 
                src={LOGo} 
                alt="Logo" 
                className='w-full h-auto object-contain hover:scale-105 transition-transform duration-300'
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#EAE4D4] hover:bg-white/5"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="text-[#EAE4D4] hover:text-[#F2F2F2] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Right Side Elements */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[200px] px-4 py-2 pl-10 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-[#F2F2F2] placeholder-[#EAE4D4]/50 transition-all"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-[#EAE4D4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Login Button */}
            <button 
              onClick={() => handleNavigation('auth')}
              className="text-[#EAE4D4] hover:text-[#F2F2F2] px-4 py-2 text-sm font-medium transition-colors"
            >
              Login
            </button>

            {/* Let's Talk Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm text-[#F2F2F2] px-6 py-2.5 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMobileNavigation(item)}
                className="block w-full text-left px-4 py-3 text-[#EAE4D4] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            {/* Mobile Search */}
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-[#F2F2F2] placeholder-[#EAE4D4]/50"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-[#EAE4D4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {/* Mobile Action Buttons */}
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => handleMobileNavigation({ type: 'route', path: '/auth' })}
                className="w-full text-center text-[#EAE4D4] px-4 py-2 text-sm font-medium border border-white/10 rounded-lg hover:bg-white/5"
              >
                Login
              </button>
              <button 
                onClick={() => handleMobileNavigation({ type: 'section', id: 'contact' })}
                className="w-full text-center bg-gradient-to-br from-white/20 to-white/5 text-[#F2F2F2] px-4 py-2 rounded-lg text-sm font-medium border border-white/10"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;