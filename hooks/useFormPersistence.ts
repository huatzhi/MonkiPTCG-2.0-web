import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function useFormPersistence(key: string) {
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window === 'undefined') {
      return { name: '', email: '', message: '' };
    }
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' };
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(formData));
  }, [formData, key]);

  const clearForm = () => {
    setFormData({ name: '', email: '', message: '' });
    localStorage.removeItem(key);
  };

  return { formData, setFormData, clearForm };
} 