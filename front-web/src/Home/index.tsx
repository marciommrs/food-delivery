import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';

const Home: React.FC = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            <p>Faça o seu pedido</p>
            <p>que entregamos</p>
            <p>pra você!!!</p>
          </h1>
          <h3 className="home-subtitle">
            <p>Escolha o seu pedido e em poucos minutos</p>
            <p>levaremos na sua porta</p>
          </h3>
          <Link to="/orders" className="home-btn-order">
            FAZER PEDIDO
          </Link>
        </div>
        <div className="home-image">
          <MainImage />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
