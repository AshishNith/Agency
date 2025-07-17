import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase'; // adjust path as needed

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef(null);
  const tabsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all"
      });
      gsap.fromTo(formRef.current.querySelectorAll('input, button, label'), {
        y: 20, opacity: 0
      }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3
      });
      gsap.to(tabsRef.current.querySelector('.tab-indicator'), {
        x: isLogin ? 0 : '100%', duration: 0.4, ease: "power2.inOut"
      });
    });

    return () => ctx.revert();
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/calendlymeet'); // redirect after login
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/calendlymeet'); // redirect after signup
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div ref={formRef} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
          <div ref={tabsRef} className="relative mb-8">
            <div className="flex">
              <button onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${isLogin ? 'text-black' : 'text-gray-400'}`}>
                Sign In
              </button>
              <button onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 text-sm font-medium transition-colors ${!isLogin ? 'text-black' : 'text-gray-400'}`}>
                Sign Up
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-1/2 bg-black tab-indicator" />
          </div>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                placeholder="hello@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
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
        </div>
      </div>
    </div>
  );
};

export default Auth;
