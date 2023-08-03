import React, { useState } from 'react';
import axios from 'axios';
import './styles/register.css';

const API_BASE_URL = 'https://captsoneprojectretailsalesappbackend.onrender.com/api'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/user/register`, {
        username,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      setRegistrationSuccess(true);
      // Redirect to the login page after successful registration
      window.location.replace('/login');
    } catch (error) {
      console.error('Error registering user:', error.response.data.error);
    }
  };

  return (
    <div id="register-form"> 
    <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>REGISTER</h2>
    <form onSubmit={handleRegister}>
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
        Email:
        <input
          type="email"
          name="email"
          value={email}
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
      <button type="submit">Register</button>
    </form>
  </div>
  );
};

export default Register;
