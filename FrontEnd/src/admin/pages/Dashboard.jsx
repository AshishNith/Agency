import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const sections = [
  {
    title: 'Projects',
    count: '24',
    icon: '🛠️',
    link: '/admin/projects',
    trend: '+12%',
  },
  {
    title: 'Clients',
    count: '48',
    icon: '🤝',
    link: '/admin/clients',
    trend: '+5%',
  },
  {
    title: 'Testimonials',
    count: '32',
    icon: '💬',
    link: '/admin/testimonials',
    trend: '+8%',
  },
  {
    title: 'Stats',
    count: '12',
    icon: '📈',
    link: '/admin/stats',
    trend: '+15%',
  }
];

const revenueData = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 1398 },
  // ...add more data points
];

const activities = [
  // ...add activity data
];

const Dashboard = () => {
  return (
    <div className="p-8 bg-black min-h-screen">
      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className="group p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden relative"
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{section.icon}</span>
                <span className="text-green-400 text-sm">{section.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-1">{section.count}</h3>
              <p className="text-[#EAE4D4]">{section.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4">Revenue Overview</h3>
          <AreaChart width={500} height={200} data={revenueData}>
            <Area type="monotone" dataKey="value" stroke="#B6B19E" fill="url(#colorGradient)" />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B6B19E" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#B6B19E" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </div>

        {/* Activity Feed */}
        <div className="p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                {/* Activity items */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="p-6 bg-gradient-to-br from-[#1a1a1a] to-black backdrop-blur-sm rounded-2xl border border-white/10">
        {/* Add project timeline component */}
      </div>
    </div>
  );
};

export default Dashboard;
