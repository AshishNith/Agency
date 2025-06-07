import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const ClientHandle = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Spotify",
      industry: "Technology",
      status: "active",
      logo: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg",
      location: "Stockholm, Sweden",
      projectCount: 3
    }
  ]);

  const [viewMode, setViewMode] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const clientRefs = useRef([]);
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(clientRefs.current, {
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

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Client Management
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Add Client
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
              placeholder="Search clients..."
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        {/* Client Grid */}
        <div 
          ref={containerRef}
          className={`max-w-7xl mx-auto ${
            viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-4'
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={client.id}
              ref={el => clientRefs.current[index] = el}
              className={`bg-white/5 backdrop-blur-[12px] rounded-lg overflow-hidden border border-white/10 ${
                viewMode === 'grid' ? 'p-6' : 'p-4 flex items-center'
              }`}
            >
              <div className={`${viewMode === 'grid' ? 'text-center' : 'flex items-center gap-6 flex-1'}`}>
                <div className={`${viewMode === 'grid' ? 'mb-4' : 'w-16'}`}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-white/10"
                  />
                </div>
                <div className={`${viewMode === 'grid' ? '' : 'flex-1'}`}>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      client.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{client.industry}</p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> {client.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-folder-line"></i> {client.projectCount} Projects
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <i className="ri-edit-line"></i>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Client Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-neutral-900/90 backdrop-blur-xl rounded-xl p-6 w-full max-w-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Add New Client</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Client Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Logo</label>
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
                    Save Client
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

export default ClientHandle;
