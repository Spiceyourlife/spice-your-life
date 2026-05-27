import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();
const DELIVERY_FEE = 6;
const FREE_DELIVERY_MIN = 60;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [customerType, setCustomerType] = useState('consumer');

  const addItem = useCallback((product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product_id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product_id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      const unitPrice = customerType === 'hotel' ? product.price_hotel : product.price_consumer;
      return [...prev, {
        product_id: product.id,
        product_name: product.name,
        quantity,
        unit_price: unitPrice,
        unit: product.unit || 'kg',
        image_url: product.image_url,
      }];
    });
  }, [customerType]);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.product_id !== productId));
    } else {
      setItems(prev => prev.map(i =>
        i.product_id === productId ? { ...i, quantity } : i
      ));
    }
  }, []);

  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(i => i.product_id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = items.reduce((sum, i) => sum + (i.unit_price * i.quantity), 0);
  const deliveryFee = subtotal > 0 && subtotal < FREE_DELIVERY_MIN ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      subtotal,
      deliveryFee,
      total,
      itemCount,
      customerType,
      setCustomerType,
      DELIVERY_FEE,
      FREE_DELIVERY_MIN,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
