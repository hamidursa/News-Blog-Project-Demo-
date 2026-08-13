import React from 'react';
import './Input.css';

export const Input = ({
  label,
  error,
  icon,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  id,
  className = '',
  required = false,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={inputId}
          type={type}
          className={`input-field ${icon ? 'has-icon' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      </div>
      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;
