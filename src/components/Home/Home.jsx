import React from "react";
import { assets } from "../../assets/assets";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <motion.div
        className="home-left"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="hello-home">Hello!</p>
        <p className="home-name">
          I 'm <span className="home-name-main">Anjali Oza</span>
        </p>
        <p className="home-prof">Full-Stack Web Developer</p>
        <p className="home-para">
          I'm a MERN stack web and app developer with hands-on experience in
          React, React Native, and Node.js. I build fast, scalable, and
          user-friendly digital solutions for web and mobile platforms.
        </p>
        <div
          className="home-about"
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="home-abt-text">More About Me</p>
          <img src={assets.arrow} className="home-abt-img" />
        </div>
      </motion.div>

      <motion.div
        className="home-right"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="home-quote">
          <img src={assets.programming} />
          <p>Code is like humor. When you have to explain it, it's bad.</p>
        </div>
        <div className="home-quote">
          <p>
            Clean code always looks like it was written by someone who cares.
          </p>
          <img src={assets.terminal} />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
