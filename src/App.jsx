import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import AdminHotelClients from './pages/AdminHotelClients';
import Login from './pages/Login';

function AppShell() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '16px', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
        <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/">Carrinho</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/orders">Encomendas</Link>
          <Link to="/admin/hotel-clients">Clientes Hotelaria</Link>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
          {user ? (
            <>
              <span>{user.name} ({user.role})</span>
              <button onClick={logout} style={{ padding: '8px 14px', cursor: 'pointer' }}>Sair</button>
            </>
          ) : (
            <Link to="/login">Entrar</Link>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin/hotel-clients" element={<AdminHotelClients />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter basename="/spice-your-life/">
          <AppShell />
        </BrowserRouter>
    </AuthProvider>
  );
}
