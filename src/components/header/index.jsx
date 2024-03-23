import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav className="nav-container">
      {userLoggedIn ? (
        <>
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate('/login');
              });
            }}
            className="logout-button"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="login-button" to={'/login'}>
            Login
          </Link>
          <Link className="register-button" to={'/register'}>
            Register New Account
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
