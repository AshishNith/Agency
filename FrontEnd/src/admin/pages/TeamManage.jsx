import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFormState } from '../../hooks/useFormState';

const TeamManage = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Atharv Golait",
      role: "finance and marketing manager",
      status: "active",
      avatar: "https://media.licdn.com/dms/image/v2/D4D35AQEP8_8EaQfmyA/profile-framedphoto-shrink_400_400/B4DZdBXZ5YHkAc-/0/1749148344291?e=1749906000&v=beta&t=jeBL3lOQYPVoT9mpyQTyQvAMY1y52qfCnXJWOx8__2c",
    //   email: "atharv@agency.com",
      projects: 12,
      department: "Finance & Marketing"
    },
    {
      id: 2,
      name: "Ashish Ranjan",
      role: "Tech & Scale Lead",
      status: "active",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw",
      email: "ashish@agency.com",
      projects: 12,
      department: "Tech & Development"
    }
  ]);

  const [viewMode, setViewMode] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const memberRefs = useRef([]);
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  const initialFormState = {
    name: '',
    email: '',
    role: '',
    department: '',
    avatar: ''
  };

  const {
    formData,
    editMode,
    handleChange,
    handleEdit,
    resetForm
  } = useFormState(initialFormState);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(memberRefs.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setTeam(prev => prev.map(item => 
        item.id === formData.id ? formData : item
      ));
    } else {
      setTeam(prev => [...prev, { ...formData, id: Date.now(), status: 'active' }]);
    }
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Team Members
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Add Member
            </button>
          </div>

          {/* Controls */}
          <div className="mt-8 flex gap-4 items-center">
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white/10' : ''
                }`}
              >
                <i className="ri-grid-fill"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white/10' : ''
                }`}
              >
                <i className="ri-list-check"></i>
              </button>
            </div>
            <input
              type="search"
              placeholder="Search team members..."
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        {/* Team Grid */}
        <div 
          ref={containerRef}
          className={`max-w-7xl mx-auto ${
            viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-4'
          }`}
        >
          {team.map((member, index) => (
            <div
              key={member.id}
              ref={el => memberRefs.current[index] = el}
              className={`relative overflow-hidden ${
                viewMode === 'grid' 
                  ? 'bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-white/20'
                  : 'bg-neutral-900/50 p-4 rounded-xl border border-white/10 flex items-center'
              }`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
              
              {/* Content */}
              <div className={`relative z-10 ${
                viewMode === 'grid' ? 'text-center' : 'flex items-center gap-6 flex-1'
              }`}>
                {/* Avatar */}
                <div className={`${viewMode === 'grid' ? 'mb-6' : 'flex-shrink-0'}`}>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-md" />
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="relative w-20 h-20 rounded-full object-cover ring-2 ring-white/10"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className={`flex-1 ${viewMode === 'grid' ? 'text-center' : 'text-left'}`}>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-gray-400">{member.email}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'active' 
                        ? 'bg-green-500/10 text-green-400 ring-1 ring-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20'
                    }`}>
                      {member.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 ring-1 ring-white/10">
                        {member.role}
                      </span>
                      <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 ring-1 ring-white/10">
                        {member.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <i className="ri-folder-line"></i> {member.projects} Projects
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className={`${viewMode === 'grid' ? 'mt-4 text-center' : 'flex-shrink-0'}`}>
                  <div className="flex gap-2 justify-center">
                    <button 
                      onClick={() => {
                        handleEdit(member);
                        setIsModalOpen(true);
                      }}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-400">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Member Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-neutral-900/90 backdrop-blur-xl rounded-xl p-6 w-full max-w-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6">{editMode ? 'Edit' : 'Add'} Team Member</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Role</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option>Creative Director</option>
                      <option>Designer</option>
                      <option>Developer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <option>Design</option>
                      <option>Development</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Avatar</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                    <input type="file" className="hidden" accept="image/*" />
                    <button type="button" className="text-sm text-gray-400">
                      Click to upload or drag and drop
                    </button>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Save Member
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamManage;