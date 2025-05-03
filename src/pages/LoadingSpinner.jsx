// src/pages/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css'; // Create a CSS module for the spinner

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
