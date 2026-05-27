export const base44 = {
  entities: {
    Product: {
      filter: async () => [
        { id: '1', name: 'Bife da Vazia', price_consumer: 12.50, price_hotel: 10.50, unit: 'kg', image_url: '', available: true, category: 'novilho', promoted: false },
        { id: '2', name: 'Entrecosto', price_consumer: 9.80, price_hotel: 8.20, unit: 'kg', image_url: '', available: true, category: 'suino', promoted: true, promo_label: 'Oferta da Semana' },
      ],
      list: async () => [
        { id: '1', name: 'Bife da Vazia', price_consumer: 12.50, price_hotel: 10.50, unit: 'kg', image_url: '', available: true, category: 'novilho', promoted: false },
      ],
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
    },
    Order: {
      filter: async () => [],
      create: async () => ({}),
    },
    HotelClient: {
      filter: async () => [],
      create: async () => ({ created_date: new Date().toISOString(), status: 'pending' }),
      list: async () => [],
      update: async () => ({}),
    },
  },
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' }),
    },
  },
};
