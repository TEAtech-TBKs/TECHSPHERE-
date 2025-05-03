import styles from "./Courses.module.css";
import { Link } from "react-router-dom";

const coursesData = [
  { id: 1, title: "React for Beginners", description: "Learn the fundamentals of React.js and build interactive web apps." },
  { id: 2, title: "Advanced JavaScript", description: "Master JavaScript with ES6+, async programming, and best practices." },
  { id: 3, title: "Full-Stack Web Development", description: "Become a full-stack developer by learning frontend and backend technologies." },
];

function Courses() {
  return (
    <div className={styles.courses}>
      {/* Hero Section */}
      <div className={styles.mask}>
      <section className={styles.hero}>
       
          <h1>Our Courses</h1>
          <p>Explore our comprehensive courses and start your journey to becoming a pro developer.</p>
      </section>
        </div>

      {/* Courses List */}
      <section className={styles.courseList}>
      
        {coursesData.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className={styles.viewButton}>View Details</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Courses;
