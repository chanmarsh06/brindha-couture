import { useState, useCallback } from 'react';

interface ValidationRules {
  [fieldName: string]: Array<{
    validate: (value: unknown) => boolean;
    message: string;
  }>;
}

interface ValidationErrors {
  [fieldName: string]: string;
}

const commonValidators = {
  required: (value: unknown) => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },

  email: (value: unknown) => {
    if (typeof value !== 'string') return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  phone: (value: unknown) => {
    if (typeof value !== 'string') return false;
    const digitsOnly = value.replace(/\D/g, '');
    return digitsOnly.length === 10;
  },

  minLength: (min: number) => (value: unknown) => {
    if (typeof value !== 'string') return false;
    return value.length >= min;
  },

  maxLength: (max: number) => (value: unknown) => {
    if (typeof value !== 'string') return false;
    return value.length <= max;
  },

  pattern: (regex: RegExp) => (value: unknown) => {
    if (typeof value !== 'string') return false;
    return regex.test(value);
  },
};

export const useValidation = (validationRules: ValidationRules) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = useCallback(
    (formData: Record<string, unknown>): boolean => {
      const newErrors: ValidationErrors = {};

      Object.keys(validationRules).forEach((fieldName) => {
        const rules = validationRules[fieldName];
        const value = formData[fieldName];

        for (const rule of rules) {
          if (!rule.validate(value)) {
            newErrors[fieldName] = rule.message;
            break;
          }
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validationRules]
  );

  const clearError = useCallback((fieldName: string) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[fieldName];
      return updated;
    });
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validate,
    clearError,
    clearErrors,
  };
};

export { commonValidators };
