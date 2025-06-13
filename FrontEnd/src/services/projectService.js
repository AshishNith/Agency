import api from './axios';

const handleError = (error) => {
  console.error('API Error:', error.response?.data || error.message);
  throw error;
};

export const projectService = {
  getAll: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (projectData) => {
    try {
      console.log('Sending project data:', projectData);
      const response = await api.post('/projects', projectData);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}`, projectData);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
};
