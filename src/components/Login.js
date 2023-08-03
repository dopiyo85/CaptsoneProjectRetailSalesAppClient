import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from './UserContext'; // Import the UserContext
import './styles/login.css';

const API_BASE_URL = 'https://captsoneprojectretailsalesappbackend.onrender.com/api'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, user } = useUserContext(); // Get the user data from the context

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user) {
      // If the user is already logged in, show an alert and redirect to home page
      window.alert('You are already logged in!');
      navigate('/');
      return;
    }
  
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, {
        username,
        password,
      });
  
      if (response.data.message === 'Login successful') {
        // Set the user data in the context upon successful login
        sessionStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data in sessionStorage
        
        // Show an alert confirming successful login
        window.alert('Login successful!');
        
        // Redirect to the home page after successful login
        navigate('/');
      } else {
        // Show an alert for the specific error message
        window.alert(response.data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Show a generic error alert if there was an issue with the request
      window.alert('Either wrong username or password. Please try again later.');
    }
  };
  
  return (
    <div id="login-form-container">
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
