import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const Navbar: React.FC = () => (
  <nav className="main-navbar">
    <Logo />
    <Link to="/" className="logo-text">
      Food Delivery
    </Link>
  </nav>
);

export default Navbar;
