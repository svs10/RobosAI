import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">RobosOne</h3>
            <p className="text-navy-200 mb-4">
              Cutting-edge autonomous surveillance solutions for defense and maritime security.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-navy-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-navy-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/software" className="text-navy-200 hover:text-white transition-colors">Unified AI</a></li>
              <li><a href="/product" className="text-navy-200 hover:text-white transition-colors">UMV</a></li>
              <li><a href="/contact" className="text-navy-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-navy-200 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div> */}

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-navy-200">
              <p>Email: robosai958@gmail.com</p>
              <p>Americas: Onkar Bhosle<br />+1 (555) 123-4567</p>
              <p>India/Asia: Rohit Shirke<br />+91 98765 43210</p>
              <p>Corporate Office:<br />655 South Fair Oaks Avenue<br />Sunnyvale, California, USA</p>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.237715659053!2d72.828889575955!3d18.95389608222564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcf4acf%3A0x5f9b9b9b9b9b9b9b!2s501%20Steel%20Chambers%2C%20Devji%20Ratansey%20Marg%2C%20Masjid%20Bunder%2C%20Mumbai%2C%20Maharashtra%20400009!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="mt-2"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <p className="mt-4">R&D Facility:<br />501 Steel Chambers, Devji Ratansey Marg, Masjid Bunder, Mumbai 400009</p>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465047739843!2d-122.03621868469422!3d37.37699997984266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfb543%3A0x7d3c9f9b9b9b9b9b!2s655%20S%20Fair%20Oaks%20Ave%2C%20Sunnyvale%2C%20CA%2094086%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="mt-2"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-navy-200 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-navy-200 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10 10 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-navy-200 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div> */}
          <div className="text-navy-200 text-sm">
            © {currentYear} Robos AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
