'use client'

import React, { useState } from 'react'
import { submitContactForm } from '@/lib/contact'
import { validateContactForm, getErrorMessage, ValidationError } from '@/lib/validation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors.some(error => error.field === name)) {
      setErrors(prev => prev.filter(error => error.field !== name))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    // Validate form
    const validationErrors = validateContactForm(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      setStatus('error')
      return
    }

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setError(result.error || 'Failed to submit form')
      }
    } catch (err) {
      setStatus('error')
      setError('An unexpected error occurred')
    }
  }

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Contact Us</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-4xl mb-4">✓</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.some(e => e.field === 'name') ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your name"
                />
                {errors.some(e => e.field === 'name') && (
                  <p className="mt-1 text-sm text-red-500">
                    {getErrorMessage(errors, 'name')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.some(e => e.field === 'email') ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your@email.com"
                />
                {errors.some(e => e.field === 'email') && (
                  <p className="mt-1 text-sm text-red-500">
                    {getErrorMessage(errors, 'email')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.some(e => e.field === 'message') ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your message"
                />
                {errors.some(e => e.field === 'message') && (
                  <p className="mt-1 text-sm text-red-500">
                    {getErrorMessage(errors, 'message')}
                  </p>
                )}
              </div>

              {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm sm:text-base">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
                  status === 'submitting'
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors`}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
} 