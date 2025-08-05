import React from 'react';
import { mainStyles, titleStyles, descriptionStyles } from '../landingPageStyles';

const LandingPage: React.FC = () => {
  return (
    <main className={mainStyles}>
      <h1 className={titleStyles}>Welcome to FullstackApp</h1>
      <p className={descriptionStyles}>This is the landing page of your React + Vite + Zustand app.</p>
    </main>
  );
};

export default LandingPage;
