import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function Login() {
  const { user, login, authError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Falha no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Iniciar Sessão</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
        <div>
          <Label>Email</Label>
          <Input type="email" required value={form.email} onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))} />
        </div>
        <div>
          <Label>Senha</Label>
          <Input type="password" required value={form.password} onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))} />
        </div>
        {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
        {authError && <p style={{ color: 'red', margin: 0 }}>{authError}</p>}
        <Button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</Button>
      </form>
    </div>
  );
}
