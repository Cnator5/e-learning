'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaUsers, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-blue-800"
      >
        About ResearchGuru
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg mb-6"
        >
          Welcome to ResearchGuru, your trusted partner in academic excellence and research innovation. Founded in 2015, we've been on a mission to revolutionize the way students and researchers approach their academic journey.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-blue-700"
        >
          Our Vision
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6"
        >
          At ResearchGuru, we envision a world where every student has access to top-notch research resources and guidance. We believe in empowering minds, fostering curiosity, and paving the way for groundbreaking discoveries.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-blue-700"
        >
          What Sets Us Apart
        </motion.h2>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="list-disc pl-6 mb-6"
        >
          <li>Expert team of PhD-holding researchers</li>
          <li>Cutting-edge research methodologies</li>
          <li>Personalized approach to each project</li>
          <li>Rigorous quality control processes</li>
          <li>24/7 customer support</li>
        </motion.ul>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="flex items-center">
            <FaGraduationCap className="text-3xl text-blue-600 mr-2" />
            <span>500+ PhD Experts</span>
          </div>
          <div className="flex items-center">
            <FaLightbulb className="text-3xl text-yellow-500 mr-2" />
            <span>10,000+ Projects Completed</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="text-3xl text-green-500 mr-2" />
            <span>98% Client Satisfaction</span>
          </div>
          <div className="flex items-center">
            <FaHandshake className="text-3xl text-purple-500 mr-2" />
            <span>100% Confidentiality</span>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-blue-700"
        >
          Our Commitment
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mb-6"
        >
          We are committed to maintaining the highest standards of academic integrity, delivering exceptional quality, and fostering a culture of continuous learning and improvement.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="bg-blue-100 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p>Have questions or ready to start your research journey with us?</p>
          <ul className="mt-2">
            <li>Email: info@researchguru.pro</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Academic Lane, Knowledge City, RS 54321</li>
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;