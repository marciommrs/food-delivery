import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

const Navbar: React.FC = () => (
  <nav className="main-navbar">
    <Logo />
    <a href="home" className="logo-text">Food Delivery</a>
  </nav>
);

export default Navbar;
