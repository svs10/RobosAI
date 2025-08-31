import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_bbyehdd';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mq2x04v';
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || 'MVOmH66CygNk9efUq';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'rohit@dronitech.com,onkar@dronitech.com'
      },
      EMAILJS_USER_ID
    );
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
