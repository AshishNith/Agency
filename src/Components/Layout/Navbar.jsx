import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setScrolled(true)
        gsap.to('.navbar', {
          y: 0,
          duration: 0.5,
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.9)',
          ease: 'power3.out',
        })
      } else {
        setScrolled(false)
        gsap.to('.navbar', {
          y: 0,
          duration: 0.5,
          boxShadow: 'none',
          backdropFilter: 'blur(0px)',
          background: 'white',
          ease: 'power3.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 mx-6 mt-4 rounded-2xl max-w-[calc(100%-48px)]'
          : 'py-0'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled
            ? 'backdrop-blur-lg bg-white/80'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              AGENCY.
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
            >
              Work
            </Link>
            <Link
              to="/process"
              className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
            >
              Process
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[200px] px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
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
            <button className="text-gray-700 hover:text-black px-4 py-2 text-sm font-medium">
              Login
            </button>

            {/* Let's Talk Button */}
            <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar