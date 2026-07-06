import React, { useState } from "react";
import { Layout, Server, Sparkles, ExternalLink, X, Eye } from "lucide-react";
import { Github } from "./SocialIcons";
import "./Projects.css";
import ushan from "../assets/ushan.webp";
import vw from "../assets/vw.webp";
import media from "../assets/logo.webp";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "Full Stack", "Frontend"];

  const projectsData = [
    {
      id: 1,
      title: "Website design for Ushan Mobile",
      image: ushan,
      shortDesc:
        "A fully responsive business website for Ushan Mobile, showcasing company services, completed projects, and contact information with a modern and professional design.",

      longDesc:
        "Ushan Mobile is a business portfolio website designed to strengthen the company’s online presence. The website highlights the company’s services, showcases completed projects, and provides easy access to contact information for potential customers.",
      category: "Frontend",
      tags: ["React JS", "Vite", "Web3 forms"],
      github: "https://github.com/sathsarawickramasinghe/ushan-mobile",
      live: "https://ushanmobile.netlify.app/",
      icon: <Layout size={32} />,
      bgGradient: "linear-gradient(135deg, #1f1200 0%, #3a2500 100%)",
      features: [
        "Business website",
"Showcases company projects, services, and contact information",
"Fully responsive and deployed on Netlify"
      ],
      client: "Ushan Mobile",
      duration: "4 Weeks",
    },
    {
      id: 2,
      title: "Website design for VW constructions",
      image: vw,
      shortDesc: 'A modern and responsive construction company website showcasing services, completed projects, and company expertise.',

longDesc: 'VW Constructions is a professional business website developed to establish a strong online presence for the company. The website presents construction services, featured projects, company information, and contact details in a clean and user-friendly layout. Designed with a fully responsive interface, it ensures an optimal viewing experience across all devices.',
      category: "Frontend",
      tags: ["React JS","Vite", "Web3 forms"],
      github: "https://github.com/sathsarawickramasinghe/vwconstruction",
      live: "https://vwconstructions.netlify.app/",
      icon: <Server size={32} />,
      bgGradient: "linear-gradient(135deg, #0d0f1a 0%, #171b30 100%)",
      features: [
        "Business website",
"Showcases company projects, services, and contact information",
"Fully responsive and deployed on Netlify",
      ],
      client: "VW Constructions",
      duration: "6 Weeks",
    },
    {
      id: 3,
      title: "Learning Management System (Final Year Project)",
      image: media,
      shortDesc: 'A full-featured MERN Stack Learning Management System for Media By Harsha, featuring student authentication, teacher management, and course administration.',

longDesc: 'Media By Harsha LMS is a comprehensive Learning Management System developed as a final-year project using the MERN Stack (MongoDB, Express.js, React, and Node.js). The platform provides secure student authentication, efficient teacher management, and a robust course management system that enables seamless online learning. Students can access courses, track their learning progress, and interact with educational content, while administrators and teachers can manage users and course materials through dedicated dashboards.',
      category: "Full Stack",
      tags: ["React JS", "Node JS", "Node JS", "CSS" ,"Mongo DB"],
      github: "https://github.com",
      live: "https://example.com",
      icon: <Sparkles size={32} />,
      bgGradient: "linear-gradient(135deg, #170d1a 0%, #291730 100%)",
      features: [
        
"Student Authentication System",
"Teacher Management Module",
"Course Management System",
"Responsive UI Design",
      ],
      client: "Harsha Alupaththala",
      duration: "8 Weeks",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Selected Work</h2>
          <p>
            Explore some of my creative builds, web designs, and backend system
            systems.
          </p>
          <div className="section-accent-line"></div>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`tab-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div
  className="project-banner"
  style={{
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc text-muted">{project.shortDesc}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-tag">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div
                  className="project-links"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span
                    className="project-link"
                    style={{
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      gap: "0.25rem",
                      color: "var(--primary)",
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={16} /> Details
                  </span>
                  <div
                    style={{
                      marginLeft: "auto",
                      display: "flex",
                      gap: "0.75rem",
                    }}
                  >
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content glass-panel project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div
              className="modal-banner"
              style={{
                backgroundImage: `url(${selectedProject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close details modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <p
                style={{
                  color: "var(--light)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  marginTop: "0.25rem",
                }}
              >
                {selectedProject.category} Project
              </p>

              <div className="modal-grid">
                {/* Left: Description & Features */}
                <div>
                  <h3 className="modal-section-title">Overview</h3>
                  <p
                    className="text-muted"
                    style={{ fontSize: "0.98rem", marginBottom: "1.5rem" }}
                  >
                    {selectedProject.longDesc}
                  </p>

                  <h3 className="modal-section-title">Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Right: Technical Metadata & CTAs */}
                <div className="modal-info-panel">
                  <div
                    className="glass-card"
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div className="modal-info-item">
                      <span className="modal-info-label">Client</span>
                      <span className="modal-info-value">
                        {selectedProject.client}
                      </span>
                    </div>
                    <div className="modal-info-item">
                      <span className="modal-info-label">Timeline</span>
                      <span className="modal-info-value">
                        {selectedProject.duration}
                      </span>
                    </div>
                    <div className="modal-info-item">
                      <span className="modal-info-label">Technologies</span>
                      <div
                        className="project-tags"
                        style={{ marginTop: "0.25rem", marginBottom: 0 }}
                      >
                        {selectedProject.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: "0.65rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      <Github size={16} /> Codebase
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: "0.65rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
