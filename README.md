<<<<<<< HEAD
# spice-your-life
=======
# Spice Your Life

Este projecto foi preparado para correr como aplicação React + Vite.

## Passos para executar localmente

1. Abra o terminal na pasta do projecto:

```bash
cd "c:\Users\HP\Desktop\spice-your-life-code\publicacao-online"
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o backend de autenticação e API:

# Spice Your Life

Este projecto foi preparado para correr como aplicação React + Vite.

## Passos para executar localmente

1. Abra o terminal na pasta do projecto:

```bash
cd "c:\Users\HP\Desktop\spice-your-life-code\publicacao-online"
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o backend de autenticação e API:

```bash
npm run server
```

4. Inicie o frontend Vite:

```bash
npm run dev
```

5. Abra o URL fornecido no terminal (normalmente `http://localhost:5173`).

## O que foi adicionado/atualizado

- `package.json` com dependências React, Vite e bibliotecas usadas no código.
- `vite.config.js` com `base` configurado para publicação relativa.
- `src/main.jsx` e `src/App.jsx` como ponto de entrada da app.
- `src/index.css` estilos básicos e integração com Tailwind.
- `context/CartContext.jsx` para o carrinho.
- `lib/AuthContext.jsx` com autenticação JWT e login simulado.
- `server/index.js` com um backend Express (para preview local).
- `server/users.js` com utilizadores de exemplo e roles.
- `api/base44Client.js` com stubs para os endpoints usados.
- `components/ui/*` com componentes de UI simples (`button`, `input`, `label`, `select`, `badge`, `separator`, `skeleton`).
- `components/cart/CartItem.jsx` para listar itens do carrinho.
- `pages/Cart.jsx`, `pages/Checkout.jsx`, `pages/Orders.jsx`, `pages/AdminHotelClients.jsx`, `components/shop/HotelGate.jsx` com as correções solicitadas.

## Deploy em GitHub Pages (opção usada aqui)

Para publicar rapidamente no GitHub Pages, copie o conteúdo de `dist/` para a pasta `docs/` e faça commit/push para a branch `main` (o GitHub Pages pode servir `main/docs`). O repositório também tem um script `npm run deploy` que usa `gh-pages`.

## Notas finais

Antes de iniciar, copie `.env.example` para `.env` e ajuste `JWT_SECRET` se desejar.

Para testar localmente, use uma das credenciais de exemplo:

- marcio@spiceyourlife.pt / Inesfilipa23
- hotel@example.com / hotel123

Se precisar, eu posso continuar e finalizar o deploy no seu repositório (já tentei copiar `dist` para `docs/` e houve necessidade de resolver conflitos).
