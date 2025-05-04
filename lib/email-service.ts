import { db } from './firebase'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { contactFormTemplate, adminNotificationTemplate } from './email-templates'

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // In a real implementation, this would call a Firebase Cloud Function
    // For now, we'll just log the email data
    console.log('Sending email:', {
      to: data.to,
      subject: data.subject,
      html: data.html
    })

    return { success: true }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

export async function sendContactFormEmails(
  submissionId: string,
  formData: {
    name: string;
    email: string;
    message: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: formData.email,
      subject: 'Thank you for contacting Team Monki PTCG',
      html: contactFormTemplate(formData)
    })

    if (!userEmailResult.success) {
      throw new Error(userEmailResult.error)
    }

    // Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL || '',
      subject: 'New Contact Form Submission',
      html: adminNotificationTemplate(formData)
    })

    if (!adminEmailResult.success) {
      throw new Error(adminEmailResult.error)
    }

    // Update submission status in Firestore
    const submissionRef = doc(db, 'contacts', submissionId)
    await updateDoc(submissionRef, {
      emailSent: true,
      emailSentAt: new Date(),
      status: 'success'
    })

    return { success: true }
  } catch (error) {
    // Update submission status with error
    const submissionRef = doc(db, 'contacts', submissionId)
    await updateDoc(submissionRef, {
      emailSent: false,
      emailError: error instanceof Error ? error.message : 'Unknown error',
      status: 'error'
    })

    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
} 