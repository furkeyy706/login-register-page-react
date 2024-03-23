import React from 'react';
import { useAuth } from '../../contexts/authContext';

import './home.css';

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="login-message">
      Hello{' '}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in.
    </div>
  );
};

export default Home;
