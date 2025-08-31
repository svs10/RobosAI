import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your inquiry..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>
        
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Failed to send message. Please try again or contact us directly at rohit@dronitech.com
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
