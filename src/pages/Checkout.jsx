import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { base44 } from '../api/base44Client';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, User, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Separator } from '../components/ui/separator';
import { motion } from 'framer-motion';

const ZONES = [
  'Albufeira', 'Guia', 'Algoz', 'Silves', 'Lagoa', 'Carvoeiro',
  'Porches', 'Armação de Pêra', 'Portimão', 'Alvor', 'Monchique',
  'Lagos', 'Luz', 'Burgau', 'Salema', 'Vila do Bispo', 'Sagres',
  'Penina', 'Senhora de Verde', 'Figueira', 'Mexilhoeira Grande'
];

export default function Checkout() {
  const { items, subtotal, deliveryFee, total, customerType, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', zone: '', notes: '' });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Order.create({
      customer_name: form.name,
      customer_phone: form.phone,
      customer_email: form.email,
      delivery_address: form.address,
      delivery_zone: form.zone,
      customer_type: customerType,
      items: items.map(i => ({
        product_id: i.product_id,
        product_name: i.product_name,
        quantity: i.quantity,
        unit_price: i.unit_price,
        total: i.unit_price * i.quantity
      })),
      subtotal, delivery_fee: deliveryFee, total,
      status: 'pending', notes: form.notes, order_type: 'meat'
    });
    setSuccess(true);
    clearCart();
    setSubmitting(false);
  };

  if (success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Encomenda Recebida!</h2>
        <p className="text-muted-foreground mb-2">A sua encomenda foi registada com sucesso.</p>
        <p className="text-sm text-muted-foreground mb-8">Pagamento na entrega · Entraremos em contacto para confirmar</p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" className="rounded-xl" onClick={() => navigate('/orders')}>Ver Encomendas</Button>
          <Button className="rounded-xl" onClick={() => navigate('/')}>Continuar a Comprar</Button>
        </div>
      </motion.div>
    );
  }

  if (items.length === 0) { navigate('/cart'); return null; }

  return (
    <div className="space-y-5 pb-8">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold">Finalizar Encomenda</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
          <h3 className="font-semibold flex items-center gap-2"><User className="w-4 h-4 text-primary" />Dados de Contacto</h3>
          <div>
            <Label>Nome *</Label>
            <Input required placeholder="O seu nome" value={form.name} onChange={e => handleChange('name', e.target.value)} className="rounded-xl mt-1" />
          </div>
          <div>
            <Label>Telefone *</Label>
            <Input required type="tel" placeholder="+351 900 000 000" value={form.phone} onChange={e => handleChange('phone', e.target.value)} className="rounded-xl mt-1" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="email@exemplo.com" value={form.email} onChange={e => handleChange('email', e.target.value)} className="rounded-xl mt-1" />
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
          <h3 className="font-semibold flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Dados de Entrega</h3>
          <div>
            <Label>Zona de Entrega *</Label>
            <Select required value={form.zone} onValueChange={v => handleChange('zone', v)}>
              <SelectTrigger className="rounded-xl mt-1"><SelectValue placeholder="Selecione a zona" /></SelectTrigger>
              <SelectContent>{ZONES.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Morada Completa *</Label>
            <Textarea required placeholder="Rua, número, andar..." value={form.address} onChange={e => handleChange('address', e.target.value)} className="rounded-xl mt-1" />
          </div>
          <div>
            <Label>Observações</Label>
            <Textarea placeholder="Instruções especiais, horário preferido..." value={form.notes} onChange={e => handleChange('notes', e.target.value)} className="rounded-xl mt-1" />
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-5 space-y-3">
          <h3 className="font-semibold">Resumo</h3>
          {items.map(item => (
            <div key={item.product_id} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.quantity}x {item.product_name}</span>
              <span>{(item.unit_price * item.quantity).toFixed(2)}€</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span><span>{subtotal.toFixed(2)}€</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Entrega</span><span>{deliveryFee > 0 ? `${deliveryFee.toFixed(2)}€` : 'Grátis'}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span><span className="text-primary">{total.toFixed(2)}€</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">💰 Pagamento na entrega</p>
        </div>

        <Button type="submit" className="w-full h-14 text-base font-bold rounded-2xl" disabled={submitting}>
          {submitting ? <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" /> : 'Confirmar Encomenda'}
        </Button>
      </form>
    </div>
  );
}
