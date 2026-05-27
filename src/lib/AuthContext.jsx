import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('auth_token'));
  const [isLoadingAuth, setIsLoadingAuth] = useState(!!token);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setIsLoadingAuth(false);
      return;
    }

    setIsLoadingAuth(true);
    fetch(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          localStorage.removeItem('auth_token');
          setToken(null);
          setUser(null);
          throw new Error('Sessão expirada');
        }
        const data = await res.json();
        setUser(data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setIsLoadingAuth(false));
  }, [token]);

  const login = async ({ email, password }) => {
    setAuthError(null);
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      const message = data?.message || 'Erro no login';
      setAuthError(message);
      throw new Error(message);
    }

    localStorage.setItem('auth_token', data.token);
    setToken(data.token);
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      logout,
      isLoadingAuth,
      isLoadingPublicSettings: false,
      authError,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
