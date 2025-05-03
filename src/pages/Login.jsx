import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.header}>Login</h2>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input className={styles.inputEmail} type="email" placeholder="Enter your email" required />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className={styles.loginButton}>Login</button>
      </form>

      <p className={styles.signupPrompt}>
        Don’t have an account? <Link to="/signup" className={styles.signupLink}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
