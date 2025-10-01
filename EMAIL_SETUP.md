# Email Notification Setup Guide

## 🎯 Setup Email Notifications for Donations

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email: `ayush.shukla@adypu.edu.in`
3. Create a new account

### **Step 2: Add Email Service**
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account: `ayush.shukla@adypu.edu.in`
5. Note down the **Service ID**

### **Step 3: Create Email Template**
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: 🎉 New Donation Received - Share the Light

Dear Ayush,

A new donation has been received for the Share the Light Diwali Drive!

Donor Details:
• Name: {{donor_name}}
• WhatsApp: {{donor_whatsapp}}
• Email: {{donor_email}}
• Amount: {{donation_amount}}
• Kit: {{donation_kit}}
• Pincode: {{donor_pincode}}
• Date: {{donation_date}}

Project: {{project_name}}

Thank you for your dedication to this cause!

Best regards,
Share the Light Team
```

4. Save the template and note down the **Template ID**

### **Step 4: Get Public Key**
1. Go to **Account** → **General**
2. Copy your **Public Key**

### **Step 5: Update Configuration**
Update the values in `src/services/emailService.js`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### **Step 6: Test the Setup**
1. Make a test donation on your website
2. Check if you receive an email at `ayush.shukla@adypu.edu.in`
3. Verify all donor details are included

## 🎯 Alternative: Simple Email API

If EmailJS doesn't work, you can use a simple email service:

### **Option 1: Formspree**
1. Go to [Formspree.io](https://formspree.io/)
2. Create account with `ayush.shukla@adypu.edu.in`
3. Create a new form
4. Get the form endpoint URL
5. Update the email service to use Formspree

### **Option 2: Netlify Forms**
1. If hosting on Netlify, use Netlify Forms
2. Add `netlify` attribute to your form
3. Configure email notifications in Netlify dashboard

## 🎯 Email Template Variables

The following variables are available in your email template:

- `{{donor_name}}` - Donor's full name
- `{{donor_whatsapp}}` - WhatsApp number
- `{{donor_email}}` - Email address
- `{{donation_amount}}` - Amount with currency symbol
- `{{donation_kit}}` - Selected kit
- `{{donor_pincode}}` - Pincode
- `{{donation_date}}` - Date and time
- `{{project_name}}` - Project name

## 🎯 Troubleshooting

### **Email Not Sending:**
1. Check console for errors
2. Verify EmailJS configuration
3. Check Gmail permissions
4. Test with a simple template first

### **Template Not Working:**
1. Ensure all variables are spelled correctly
2. Check template syntax
3. Test with hardcoded values first

### **Service Connection Issues:**
1. Reconnect Gmail service
2. Check Gmail app permissions
3. Try a different email service

## 🎯 Security Notes

- Never expose your EmailJS keys in client-side code
- Use environment variables for production
- Consider server-side email sending for better security
- Regularly rotate your API keys

## 🎯 Success Indicators

✅ Email received at `ayush.shukla@adypu.edu.in`
✅ All donor details included
✅ Professional email format
✅ Timely delivery (within 1-2 minutes)

---

**Need Help?** Contact the development team or check EmailJS documentation.
