import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      school: 'Parul University',
      degree: 'B.Tech in Computer Science and Engineering',
      grade: 'CGPA: 8.43',
      year: '2021-2025'
    },
    {
      school: 'Scholar English Academy',
      degree: '12th Grade',
      grade: '91.6%',
      year: '2019'
    },
    {
      school: 'Hills High School',
      degree: '10th Grade',
      grade: '93.6%',
      year: '2019'
    }
  ];

  const skills = {
    programming: ['Python'],
    webDevelopment: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'Figma', 'Postman'],
    database: ['SQL', 'MongoDB']
  };

  const certificates = [
    'Cybersecurity Certification by Cisco',
    'Software Engineering by NPTEL',
    'Data Analytics with Python by NPTEL',
    'Tata Data Visualization'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="card">
              <h3 className="subheading text-secondary">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-textPrimary">{edu.school}</h4>
                    <p className="text-textSecondary">{edu.degree}</p>
                    <p className="text-textSecondary">{edu.grade}</p>
                    <p className="text-textSecondary">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills & Certificates */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="card">
                <h3 className="subheading text-secondary">Technical Skills</h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-textPrimary capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div className="card">
                <h3 className="subheading text-secondary">Certificates</h3>
                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {certificates.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 