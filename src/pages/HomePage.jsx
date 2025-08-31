import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentView, setCurrentView] = useState(0);
  const views = [
    {
      title: "Unmanned Maritime Vessel (UMV)",
      description: "Next-generation autonomous maritime surveillance and reconnaissance.",
      image: "/assets/Vessel Image 02.png",
      alt: "UMV",
      buttonText: "Request More Info",
      buttonLink: "/product"
    },
    {
      title: "Unified AI for Multi‑Robot Workplaces",
      description: "One AI platform to control, monitor, and optimize every robot.",
      image: "/assets/Software 01.jpg",
      alt: "UMV Technology",
      buttonText: "View Technology",
      buttonLink: "/software"
    },
    // {
    //   title: "Multi-Mission Capability",
    //   description: "Surveillance, reconnaissance, search and rescue, and environmental monitoring.",
    //   image: "/assets/Vessel Image 02.png",
    //   alt: "UMV Missions",
    //   buttonText: "Explore Missions",
    //   buttonLink: "/product"
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % views.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [views.length]);

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % views.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + views.length) % views.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevView}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
            aria-label="Previous view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextView}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
            aria-label="Next view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content */}
          <div className="transition-opacity duration-500 ease-in-out">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {views[currentView].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-navy-200">
              {views[currentView].description}
            </p>
            
            <div className="mb-16">
              <Link to={views[currentView].buttonLink}>
                <img 
                  src={views[currentView].image} 
                  alt={views[currentView].alt} 
                  className="w-full max-w-5xl mx-auto h-96 object-contain rounded-lg shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            <Link
              to={views[currentView].buttonLink}
              className="inline-block bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-100 transition-colors shadow-lg hover:shadow-xl mb-16"
            >
              {views[currentView].buttonText}
            </Link>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {views.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentView ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to view ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* UMV Explanation Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <img 
                src="/assets/Vessel Image 01.png" 
                alt="UMV Detailed View"
                className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                What is the UMV?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                The Unmanned Maritime Vessel (UMV) is a cutting-edge autonomous platform 
                designed for advanced maritime surveillance and reconnaissance operations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Equipped with state-of-the-art sensors and AI-powered navigation systems, the UMV 
                provides persistent maritime domain awareness without risking human lives.
              </p>
              <p className="text-lg text-gray-700">
                Ideal for coastal surveillance, border security, search and rescue operations, 
                and environmental monitoring in challenging maritime environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unified AI Explanation Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Unified AI for Multi-Robot Workplaces
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Unified AI platform enables seamless control, monitoring, and optimization of various robotic systems, enhancing operational efficiency and effectiveness.
          </p>
          <p className="text-lg text-gray-700">
            With natural language processing capabilities, users can easily interact with the system, gaining insights and making data-driven decisions across their robotic fleet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
