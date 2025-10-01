// Email Service for Donation Notifications
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export const sendDonationNotification = async (donorData) => {
  try {
    // Prepare email template data
    const templateParams = {
      to_email: 'ayush.shukla@adypu.edu.in',
      donor_name: donorData.fullName,
      donor_whatsapp: donorData.whatsapp || 'Not provided',
      donor_email: donorData.email || 'Not provided',
      donation_amount: donorData.currency === 'indian' ? `₹${donorData.amount}` : `$${donorData.amount}`,
      donation_kit: donorData.kit,
      donor_pincode: donorData.pincode || 'Not provided',
      donation_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      project_name: 'Share the Light - Diwali Donation Drive'
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Alternative method using fetch API (if EmailJS is not available)
export const sendDonationNotificationAPI = async (donorData) => {
  try {
    const response = await fetch('/api/send-donation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ayush.shukla@adypu.edu.in',
        donorData: donorData
      })
    });

    if (response.ok) {
      console.log('Email notification sent successfully');
      return { success: true };
    } else {
      throw new Error('Failed to send email notification');
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
    return { success: false, error };
  }
};
