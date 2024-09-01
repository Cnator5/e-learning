"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = [
    {
      title: "AI-Powered Climate Change Prediction",
      category: "Environmental Science",
      author: "Jane Doe",
      description: "Using machine learning algorithms to forecast long-term climate trends and their potential impact on ecosystems.",
      image: "/images/premium_photo-1661761077411-d50cba031848.jpg",
    },
    {
      title: "Quantum Computing in Cryptography",
      category: "Computer Science",
      author: "John Smith",
      description: "Exploring the potential of quantum algorithms to revolutionize data encryption and security protocols.",
      image: "/images/istockphoto-1344939844-612x612.jpg",
    },
    {
      title: "Nanobots for Cancer Treatment",
      category: "Biomedical Engineering",
      author: "Alex Johnson",
      description: "Developing microscopic robots capable of targeting and destroying cancer cells with minimal side effects.",
      image: "/images/istockphoto-1367899897-612x612.jpg",
    },
    {
      title: "Sustainable Urban Agriculture",
      category: "Agriculture & Urban Planning",
      author: "Emily Chen",
      description: "Designing vertical farming systems to increase food production in urban areas while reducing environmental impact.",
      image: "/images/istockphoto-1143049615-612x612.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeProject ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="filter brightness-50"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-xl mb-2">{project.category}</p>
                <p className="text-lg mb-4">By {project.author}</p>
                <p className="text-base mb-4">{project.description}</p>
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full mx-2 transition-colors duration-300 ${
                index === activeProject ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
              }`}
              onClick={() => setActiveProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;