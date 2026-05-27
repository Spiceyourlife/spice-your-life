import React, { createContext, useContext, useState } from 'react';

const SelectContext = createContext(null);

export function Select({ value, onValueChange, children, required }) {
  const [open, setOpen] = useState(false);
  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen, required }}>
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ className = '', children, ...props }) {
  const ctx = useContext(SelectContext);
  return (
    <button type="button" onClick={() => ctx.setOpen(!ctx.open)} className={`border border-slate-300 rounded-xl px-3 py-2 w-full text-left ${className}`} {...props}>
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  const ctx = useContext(SelectContext);
  return <span>{ctx.value || placeholder || 'Selecione'}</span>;
}

export function SelectContent({ children, className = '' }) {
  const ctx = useContext(SelectContext);
  if (!ctx.open) return null;
  return (
    <div className={`absolute z-10 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function SelectItem({ value, children, className = '' }) {
  const ctx = useContext(SelectContext);
  return (
    <button type="button" onClick={() => { ctx.onValueChange?.(value); ctx.setOpen(false); }} className={`w-full text-left px-3 py-2 hover:bg-slate-100 ${className}`}>
      {children}
    </button>
  );
}
