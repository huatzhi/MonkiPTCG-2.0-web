import React from 'react'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'
import { format } from 'date-fns'

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
  status: string;
  emailSent: boolean;
  emailSentAt: any;
  emailError: string | null;
}

async function getSubmissions(): Promise<ContactSubmission[]> {
  const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as ContactSubmission[]
}

export default async function AdminDashboard() {
  const submissions = await getSubmissions()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(submission.timestamp.toDate(), 'PPpp')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {submission.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      submission.status === 'success' ? 'bg-green-100 text-green-800' :
                      submission.status === 'error' ? 'bg-red-100 text-red-800' :
                      submission.status === 'rate_limited' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.emailSent ? (
                      <span className="text-green-600">
                        Sent {submission.emailSentAt ? format(submission.emailSentAt.toDate(), 'PPpp') : ''}
                      </span>
                    ) : submission.emailError ? (
                      <span className="text-red-600">{submission.emailError}</span>
                    ) : (
                      <span className="text-gray-500">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 