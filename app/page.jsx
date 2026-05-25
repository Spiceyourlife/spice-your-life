const categorias = [
  { nome: "Carne de Porco", preco: "desde 6,99€/kg" },
  { nome: "Carne de Novilho", preco: "desde 10,99€/kg" },
  { nome: "Aves", preco: "desde 4,99€/kg" },
  { nome: "Caprinos", preco: "sob consulta" },
];

export default function Home() {
  return (
    <main style={estilos.pagina}>
      <section style={estilos.hero}>
        <p style={estilos.badge}>SPICE YOUR LIFE</p>
        <h1 style={estilos.titulo}>Talho online em Portimão</h1>
        <p style={estilos.subtitulo}>
          Escolha a sua carne, indique o corte e finalize por WhatsApp em poucos
          minutos.
        </p>
        <a href="#shop" style={estilos.botaoPrincipal}>
          Ver loja
        </a>
      </section>

      <section id="shop" style={estilos.shop}>
        <div style={estilos.shopCabecalho}>
          <h2 style={estilos.tituloSecao}>Loja</h2>
          <p style={estilos.textoSecao}>
            Esta secção corresponde ao destino do link com âncora
            <strong> #shop</strong>.
          </p>
        </div>

        <div style={estilos.grelha}>
          {categorias.map((categoria) => (
            <article key={categoria.nome} style={estilos.cartao}>
              <h3 style={estilos.nomeCategoria}>{categoria.nome}</h3>
              <p style={estilos.preco}>{categoria.preco}</p>
              <button type="button" style={estilos.botaoSecundario}>
                Pedir no WhatsApp
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const estilos = {
  pagina: {
    backgroundColor: "#0f0f0f",
    minHeight: "100vh",
    color: "#fff",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "980px",
    margin: "0 auto",
  },
  hero: {
    background: "#1b1b1b",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: "22px",
  },
  badge: {
    margin: 0,
    color: "#ff9f9f",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1.3px",
    fontWeight: "bold",
  },
  titulo: {
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ff2b2b",
    fontSize: "38px",
  },
  subtitulo: {
    marginTop: 0,
    marginBottom: "18px",
    color: "#d5d5d5",
    lineHeight: 1.5,
    maxWidth: "680px",
  },
  botaoPrincipal: {
    display: "inline-block",
    background: "#ff2b2b",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
  shop: {
    background: "#1b1b1b",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
  },
  shopCabecalho: {
    marginBottom: "14px",
  },
  tituloSecao: {
    marginTop: 0,
    marginBottom: "10px",
  },
  textoSecao: {
    margin: 0,
    color: "#cfcfcf",
  },
  grelha: {
    marginTop: "16px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "14px",
  },
  cartao: {
    border: "1px solid #ff2b2b",
    borderRadius: "12px",
    padding: "14px",
    background: "#121212",
  },
  nomeCategoria: {
    marginTop: 0,
    marginBottom: "8px",
  },
  preco: {
    marginTop: 0,
    marginBottom: "12px",
    color: "#ffb2b2",
    fontWeight: "bold",
  },
  botaoSecundario: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #ff2b2b",
    borderRadius: "8px",
    padding: "9px 10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
