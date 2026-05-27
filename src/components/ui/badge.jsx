import React from 'react';

export function Badge({ className = '', children, ...props }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${className}`} {...props}>
      {children}
    </span>
  );
}
