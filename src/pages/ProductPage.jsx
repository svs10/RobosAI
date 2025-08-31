import React from 'react';

const ProductPage = () => {
  const specifications = [
    { label: 'Range', value: '20 Nautical Miles' },
    { label: 'Speed', value: '35 Knots' },
    { label: 'Payload Capacity', value: '2200 Lbs' }
  ];

  const features = [
    { 
      title: 'Day & Night Camera', 
      description: 'High-resolution camera with live video feed capabilities for 24/7 surveillance' 
    },
    { 
      title: 'Autonomous Navigation', 
      description: 'Advanced AI-powered navigation with collision avoidance systems' 
    },
    { 
      title: 'Return-to-Home Safety', 
      description: 'Automatic return to base feature for mission completion or emergencies' 
    },
    { 
      title: 'Customizable Payload', 
      description: 'Adaptable payload options for Surveillance, Search & Rescue, or Reconnaissance' 
    },
    { 
      title: 'Dynamic Map', 
      description: 'Real-time situational awareness with integrated mapping features' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Project Overview Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">UMV Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/assets/Vessel Image 03.png" 
              alt="UMV Operational View"
              className="w-full h-96 object-contain rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Advanced Maritime Surveillance</h3>
            <p className="text-lg mb-4">
              The Unmanned Maritime Vessel represents the cutting edge of autonomous 
              maritime technology, designed to operate in challenging coastal and open water environments.
            </p>
            <p className="text-lg">
              With its robust design and advanced sensor suite, the UMV provides persistent 
              surveillance capabilities for extended missions without human intervention.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{spec.label}</h3>
              <p className="text-lg">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Image */}
      <div className="text-center">
        <img 
          src="/assets/Vessel Image 04.png" 
          alt="UMV Deployment"
          className="w-full max-w-4xl mx-auto h-96 object-contain rounded-lg shadow-xl mb-6"
        />
        <span className="bg-navy-900 text-white px-6 py-3 rounded-full text-lg">
          Currently Deployed With: Indian Navy
        </span>
      </div>
    </div>
  );
};

export default ProductPage;
