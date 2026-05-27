import React from 'react';

export function Textarea({ className = '', ...props }) {
  return <textarea className={`border border-slate-300 rounded-xl px-3 py-2 w-full ${className}`} {...props} />;
}
