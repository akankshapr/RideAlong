import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';

const AfterLogin = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token
    localStorage.removeItem('token');
    // Redirect the user back to the login page
    navigate('/login');
  };

  return (
    <>
      <h1>Welcome {email}! to Ride Along</h1>
      <p>You are now logged in and can access all the features of the app.</p>
      <button id="logoutbtn" onClick={handleLogout}>Logout</button>
    </>
  );
};

export default AfterLogin;
