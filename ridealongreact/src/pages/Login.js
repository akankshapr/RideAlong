import { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/riders/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        // Login successful, redirect to afterlogin page
        navigate(`/afterlogin?email=${email}`);      } else if (response.status === 401) {
        // Invalid email or password, display error message
        alert('Invalid email or password');
      } else {
        // Other error, display error message
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('There was an error logging in. Please try again later.');
    }
  };
  
  

  return (<div>
    <form onSubmit={handleSubmit} className="login-form">
      <h1 className="login-title">Login</h1>
      <label className="login-label">
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="login-input" />
      </label><br/>
      <label className="login-label">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
      </label><br/>
      <button type="submit" className="login-button">Submit</button>
    </form>
    <div class="form-switch">
      <span>Don't have an account?</span>
      <Link to="/signup">Sign up</Link>
    </div>
  </div>
  );
};

export default Login;
