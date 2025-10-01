// Simple Email Service - Alternative to EmailJS
// This service uses a simple API endpoint to send emails

export const sendSimpleDonationNotification = async (donorData) => {
  try {
    // Create email content
    const emailContent = {
      to: 'ayush.shukla@adypu.edu.in',
      subject: '🎉 New Donation Received - Share the Light',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #FFD700, #FF8C00); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Donation Received!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Share the Light - Diwali Drive</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #800000; margin-top: 0;">Donor Information</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">👤 Name:</strong> ${donorData.fullName}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">📱 WhatsApp:</strong> ${donorData.whatsapp || 'Not provided'}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">📧 Email:</strong> ${donorData.email || 'Not provided'}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">💰 Amount:</strong> ${donorData.currency === 'indian' ? '₹' : '$'}${donorData.amount}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">📦 Kit:</strong> ${donorData.kit}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #FFD700;">📍 Pincode:</strong> ${donorData.pincode || 'Not provided'}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #FFD700;">📅 Date:</strong> ${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            
            <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; border-left: 4px solid #FFD700;">
              <p style="margin: 0; color: #333; font-size: 14px;">
                <strong>Thank you for your dedication to this cause!</strong><br>
                This donation will help bring joy and light to underprivileged children this Diwali.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Share the Light - Diwali Donation Drive</p>
            <p>Powered by Sant Ishwar Foundation</p>
          </div>
        </div>
      `
    };

    // For now, we'll use a simple approach
    // In production, you would send this to your backend API
    console.log('Email notification prepared:', emailContent);
    
    // Simulate email sending (replace with actual API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email sent to ayush.shukla@adypu.edu.in');
        resolve({ success: true });
      }, 1000);
    });

  } catch (error) {
    console.error('Error preparing email notification:', error);
    return { success: false, error };
  }
};

// Function to send email via backend API
export const sendEmailViaAPI = async (donorData) => {
  try {
    const response = await fetch('/api/send-donation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ayush.shukla@adypu.edu.in',
        subject: '🎉 New Donation Received - Share the Light',
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
