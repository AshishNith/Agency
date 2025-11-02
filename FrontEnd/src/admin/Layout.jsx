import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import LOGo from "/Assets/LOGO.png"


const AdminLayout = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: 'ri-dashboard-line' },
    { label: 'Projects', path: '/admin/projects', icon: 'ri-folder-line' },
    { label: 'Clients', path: '/admin/clients', icon: 'ri-user-3-line' },
    { label: 'Team', path: '/admin/team', icon: 'ri-team-line' }, // Fixed path
    { label: 'Messages', path: '/admin/messages', icon: 'ri-message-line' },
    { label: 'Settings', path: '/admin/settings', icon: 'ri-settings-line' }
  ];

  return (
    <div className="min-h-screen bg-black/95">
      <div className="flex relative">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 fixed z-50">
          <div className="p-6 h-28 overflow-hidden border-b border-white/10">
            <Link to="/" className="text-2xl font-bold text-[#F2F2F2]  ">
            <img 
                            src={LOGo} 
                            alt="Logo" 
                            className='w-full h-auto object-contain hover:scale-105 transition-transform -translate-y-16 duration-300'
                          />
            </Link>
          </div>
          <nav className="p-4 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all
                  ${location.pathname === item.path 
                    ? 'bg-white/10 text-[#F2F2F2]' 
                    : 'text-[#EAE4D4] hover:bg-white/5'}`}
              >
                <i className={`${item.icon} mr-3 text-lg`}></i>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 min-h-screen bg-transparent relative z-10">
          <div className="fixed inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 pointer-events-none" />
          <div className="relative z-20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
