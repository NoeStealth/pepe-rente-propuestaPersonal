import "./InfoCards.css";

function FormasDePago() {
  return (
    <div className="info-card">
      <h3>Formas de pago</h3>
      <ul>
        <li>Efectivo</li>
        <li>Transferencia</li>
        <li>Visa, MasterCard, American Express</li>
        <li>Depósito</li>
      </ul>
      <div className="online-note">También puedes reservar en línea</div>
    </div>
  );
}

export default FormasDePago;
