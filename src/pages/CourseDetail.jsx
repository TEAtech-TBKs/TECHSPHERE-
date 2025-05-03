import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CourseDetail.module.css';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner'; // Import the spinner component

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockCourses = {
          "1": {
            title: "React for Beginners",
            description: "Learn the fundamentals of React.js and build interactive web apps.",
            instructor: "Esther Akinwale",
            instructorBio: "React developer with 3+ years of experience.",
            topics: ["JSX", "Props & State", "Hooks", "Components", "React Router"],
            reviews: [
              { name: "Jake", rating: 5, review: "Clear and easy to follow!" },
              { name: "Mina", rating: 4, review: "Great starter course." },
            ]
          },
          "2": {
            title: "Advanced JavaScript",
            description: "Master JavaScript concepts and ES6+ features.",
            instructor: "Esther Akinwale",
            instructorBio: "Senior JavaScript engineer and open-source contributor.",
            topics: ["ES6+", "Asynchronous JS", "Closures", "Modules", "OOP in JS"],
            reviews: [
              { name: "Alex", rating: 5, review: "Super advanced and clear!" },
              { name: "Lea", rating: 4, review: "Loved the challenges." }
            ]
          },
          "3": {  // Full-Stack Web Development Course
            title: "Full-Stack Web Development",
            description: "Master both frontend and backend development with this comprehensive course.",
            instructor: "John Doe",
            instructorBio: "Experienced full-stack developer with over 10 years of experience.",
            topics: [
              "HTML & CSS",
              "JavaScript Basics",
              "React.js",
              "Node.js & Express",
              "Databases with MongoDB",
              "APIs (REST & GraphQL)",
              "Deployment & Cloud",
            ],
            reviews: [
              { name: "Anna", rating: 5, review: "This course provided everything I needed to become a full-stack developer!" },
              { name: "Tom", rating: 4, review: "Great course, though I would have liked more content on deployments." }
            ]
          }
        };

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCourseData(mockCourses[courseId]);  // Fetch the correct course based on courseId
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Failed to fetch course data:", err);
      }
    };

    fetchData();
  }, [courseId]);

  if (loading) return <LoadingSpinner />; // Use the LoadingSpinner here
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.courseDetail}>
      <h1>{courseData.title}</h1>
      <p className={styles.description}>{courseData.description}</p>

      <section className={styles.instructor}>
        <h2>Instructor: {courseData.instructor}</h2>
        <p>{courseData.instructorBio}</p>
      </section>

      <section className={styles.topics}>
        <h3>Topics Covered:</h3>
        <ul>
          {courseData.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>

      <section className={styles.reviews}>
        <h3>Student Reviews</h3>
        {courseData.reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <p><strong>{review.name}</strong> - {review.rating} stars</p>
            <p>{review.review}</p>
          </div>
        ))}
      </section>

     <Link to="/signup" className={styles.enrollBtn}>
        Enroll Now!
      </Link>
    </div>
  );
};

export default CourseDetail;
