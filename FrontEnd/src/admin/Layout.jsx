import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: 'grid' },
    { label: 'Projects', path: '/admin/projects', icon: 'folder' },
    { label: 'Clients', path: '/admin/clients', icon: 'users' },
    { label: 'Team', path: '/admin/team', icon: 'users-alt' },
    { label: 'Messages', path: '/admin/messages', icon: 'message' },
    { label: 'Settings', path: '/admin/settings', icon: 'cog' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 fixed">
          <div className="p-6 border-b border-gray-200">
            <Link to="/" className="text-2xl font-bold">AGENCY.</Link>
          </div>
          <nav className="p-4 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${location.pathname === item.path 
                    ? 'bg-black text-white' 
                    : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
