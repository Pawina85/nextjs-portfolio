import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to validate and clean Google App Password
function validateAppPassword(appPassword) {
  if (!appPassword || typeof appPassword !== 'string') {
    return {
      isValid: false,
      error: 'App password must be a non-empty string'
    };
  }

  const cleanedPassword = appPassword.replace(/\s+/g, '');

  if (cleanedPassword.length !== 16) {
    return {
      isValid: false,
      error: `App password must be exactly 16 characters, got ${cleanedPassword.length}`
    };
  }

  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(cleanedPassword)) {
    return {
      isValid: false,
      error: 'App password must contain only alphanumeric characters'
    };
  }

  return {
    isValid: true,
    cleanedPassword
  };
}

function getValidatedAppPassword(appPassword) {
  const result = validateAppPassword(appPassword);
  if (!result.isValid) {
    throw new Error(`Invalid App Password: ${result.error}`);
  }
  return result.cleanedPassword;
}

function validateEmailConfig(env) {
  const errors = [];
  
  if (!env.EMAIL_USER) {
    errors.push('EMAIL_USER is required');
  } else if (!env.EMAIL_USER.includes('@gmail.com')) {
    errors.push('EMAIL_USER must be a Gmail address');
  }
  
  if (!env.EMAIL_PASS) {
    errors.push('EMAIL_PASS is required');
  } else {
    const passResult = validateAppPassword(env.EMAIL_PASS);
    if (!passResult.isValid) {
      errors.push(`EMAIL_PASS: ${passResult.error}`);
    }
  }
  
  if (!env.EMAIL_RECEIVER) {
    errors.push('EMAIL_RECEIVER is required');
  } else if (!env.EMAIL_RECEIVER.includes('@')) {
    errors.push('EMAIL_RECEIVER must be a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    // Log the email data
    console.log("📧 Email submission received:");
    console.log("From:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());

    // Validate email configuration
    const configValidation = validateEmailConfig(process.env);
    if (!configValidation.isValid) {
      console.log("❌ Email configuration errors:");
      configValidation.errors.forEach(error => console.log(`  - ${error}`));
      
      return NextResponse.json({
        success: false,
        error: "Email service not configured properly. Please check environment variables.",
        details: configValidation.errors
      }, { status: 500 });
    }

    // Get validated and cleaned app password
    const validatedAppPassword = getValidatedAppPassword(process.env.EMAIL_PASS);
    console.log("✅ Email configuration validated successfully");

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: validatedAppPassword, // Your cleaned Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your Gmail address
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Receiver email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from your portfolio contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        From: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent on: ${new Date().toLocaleString()}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    console.log("✅ Email sent successfully to:", process.env.EMAIL_RECEIVER || process.env.EMAIL_USER);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
    
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
