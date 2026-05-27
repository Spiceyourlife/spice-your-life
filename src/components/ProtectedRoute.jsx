import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export default function ProtectedRoute({ redirectTo = '/login' }) {
  const { user, isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return <div style={{ padding: 24 }}>A carregar...</div>;
  }

  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
