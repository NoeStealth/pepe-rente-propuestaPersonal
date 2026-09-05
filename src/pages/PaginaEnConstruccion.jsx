
function PaginaEnConstruccion({ titulo }) {
  return (
    <div className="wrap" style={{ padding: "80px 0", textAlign: "center" }}>
      <h1>{titulo}</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Esta página se desarrollará en un próximo sprint.
      </p>
    </div>
  );
}

export default PaginaEnConstruccion;
