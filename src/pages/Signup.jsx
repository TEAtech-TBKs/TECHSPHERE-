import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;
  
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password,confirmPassword}),
      });
  
      const data = await response.json();
  console.debug(handleSubmit);
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      setError('Make sure to fill all info correctly');
      setSuccess('Account created successfully!');
  
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setSuccess('');
      setError(err.message);
    }
  };
console.log(handleSubmit)  
console.log(handleChange) 

  return (
    <div className={styles.signup}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.inputName} type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <button type="submit">Sign Up</button>
        <p className={styles.loginPrompt}>
          Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
