// Google Analytics 4 Measurement Protocol
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackFormInteraction = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      non_interaction: false
    });
  }
};

export const trackFormSubmission = (status: 'success' | 'error' | 'rate_limited', error?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'contact_form',
      event_label: status,
      error_message: error || null,
      non_interaction: false
    });
  }
};

export const trackFormValidation = (field: string, isValid: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_validation', {
      event_category: 'contact_form',
      event_label: field,
      is_valid: isValid,
      non_interaction: false
    });
  }
}; 