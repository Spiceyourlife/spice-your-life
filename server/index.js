import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users, orders } from './users.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '8h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.user = payload;
    next();
  });
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ message: 'Acesso negado' });
    }
    next();
  };
}

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatch) return res.status(401).json({ message: 'Credenciais inválidas' });

  const token = generateToken(user);
  res.json({ token, user: { email: user.email, role: user.role, name: user.name } });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

app.get('/api/orders', authenticateToken, (req, res) => {
  const userOrders = orders.filter(order => order.created_by === req.user.email);
  res.json(userOrders);
});

app.get('/api/hotel-clients', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json([
    { id: 'client-1', business_name: 'Hotel Mar Azul', contact_name: 'Carlos Silva', phone: '+351 912 345 678', email: 'hotel@example.com', zone: 'Albufeira', nif: '500000000', status: 'pending', created_date: new Date().toISOString(), notes: 'Cliente novo para albufeira' },
  ]);
});

app.get('/api/products', authenticateToken, (req, res) => {
  res.json([
    { id: '1', name: 'Bife da Vazia', price_consumer: 12.5, price_hotel: 10.5, unit: 'kg', image_url: '', available: true, category: 'novilho', promoted: false },
    { id: '2', name: 'Entrecosto', price_consumer: 9.8, price_hotel: 8.2, unit: 'kg', image_url: '', available: true, category: 'suino', promoted: true, promo_label: 'Oferta da Semana' },
  ]);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend de autenticação a correr em http://localhost:${PORT}`);
});
