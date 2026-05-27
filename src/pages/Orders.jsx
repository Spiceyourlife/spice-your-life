import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/lib/AuthContext';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Package, Clock, Truck, CheckCircle, XCircle, ChefHat } from 'lucide-react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { motion } from 'framer-motion';

const STATUS_CONFIG = {
  pending: { label: 'Pendente', icon: Clock, color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  confirmed: { label: 'Confirmado', icon: CheckCircle, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  preparing: { label: 'A Preparar', icon: ChefHat, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  delivering: { label: 'Em Entrega', icon: Truck, color: 'bg-orange-100 text-orange-800 border-orange-200' },
  delivered: { label: 'Entregue', icon: CheckCircle, color: 'bg-green-100 text-green-800 border-green-200' },
  cancelled: { label: 'Cancelado', icon: XCircle, color: 'bg-red-100 text-red-800 border-red-200' },
};

export default function Orders() {
  const { user } = useAuth();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: () => base44.entities.Order.filter({ created_by: user?.email }, '-created_date', 50),
    enabled: !!user?.email,
  });

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Package className="w-5 h-5 text-primary" />As Minhas Encomendas
      </h2>

      {isLoading ? (
        <div className="space-y-3">{Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-32 rounded-2xl" />)}</div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-3">📦</p>
          <p className="text-muted-foreground font-medium">Ainda não tem encomendas</p>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order, idx) => {
            const statusCfg = STATUS_CONFIG[order.status] || STATUS_CONFIG.pending;
            const StatusIcon = statusCfg.icon;
            return (
              <motion.div key={order.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                className="bg-card rounded-2xl border border-border p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{format(new Date(order.created_date), "d MMM yyyy · HH:mm", { locale: pt })}</p>
                    <p className="font-semibold mt-0.5">{order.delivery_zone}</p>
                  </div>
                  <Badge className={`${statusCfg.color} border flex items-center gap-1`}>
                    <StatusIcon className="w-3 h-3" />{statusCfg.label}
                  </Badge>
                </div>
                <div className="space-y-1">
                  {order.items?.map((item, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{item.quantity}x {item.product_name} — {item.total?.toFixed(2)}€</p>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-bold text-primary">{order.total?.toFixed(2)}€</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
