import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import image from "../Images/image09.jpg";
import React from "react";

function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to TechSphere</h1>
          <p>Master Frontend Development with Hands-on Learning</p>
          <Link to="/courses" className={styles.ctaButton}>Explore Courses</Link>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>Why TechSphere?</h2>
        <p>
          TechSphere is your gateway to becoming a skilled frontend developer.
          Learn with real-world projects, expert guidance, and a community of learners.
        </p>
      </section>

      {/* Featured Courses */}
      <section className={styles.courses}>
        <h2>Featured Courses</h2>
        <div className={styles.courseList}>
          <div className={styles.courseCard}>
            <h3>React for Beginners</h3>
            <p>Build interactive web apps using React.js.</p>
            <Link to="/courses">Learn More</Link>
          </div>
          <div className={styles.courseCard}>
            <h3>Mastering JavaScript</h3>
            <p>Deep dive into JavaScript fundamentals.</p>
            <Link to="/courses">Learn More</Link>
          </div>
          <div className={styles.courseCard}>
          <h3>Full-Stack Web Development</h3>
          <p>Master both frontend and backend development. .</p>
          <Link to="/courses">Learn More</Link>
        </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.join}>
        <div className={styles.joinCont}>
          <h2>Join TechSphere Today</h2>
          <p>Start your journey to becoming a frontend pro!</p>
          <Link to="/signup" className={styles.ctaButton}>Get Started</Link>
        </div>
        <img className={styles.img} src={image} alt="techsphere"/>
      </section>
    </div>
  );
}

export default Home;
