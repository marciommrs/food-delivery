const StepsHeaders: React.FC = () => (
  <header className="orders-steps-container">
    <div className="orders-steps-content">
      <h1 className="steps-title">
        SIGA AS
        {' '}
        <br />
        {' '}
        ETAPAS
      </h1>
      <ul className="steps-items">
        <li>
          <span className="steps-number">1</span>
          Selecione os produtos e localização.
        </li>
        <li>
          <span className="steps-number">2</span>
          Depois clique em
          <strong> &quot;ENVIAR PEDIDO&quot;</strong>
          .
        </li>
      </ul>
    </div>
  </header>
);

export default StepsHeaders;
