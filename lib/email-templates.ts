export const contactFormTemplate = (data: {
  name: string;
  email: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thank you for contacting Team Monki PTCG</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .content {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Team Monki PTCG</h1>
  </div>
  
  <div class="content">
    <h2>Thank you for your message!</h2>
    <p>Dear ${data.name},</p>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p>Here's a copy of your message:</p>
    <blockquote>${data.message}</blockquote>
    <p>If you have any urgent inquiries, please feel free to contact us directly at:</p>
    <p>Email: info@teammonkiptcg.com</p>
    <p>Best regards,<br>Team Monki PTCG</p>
  </div>
  
  <div class="footer">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>
`

export const adminNotificationTemplate = (data: {
  name: string;
  email: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .content {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
    }
    .submission-details {
      margin-top: 20px;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Contact Form Submission</h1>
  </div>
  
  <div class="content">
    <h2>Contact Form Details</h2>
    <div class="submission-details">
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${data.message}</blockquote>
    </div>
    <p>Please respond to this inquiry at your earliest convenience.</p>
  </div>
</body>
</html>
` 