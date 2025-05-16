import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <p className="main-title">PROJECTS</p>
      <div className="project-container" id="projects">
        {/* First Project Card */}
        <motion.div
          className="projects-card"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="project-title">RareFashion Ecommercial Website</p>
          <img className="project-img" src={assets.website} />
          <p className="project-description">
            Made an fullstack ecommercial website using MERN stack technology
            which is fully functional with admin panel and responsive and hosted
            using vercel. Several essential libraries were utilized to support
            modern web development practices and ensure sustainable development
            with React and Node.js. (eg. Express, Axios, Mongoose,
            etc).Implemented complete modern functionalities, including payment
            gateway integration, OTP authentication, JWT-based user
            authentication, and several additional advanced features to enhance
            security and user experience.
          </p>
          <div className="project-links">
            <img className="project-link-img" src={assets.link} />
            <a href="http://rarefashion.vercel.app">rarefashion.vercel.app</a>
          </div>
          <div className="project-links">
            <img className="project-link-img" src={assets.link} />
            <a href="http://rarefashion-admin.vercel.app">
              rarefashion-admin.vercel.app
            </a>
          </div>
          <div className="project-links">
            <img className="project-link-img" src={assets.github} />
            <a href="http://github.com/vardhan781/Rare-Fashion">
              github.com/OzAnjali/Rare-Fashion
            </a>
          </div>
        </motion.div>

        {/* Second Project Card */}
        <motion.div
          className="projects-card"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="project-title">RareFashion Application</p>
          <img className="project-img" src={assets.app} />
          <p className="project-description">
            Built a cross-platform mobile application using React Native with a
            smooth and responsive UI. Integrated secure OTP authentication and
            JWT for user login and session management.Implemented payment
            gateway functionality and additional features for real-world
            usability.
          </p>
          <div className="project-links">
            <img className="project-link-img" src={assets.github} />
            <a href="https://github.com/vardhan781/Rare-Fashion-Application">
              github.com/OzAnjali/RareFashion-Application
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
