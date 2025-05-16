import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <p className="main-title">ABOUT</p>
      <div className="about-container" id="about">
        <p className="about-title-name">
          I Am <span className="about-title-name-high">Anjali Oza</span> , A
          Fullstack Web Developer/Application Developer
        </p>
        <p className="about-description">
          I'm a versatile developer specializing in both website and application
          development. With a strong grasp of front-end and back-end
          technologies, I build responsive, user-friendly digital solutions that
          are both functional and visually engaging. Whether it's a sleek
          website or a full-featured app, I focus on clean code, performance,
          and seamless user experience.
        </p>
        <div className="about-cards">
          {/* First About Card */}
          <motion.div
            className="about-card"
            initial={{ x: -150, opacity: 0, rotate: -15 }}
            whileInView={{
              x: 0,
              opacity: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            viewport={{ once: true }}
          >
            <div className="main-title-abt">
              <img className="abt-main-img" src={assets.bullet_arrow} alt="" />
              <p>Education</p>
            </div>
            <div className="abt-edu-details">
              <p>Bachelor of Technology (B.Tech) in Information Technology</p>
              <p>
                Aditya Silver Oak Institute of Technology, Silver Oak University
              </p>
              <p>August 2021 - May 2025</p>
              <p>
                Focused on cutting-edge technologies in software development,
                web and mobile applications, and IT infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Second About Card */}
          <motion.div
            className="about-card"
            initial={{ scale: 0, rotate: 180, opacity: 0, x: 150 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 160,
                damping: 30,
                delay: 0.1,
              },
            }}
            viewport={{ once: true }}
          >
            <div className="main-title-abt">
              <img className="abt-main-img" src={assets.bullet_arrow} alt="" />
              <p>What I Work With</p>
            </div>
            <div className="work-with-img">
              <img width={58} src={assets.html} alt="" />
              <img width={46} src={assets.css} alt="" />
              <img width={45} src={assets.js} alt="" />
              <img width={56} src={assets.mongodb} alt="" />
              <img width={51} src={assets.node} alt="" />
              <img width={49} src={assets.express} alt="" />
              <img width={53} src={assets.tailwind} alt="" />
              <img width={48} src={assets.react} alt="" />
              <img width={50} src={assets.git} alt="" />
            </div>
          </motion.div>
        </div>
        <div className="other-projects-container">
          <p>
            With great code comes great repositories. Swing by my GitHub and see
            what else I've been cooking up!
          </p>
          <a href="https://github.com/OzAnjali?tab=repositories">
            More Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
