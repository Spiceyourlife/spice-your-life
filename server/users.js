import bcrypt from 'bcryptjs';

export const users = [
  {
    id: '1',
    email: 'marcio@spiceyourlife.pt',
    passwordHash: bcrypt.hashSync('Inesfilipa23', 10),
    role: 'admin',
    name: 'Marcio',
  },
  {
    id: '2',
    email: 'hotel@example.com',
    passwordHash: bcrypt.hashSync('hotel123', 10),
    role: 'hotel',
    name: 'Hotel Cliente',
  },
];

export const orders = [
  {
    id: 'order-1',
    created_date: new Date().toISOString(),
    created_by: 'hotel@example.com',
    delivery_zone: 'Albufeira',
    status: 'pending',
    total: 89.50,
    items: [
      { quantity: 2, product_name: 'Entrecosto', total: 19.60 },
      { quantity: 1, product_name: 'Bife da Vazia', total: 69.90 },
    ],
  },
];
