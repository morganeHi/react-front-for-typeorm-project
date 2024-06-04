import React from 'react';
import { useAuth } from '../context/AuthContext';
import GuessGame from '../components/GuessGame';
import WelcomeMessage from '../components/Welcome';

const Home = () => {
  const {isAuthenticated} = useAuth();

  return (
    <>
    <h1>Home Page</h1>
    {isAuthenticated ? <GuessGame /> : <WelcomeMessage />}
    </>
  );
};

export default Home;