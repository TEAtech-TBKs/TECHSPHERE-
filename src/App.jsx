import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail'; 
import Login from "./pages/Login" ;
import Dashboard from "./pages/Dashboard"
import Signup from './pages/Signup';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; // Custom global CSS

function App() {
  return (
    <Router> 
    <ScrollToTop /> {/* use it here */}
      <div className="app-container"> {/* Custom CSS styling */}
        <Navbar />
        <main className="main-content"> {/* Custom CSS styling */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
             <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

