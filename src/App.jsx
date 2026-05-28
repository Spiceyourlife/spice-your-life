import React from 'react';

import {
  HashRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

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
    <div
      style={{
        padding: '16px',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        background: '#f9f7f2',
        color: '#121212'
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}
      >
        <nav
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          <Link to="/">Carrinho</Link>

          <Link to="/checkout">
            Checkout
          </Link>

          <Link to="/orders">
            Encomendas
          </Link>

          <Link to="/admin/hotel-clients">
            Clientes Hotelaria
          </Link>
        </nav>

        <div>
          {user ? (
            <button onClick={logout}>
              Sair
            </button>
          ) : (
            <Link to="/login">
              Entrar
            </Link>
          )}
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin/hotel-clients"
          element={
            <ProtectedRoute>
              <AdminHotelClients />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </AuthProvider>
  );
}