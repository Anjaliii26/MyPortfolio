import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons/fa';

const Hero = () => {
  const socialLinks: Array<{
    icon: IconType;
    href: string;
    label: string;
  }> = [
    { icon: FaGithub, href: 'https://github.com/Anjaliii26', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/anjalidaftari', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:anjaliiiii26@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-primary">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-secondary bg-opacity-10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="px-5 py-2 rounded-full border border-secondary text-secondary text-sm inline-block">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-secondary via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Anjali Daftari
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="relative inline-block mb-8"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-textSecondary">
              Crafting Digital Experiences
            </h2>
            <div className="h-2 w-full bg-secondary bg-opacity-20 mt-2">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-textSecondary text-lg mb-12 leading-relaxed"
          >
            Transforming ideas into elegant, user-centric web solutions. 
            Passionate about creating seamless digital experiences that make a difference.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-all duration-300 transform hover:scale-110"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-secondary bg-opacity-10 text-secondary border border-secondary rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-purple-500 bg-opacity-10 text-purple-400 border border-purple-500 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textSecondary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 