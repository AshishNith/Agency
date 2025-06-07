import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-[#F2F2F2] mb-6 text-center">Admin Panel</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-[#EAE4D4]">Email</label>
              <input
                type="email"
                className="mt-1 w-full p-3 bg-white/5 border border-white/10 rounded-lg text-[#F2F2F2] focus:outline-none focus:border-white/20"
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#EAE4D4]">Password</label>
              <input
                type="password"
                className="mt-1 w-full p-3 bg-white/5 border border-white/10 rounded-lg text-[#F2F2F2] focus:outline-none focus:border-white/20"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-white/20 to-white/5 text-[#F2F2F2] p-3 rounded-lg hover:from-white/30 hover:to-white/10 transition-all"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
