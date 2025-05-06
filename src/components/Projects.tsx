import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Country Information Application',
      description: 'A MERN stack web app that fetches real-time country details via an API, allowing users to save favorites with JWT-based authentication. Built a responsive UI using Tailwind CSS and integrated MongoDB for data storage.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/Anjaliii26/NationNexus-Country-Data-',
      live: '#'
    },
    {
      title: 'User Location Tracker (In Progress)',
      description: 'An app to add users and their locations on a map using React, Leaflet, and backend integration. Currently under development.',
      technologies: ['React.js', 'Leaflet', 'Node.js', 'MongoDB'],
      github: '', // No link
      live: '' // No link
    },
    {
      title: 'Payment Gateway Simulator',
      description: 'Designed a test case for payment gateway simulator demonstrating secure transactions with key features such as card validation, transaction encryption, and real-time transaction status updates.',
      technologies: ['Node.js', 'Flask', 'SQL', 'React.js'],
      github: 'https://github.com/pratikthakur2003/Nexpay',
      live: '#'
    },
    {
      title: 'Flower Website Template',
      description: 'A beautiful and responsive flower-themed website template showcasing floral products and collections.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Anjaliii26/Flower',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-textSecondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
