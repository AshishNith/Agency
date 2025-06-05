import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation
      gsap.fromTo(formRef.current, {
        y: 30,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all" // Clear properties after animation
      });

      // Animate form elements
      gsap.fromTo(formRef.current.querySelectorAll('input, button, label'), {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
      });

      // Tab indicator animation
      gsap.to(tabsRef.current.querySelector('.tab-indicator'), {
        x: isLogin ? 0 : '100%',
        duration: 0.4,
        ease: "power2.inOut"
      });
    });

    return () => ctx.revert(); // Cleanup
  }, [isLogin]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div 
          ref={formRef} 
          className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl"
        >
          {/* Tabs */}
          <div ref={tabsRef} className="relative mb-8">
            <div className="flex">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  isLogin ? 'text-black' : 'text-gray-400'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${
                  !isLogin ? 'text-black' : 'text-gray-400'
                }`}
              >
                Sign Up
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-1/2 bg-black tab-indicator" />
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all"
                  placeholder="John Doe"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:bg-white transition-all"
                placeholder="hello@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="••••••••"
              />
            </div>

            {isLogin ? (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-gray-600 hover:text-black">
                  Forgot password?
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3.5 rounded-lg hover:bg-gray-900 transition-colors font-medium"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                <span className="ml-2">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
