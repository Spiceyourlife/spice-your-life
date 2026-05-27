import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/lib/AuthContext';
import { CheckCircle, XCircle, Clock, Building2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const STATUS_CONFIG = {
  pending: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: Clock },
  approved: { label: 'Aprovado', color: 'bg-green-100 text-green-800 border-green-200', icon: CheckCircle },
  rejected: { label: 'Rejeitado', color: 'bg-red-100 text-red-800 border-red-200', icon: XCircle },
};

export default function AdminHotelClients() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: clients = [], isLoading } = useQuery({
    queryKey: ['admin-hotel-clients'],
    queryFn: () => base44.entities.HotelClient.list('-created_date', 100),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.HotelClient.update(id, {
      status, approved_date: status === 'approved' ? new Date().toISOString() : undefined
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-hotel-clients'] }),
  });

  if (user?.role !== 'admin') return <div className="text-center py-20 text-muted-foreground">Acesso restrito.</div>;

  return (
    <div className="space-y-5 pb-8">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full" asChild><Link to="/"><ArrowLeft className="w-5 h-5" /></Link></Button>
        <h2 className="text-xl font-bold flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Clientes Hotelaria</h2>
      </div>

      {isLoading ? <p className="text-center text-muted-foreground py-8">A carregar...</p>
      : clients.length === 0 ? <p className="text-center text-muted-foreground py-8">Nenhuma ficha submetida.</p>
      : (
        <div className="space-y-3">
          {clients.map(client => {
            const cfg = STATUS_CONFIG[client.status] || STATUS_CONFIG.pending;
            const Icon = cfg.icon;
            return (
              <div key={client.id} className="bg-card rounded-2xl border border-border p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold">{client.business_name}</p>
                    <p className="text-sm text-muted-foreground">{client.contact_name} · {client.phone}</p>
                    <p className="text-sm text-muted-foreground">{client.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">{client.zone} · NIF: {client.nif}</p>
                    <p className="text-xs text-muted-foreground">Submetido: {format(new Date(client.created_date), "d MMM yyyy HH:mm", { locale: pt })}</p>
                  </div>
                  <Badge className={`${cfg.color} border flex items-center gap-1 flex-shrink-0`}><Icon className="w-3 h-3" />{cfg.label}</Badge>
                </div>
                {client.notes && <p className="text-sm bg-muted rounded-lg p-2 text-muted-foreground">{client.notes}</p>}
                {client.status === 'pending' && (
                  <div className="flex gap-2 pt-1">
                    <Button className="flex-1 rounded-xl bg-green-600 hover:bg-green-700 text-white" onClick={() => updateMutation.mutate({ id: client.id, status: 'approved' })} disabled={updateMutation.isPending}>
                      <CheckCircle className="w-4 h-4 mr-2" />Aprovar
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={() => updateMutation.mutate({ id: client.id, status: 'rejected' })} disabled={updateMutation.isPending}>
                      <XCircle className="w-4 h-4 mr-2" />Rejeitar
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
