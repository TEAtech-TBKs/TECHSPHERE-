import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={styles.navbar}>
    <div className={styles.navContainer}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="TechSphere" className={styles.logoImg} />
        <span className={styles.logoText}>TechSphere</span>
      </Link>
      <div className={`${styles.toggleContainer} ${isOpen ? styles.active: ''}`}>
        <button className={styles.navToggle} onClick={toggleMenu}>
  {isOpen ? '✖' : '☰'}  
</button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <ul>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link className={styles.contactBtn} to="/contact">Contact</Link></li>
          </ul>
      </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
