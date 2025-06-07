import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Projects', value: '45', change: '+12%' },
    { label: 'Active Clients', value: '28', change: '+5%' },
    { label: 'Inquiries', value: '182', change: '+18%' },
    { label: 'Revenue', value: '$425K', change: '+22%' },
  ];

  const recentProjects = [
    { name: 'Digital Platform', client: 'TechCorp', status: 'In Progress' },
    { name: 'Brand Redesign', client: 'Artisan Coffee', status: 'Completed' },
    { name: 'E-commerce Site', client: 'Fashion Co', status: 'Review' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border-b border-white/10 px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#F2F2F2]">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gradient-to-br from-white/20 to-white/5 text-[#F2F2F2] rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              New Project
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-sm text-[#EAE4D4] mb-1">{stat.label}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold text-[#F2F2F2]">{stat.value}</p>
                <span className="ml-2 text-sm text-green-400">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-bold text-[#F2F2F2]">Recent Projects</h2>
          </div>
          <div className="divide-y divide-white/10">
            {recentProjects.map((project, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-white/5">
                <div>
                  <h3 className="font-medium text-[#F2F2F2]">{project.name}</h3>
                  <p className="text-sm text-[#EAE4D4]">{project.client}</p>
                </div>
                <span className="px-3 py-1 bg-white/10 text-sm rounded-full text-[#F2F2F2]">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
