import React from 'react';

export function Button({ asChild, className = '', variant = 'default', size = 'default', children, ...props }) {
  const baseClass = 'inline-flex items-center justify-center rounded-xl transition-all';
  const variantClass = variant === 'ghost' ? 'bg-transparent hover:bg-slate-100 text-inherit' : 'bg-black text-white hover:bg-slate-900';
  const sizeClass = size === 'icon' ? 'h-10 w-10 p-0' : 'px-4 py-2 h-12';
  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [classes, children.props.className].filter(Boolean).join(' '),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
