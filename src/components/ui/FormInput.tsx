'use client';

import React from 'react';

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
}

const baseInputClasses =
  'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth';

const Input = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || props.name;
    const borderClass = error ? 'border-red-500' : 'border-brand-gold/30';

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${baseInputClasses} ${borderClass} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-brand-cream/50 text-xs mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'FormInput';

const TextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || props.name;
    const borderClass = error ? 'border-red-500' : 'border-brand-gold/30';

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`${baseInputClasses} ${borderClass} resize-none ${className}`}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-brand-cream/50 text-xs mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'FormTextArea';

const Select = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      className = '',
      id,
      options,
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name;
    const borderClass = error ? 'border-red-500' : 'border-brand-gold/30';

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`${baseInputClasses} ${borderClass} ${className}`}
          {...props}
        >
          {props.children || (
            <>
              <option value="">Choose an option...</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </>
          )}
        </select>
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-brand-cream/50 text-xs mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'FormSelect';

export { Input, TextArea, Select };
export default Input;
