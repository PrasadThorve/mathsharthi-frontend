import axios from 'axios';

const API_BASE_URL = process.env.URL || 'http://127.0.0.1:5000/api';
const AUTH_URL = 'http://127.0.0.1:5000';

// Get JWT token from local storage or cookies
const getToken = () => localStorage.getItem('token') || Cookies.get('token');

// Generic function to set up headers with JWT token
const getAuthHeaders = () => {
  const token = getToken();
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};


//chat api 
export const sendMessageToApi = async (messages) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, { messages }, { headers: getAuthHeaders() });
  return response.data;
};


export const uploadFileToApi = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${API_BASE_URL}/upload`, formData, { headers: getAuthHeaders() });
  return response.data;
};


export const signupUser = async (userData) => {
  try {
    console.log(userData);
    const headers = {
      'Content-Type': 'application/json',
     };

    const response = await axios.post(`${AUTH_URL}/signup`, userData, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      throw new Error(error.response.data.error || 'Signup failed');
    } else {
      throw new Error('Network error');
    }
  }
};



// Login Service
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('Network error');
    }
  }
};