import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your actual API URL

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });

    return response.data; // Return the response data, typically containing the token
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to handle user signup
export const signupUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user`, {
      email,
      password,
      name,
    });

    return response.data; // Return the response data, typically containing the token
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

// Example of how to use the token for authenticated requests
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data; // Return user profile data
  } catch (error) {
    console.error('Profile fetch error:', error);
    throw error;
  }
};
