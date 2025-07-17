import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { Eye, EyeOff } from 'lucide-react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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
  const [showPassword, setShowPassword] = useState(false);


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
        navigate('/calendlymeet');
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/calendlymeet');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-in success:", result.user);
      navigate("/calendlymeet"); // or your protected route
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      toast.error("Google Sign-In Failed");
    }
  };
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div ref={formRef} className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
          <div ref={tabsRef} className="relative mb-8">
            <div className="flex">
              <button onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${isLogin ? 'text-white' : 'text-gray-500'}`}>
                Sign In
              </button>
              <button onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${!isLogin ? 'text-white' : 'text-gray-500'}`}>
                Sign Up
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-1/2 bg-white tab-indicator" />
          </div>

          {error && <div className="text-red-400 text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-black text-white border border-white/10 rounded-lg placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black text-white border border-white/10 rounded-lg placeholder:text-gray-500"
                placeholder="hello@example.com"
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-gray-300">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black text-white border border-white/10 rounded-lg placeholder:text-gray-500 pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black text-white border border-white/10 rounded-lg placeholder:text-gray-500"
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm text-[#F2F2F2] px-6 py-2.5 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="h-px bg-white/10 w-full"></div>
              <span className="mx-4 text-gray-400">OR</span>
              <div className="h-px bg-white/10 w-full"></div>
            </div>

            {/* Google Sign-In Button */}
            <div className="w-full">
              <button
                onClick={handleGoogleSignIn}
                className="w-full bg-gradient-to-br flex items-center justify-center gap-5 from-white/20 to-white/5 backdrop-blur-sm text-[#F2F2F2] px-6 py-2.5 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
              >
                <i class="ri-google-fill text-lg"></i>
                Continue with Google
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
