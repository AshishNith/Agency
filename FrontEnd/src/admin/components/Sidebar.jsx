import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: '📊',
    submenu: []
  },
  {
    title: 'Projects',
    path: '/admin/projects',
    icon: '💼',
    submenu: [
      { title: 'All Projects', path: '/admin/projects' },
      { title: 'Add New', path: '/admin/projects/new' },
      { title: 'Categories', path: '/admin/projects/categories' }
    ]
  },
  {
    title: 'Clients',
    path: '/admin/clients',
    icon: '👥',
    submenu: []
  },
  {
    title: 'Team',
    path: '/admin/team',
    icon: '🤝',
    submenu: []
  },
  {
    title: 'Content',
    path: '/admin/content',
    icon: '📝',
    submenu: [
      { title: 'Blog Posts', path: '/admin/content/blog' },
      { title: 'Testimonials', path: '/admin/content/testimonials' },
      { title: 'Media Library', path: '/admin/content/media' }
    ]
  },
  {
    title: 'Analytics',
    path: '/admin/analytics',
    icon: '📈',
    submenu: []
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: '⚙️',
    submenu: []
  }
];

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] border-r border-white/10">
      // ...implementation
    </aside>
  );
};

export default Sidebar;
