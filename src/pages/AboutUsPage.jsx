import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="mb-6">
        RobosOne specializes in cutting-edge autonomous surveillance solutions for defense and maritime security. 
        With global operations and R&D facilities, we deliver reliable unmanned systems to empower mission-critical operations.
      </p>
      <h3 className="text-2xl font-bold mb-4">Locations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold">Corporate Address</h4>
          <p>655 South Fair Oaks Avenue, Sunnyvale, California 94086, United States</p>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465047739843!2d-122.03621868469422!3d37.37699997984266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfb543%3A0x7d3c9f9b9b9b9b9b!2s655%20S%20Fair%20Oaks%20Ave%2C%20Sunnyvale%2C%20CA%2094086%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="mt-2"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold">R&D Facility</h4>
          <p>501 Steel Chambers, Devji Ratansey Marg, Masjid Bunder, Mumbai 400009</p>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.237715659053!2d72.828889575955!3d18.95389608222564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcf4acf%3A0x5f9b9b9b9b9b9b9b!2s501%20Steel%20Chambers%2C%20Devji%20Ratansey%20Marg%2C%20Masjid%20Bunder%2C%20Mumbai%2C%20Maharashtra%20400009!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="mt-2"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
