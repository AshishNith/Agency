import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Digital Platform', client: 'TechCorp', status: 'In Progress', deadline: '2024-02-15' },
    // ...more projects
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Add New Project
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Project</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Client</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Deadline</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map(project => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-4">{project.name}</td>
                <td className="p-4">{project.client}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {project.status}
                  </span>
                </td>
                <td className="p-4">{project.deadline}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">Edit</button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
