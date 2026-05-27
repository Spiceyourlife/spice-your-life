import React from 'react';

export default function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-slate-200">
      <div>
        <p className="font-semibold">{item.product_name}</p>
        <p className="text-sm text-slate-600">{item.quantity} × {item.unit}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{(item.unit_price * item.quantity).toFixed(2)}€</p>
        <p className="text-xs text-slate-500">{item.quantity} × {item.unit_price.toFixed(2)}€</p>
      </div>
    </div>
  );
}
