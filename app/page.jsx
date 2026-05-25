const ficheirosImportantes = [
  "src: código da app React",
  "cliente-preview.html: pré-visualização completa",
  "spice-your-life-partilhar.html: versão num único ficheiro para partilhar",
  "publicacao-online: versão pronta para subir para cPanel",
  "publicacao-online.zip: pacote para upload no cPanel",
];

export default function Home() {
  return (
    <main style={estilos.pagina}>
      <section style={estilos.cartao}>
        <p style={estilos.etiqueta}>SPICE YOUR LIFE - CÓDIGO ATUAL</p>
        <h1 style={estilos.titulo}>Estado da versão de publicação</h1>
        <p style={estilos.texto}>
          Esta pasta contém uma cópia do código e da versão de publicação criada
          até agora.
        </p>
      </section>

      <section style={estilos.cartao}>
        <h2 style={estilos.subtitulo}>Ficheiros importantes</h2>
        <ul style={estilos.lista}>
          {ficheirosImportantes.map((ficheiro) => (
            <li key={ficheiro} style={estilos.itemLista}>
              {ficheiro}
            </li>
          ))}
        </ul>
      </section>

      <section style={estilos.cartao}>
        <h2 style={estilos.subtitulo}>Registo</h2>
        <p style={estilos.texto}>Criado em: 2026-05-19 23:23</p>
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
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gap: "16px",
  },
  cartao: {
    background: "#1b1b1b",
    border: "1px solid #2a2a2a",
    borderRadius: "14px",
    padding: "22px",
  },
  etiqueta: {
    margin: 0,
    color: "#ff7f7f",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1.3px",
    fontWeight: "bold",
  },
  titulo: {
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ff2b2b",
    fontSize: "34px",
  },
  subtitulo: {
    marginTop: 0,
    marginBottom: "12px",
    fontSize: "24px",
  },
  texto: {
    margin: 0,
    color: "#d6d6d6",
    lineHeight: 1.5,
  },
  lista: {
    margin: 0,
    paddingLeft: "20px",
    display: "grid",
    gap: "8px",
    color: "#e4e4e4",
  },
  itemLista: {
    lineHeight: 1.45,
  },
};
