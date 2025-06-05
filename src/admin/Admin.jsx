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
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200 fixed">
          <div className="p-4">
            <Link to="/" className="text-2xl font-bold">AGENCY.</Link>
          </div>
          <nav className="mt-8">
            <div className="px-4 space-y-1">
              {['Dashboard', 'Projects', 'Clients', 'Team', 'Messages', 'Settings'].map((item) => (
                <Link
                  key={item}
                  to={`/admin/${item.toLowerCase()}`}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
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
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className="ml-2 text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">Recent Projects</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentProjects.map((project, index) => (
                  <div key={index} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
