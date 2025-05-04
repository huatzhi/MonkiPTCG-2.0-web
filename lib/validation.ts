export interface ValidationError {
  field: string;
  message: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name.trim()) {
    errors.push({
      field: 'name',
      message: 'Name is required'
    });
  } else if (data.name.length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
  }

  if (!data.email.trim()) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (!isValidEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  if (!data.message.trim()) {
    errors.push({
      field: 'message',
      message: 'Message is required'
    });
  } else if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
  }

  return errors;
}

export function getErrorMessage(errors: ValidationError[], field: string): string {
  const error = errors.find(e => e.field === field);
  return error ? error.message : '';
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 