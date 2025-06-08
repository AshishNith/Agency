import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFormState } from '../../hooks/useFormState';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

const ProjectHandle = () => {
  const [projects, setProjects] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const projectRefs = useRef([]);
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  const initialFormState = {
    title: '',
    category: '',
    agency: '',
    image: '',
    status: 'active'
  };

  const { formData, editMode, handleChange, handleEdit, resetForm } = useFormState(initialFormState);

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await axios.put(`/api/projects/${formData.id}`, formData);
        setProjects(prev => prev.map(item =>
          item.id === formData.id ? response.data : item
        ));
      } else {
        const response = await axios.post('/api/projects', formData);
        setProjects(prev => [...prev, response.data]);
      }
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setProjects(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(projectRefs.current, {
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

  // Improved view mode change animation
  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            gsap.to(containerRef.current, {
              opacity: 1,
              duration: 0.3,
              clearProps: "opacity"
            });
          }
        });
      });

      return () => ctx.revert();
    }
  }, [viewMode]);

  // Enhanced modal animation
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const ctx = gsap.context(() => {
        gsap.set(modalRef.current, { 
          opacity: 0, 
          y: -20,
          scale: 0.95
        });
        
        gsap.to(modalRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          clearProps: "all"
        });
      });

      return () => ctx.revert();
    }
  }, [isModalOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Project Management
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Add Project
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
              placeholder="Search projects..."
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        {/* Project Grid with fixed styling */}
        <div 
          ref={containerRef}
          className={`max-w-7xl mx-auto ${
            viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-4'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`bg-neutral-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all ${
                viewMode === 'grid' ? '' : 'flex items-center'
              }`}
            >
              <div className={`relative ${viewMode === 'grid' ? 'aspect-video' : 'w-48'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent ${
                  viewMode === 'grid' ? '' : 'hidden'
                }`} />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.agency}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button 
                    onClick={() => {
                      handleEdit(project);
                      setIsModalOpen(true);
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <i className="ri-edit-line"></i>
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-400"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with improved backdrop */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50">
            <div 
              ref={modalRef} 
              className="bg-neutral-900/90 backdrop-blur-xl rounded-xl p-6 w-full max-w-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">{editMode ? 'Edit' : 'Add New'} Project</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="">Select Category</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Development">Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Agency</label>
                  <input
                    type="text"
                    name="agency"
                    value={formData.agency}
                    onChange={handleChange}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                    <input type="file" className="hidden" />
                    <button type="button" className="text-sm text-gray-400">
                      Click to upload or drag and drop
                    </button>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setIsModalOpen(false);
                    }}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {editMode ? 'Update' : 'Save'} Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// This component handles the project management functionality, including creating, editing, and deleting projects.

export default ProjectHandle;
