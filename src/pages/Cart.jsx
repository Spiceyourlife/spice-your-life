import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import CartItem from '../components/cart/CartItem';
import { motion } from 'framer-motion';

export default function Cart() {
  const { items, subtotal, deliveryFee, total, clearCart, FREE_DELIVERY_MIN, DELIVERY_FEE } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🛒</motion.div>
        <h2 className="text-xl font-bold mb-2">Carrinho vazio</h2>
        <p className="text-muted-foreground mb-6">Adicione produtos para continuar</p>
        <Button asChild className="rounded-xl">
          <Link to="/">Ver Carnes</Link>
        </Button>
      </div>
    );
  }

  const remaining = FREE_DELIVERY_MIN - subtotal;

  return (
    <div className="space-y-5 pb-8">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold">Carrinho</h2>
        <Button variant="ghost" className="ml-auto text-destructive text-sm" onClick={clearCart}>
          Limpar
        </Button>
      </div>

      {remaining > 0 && (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-3 flex items-start gap-2">
          <Truck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            Adicione mais <strong>{remaining.toFixed(2)}€</strong> para entrega grátis!
            Falta-lhe {remaining.toFixed(2)}€ para atingir os {FREE_DELIVERY_MIN}€.
          </p>
        </div>
      )}

      <div className="bg-card rounded-2xl border border-border p-4">
        {items.map(item => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>

      <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{subtotal.toFixed(2)}€</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-1">
            Taxa de entrega
            {deliveryFee === 0 && <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">GRÁTIS</span>}
          </span>
          <span className={`font-medium ${deliveryFee === 0 ? 'line-through text-muted-foreground' : ''}`}>
            {deliveryFee > 0 ? `${deliveryFee.toFixed(2)}€` : `${DELIVERY_FEE.toFixed(2)}€`}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg text-primary">{total.toFixed(2)}€</span>
        </div>
      </div>

      <div className="bg-muted/50 rounded-xl p-3 flex items-start gap-2">
        <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
        <p className="text-xs text-muted-foreground">Pagamento na entrega · Entregas de Albufeira a Sagres</p>
      </div>

      <Button className="w-full h-14 text-base font-bold rounded-2xl" onClick={() => navigate('/checkout')}>
        <ShoppingBag className="w-5 h-5 mr-2" />
        Finalizar Encomenda
      </Button>
    </div>
  );
}
