import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "contact"];
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-main">
      <div className="nav-links">
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          Work
        </a>
        <a
          href="#about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </div>
      <div className="nav-right">
        <button onClick={handleDownload} className="cv-download">
          Resume
        </button>
        <img className="profile-img" src={assets.profile} alt="Profile" />
      </div>
      <img
        className="nav-menu"
        src={assets.menu}
        onClick={toggleSidebar}
        alt="Menu"
      />

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-links">
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            Work
          </a>
          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </a>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
