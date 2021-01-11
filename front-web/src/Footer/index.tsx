import './styles.css';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Youtube } from './youtube.svg';

const Footer: React.FC = () => (
  <footer className="main-footer">
    <div className="footer-icons">
      <a
        href="https://www.youtube.com/user/marciommrsasdf/featured"
        target="_new"
      >
        <Youtube />
      </a>
      <a
        href="https://www.linkedin.com/in/marcio-marques-rosa-82072430/"
        target="_new"
      >
        <Linkedin />
      </a>
      <a href="https://www.instagram.com/marciommrs/" target="_new">
        <Instagram />
      </a>
    </div>
    Copyright 2020 Green Tecnologies. All Rights Reserved.
  </footer>
);

export default Footer;
