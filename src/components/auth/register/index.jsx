import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

import './register.css';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { userLoggedIn } = useAuth();

  const onSubmit = async e => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        navigate('/login'); // Redirect to login page after successful registration
      } catch (error) {
        setIsRegistering(false);
        setErrorMessage('Failed to create an account. Please try again.');
        console.error(error); // Optionally log the error for debugging
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}
      <div>
        <main className="main-container">
          <div className="register-box">
            <h3 className="register-header-message">Create a New Account</h3>

            <form onSubmit={onSubmit}>
              <div className="user-box">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                <label>Email</label>
              </div>

              <div className="user-box">
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <label>Password</label>
              </div>

              <div className="user-box">
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label>Confirm Password</label>
              </div>

              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}

              <button
                className="submit-button"
                type="submit"
                disabled={isRegistering}
              >
                {isRegistering ? 'Signing Up...' : 'Sign Up'}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="footer-message">
                Already have an account? {'   '}
                <Link to={'/login'} className="login-link">
                  Continue
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Register;
