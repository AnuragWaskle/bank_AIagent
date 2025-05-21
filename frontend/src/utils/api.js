import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (username, password) => api.post('/auth/token', { username, password });
export const getTickets = () => api.get('/tickets');
export const updateTicket = (ticketId, data) => api.put(`/tickets/${ticketId}`, data);
export const getLeads = () => api.get('/leads');
export const createLead = (data) => api.post('/leads', data);
export const generateContent = (data) => api.post('/copywriting', data);
export const analyzeLoan = (formData) => api.post('/legal/analyze', formData);
export const financialAnalysis = (data) => api.post('/finance', data);
export const marketingContent = (data) => api.post('/marketing', data);

export default api;