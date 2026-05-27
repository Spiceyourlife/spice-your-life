import React from 'react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Building2, Clock, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { differenceInHours } from 'date-fns';

export default function HotelGate({ children }) {
  const { user } = useAuth();

  const { data: client, isLoading } = useQuery({
    queryKey: ['hotel-client', user?.email],
    queryFn: () => base44.entities.HotelClient.filter({ created_by: user?.email }),
    enabled: !!user?.email,
    select: data => data?.[0] || null,
  });

  if (isLoading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );

  if (!client) return (
    <div className="text-center py-16 space-y-5">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"><Lock className="w-10 h-10 text-primary" /></div>
      <div>
        <h3 className="text-xl font-bold">Acesso Reservado a Clientes Hotelaria</h3>
        <p className="text-muted-foreground mt-2 max-w-sm mx-auto">Para aceder aos preços e fazer encomendas de hotelaria, precisa de preencher a sua ficha de cliente.</p>
      </div>
      <Button asChild className="rounded-xl px-8">
        <Link to="/hotel-register"><Building2 className="w-4 h-4 mr-2" />Registar como Cliente Hotelaria</Link>
      </Button>
    </div>
  );

  if (client.status === 'pending') {
    const hoursWaited = client.created_date ? differenceInHours(new Date(), new Date(client.created_date)) : 0;
    const hoursRemaining = Math.max(0, 48 - hoursWaited);

    return (
      <div className="text-center py-16 space-y-5">
        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto"><Clock className="w-10 h-10 text-yellow-600" /></div>
        <h3 className="text-xl font-bold">Ficha em Análise</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">A sua ficha de cliente foi submetida e encontra-se a ser analisada. A aprovação pode demorar até 48 horas.</p>

        {hoursRemaining > 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 max-w-sm mx-auto">
            <p className="text-yellow-800 font-semibold">{Math.ceil(hoursRemaining)}h restantes</p>
            <p className="text-yellow-700 text-sm mt-1">Poderá fazer encomendas após 48 horas da submissão.</p>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 max-w-sm mx-auto">
            <p className="text-blue-800 font-semibold">A aguardar confirmação</p>
          </div>
        )}

        <Button asChild variant="outline" className="rounded-xl">
          <Link to="/">Voltar às Carnes</Link>
        </Button>
      </div>
    );
  }

  if (client.status === 'rejected') {
    return (
      <div className="text-center py-16 space-y-4">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto"><Lock className="w-10 h-10 text-red-600" /></div>
        <h3 className="text-xl font-bold">Acesso Negado</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">A sua ficha de cliente foi rejeitada. Por favor contacte-nos para mais informações.</p>
        <Button asChild className="rounded-xl"><Link to="/">Voltar às Carnes</Link></Button>
      </div>
    );
  }

  // approved (or other) — show the children
  return <>{children}</>;
}
