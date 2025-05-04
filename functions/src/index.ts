/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
  timestamp: admin.firestore.Timestamp;
  status: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_SUBMISSIONS_PER_WINDOW = 5;

export const onContactFormSubmit = onDocumentCreated('contacts/{contactId}', async (event) => {
  if (!event.data) {
    logger.error('No data associated with the event');
    return;
  }

  const snapshot = event.data;
  const contactData = snapshot.data() as ContactFormData;
  const userEmail = contactData.email;

  // Check rate limiting
  const oneHourAgo = new Date(Date.now() - RATE_LIMIT_WINDOW);
  const recentSubmissions = await admin.firestore()
    .collection('contacts')
    .where('email', '==', userEmail)
    .where('timestamp', '>', oneHourAgo)
    .count()
    .get();

  if (recentSubmissions.data().count >= MAX_SUBMISSIONS_PER_WINDOW) {
    logger.warn(`Rate limit exceeded for email: ${userEmail}`);
    await snapshot.ref.update({
      status: 'rate_limited',
      error: 'Too many submissions. Please try again later.'
    });
    return;
  }

  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Message:</strong> ${contactData.message}</p>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info('Email notification sent successfully');
    
    await snapshot.ref.update({
      emailSent: true,
      emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'processed'
    });
    
    return;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error sending email:', errorMessage);
    
    await snapshot.ref.update({
      emailSent: false,
      emailError: errorMessage,
      status: 'error'
    });
    
    throw error;
  }
});
