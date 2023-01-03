import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import '../Navbar/Navbar.css';
import imagem from '../Logo/cc.png';

function Navbar() {
  const navRef = useRef();
  const titulos = ['Home', 'Especialidades', 'O Escritório', 'Contato'];

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <Logo logo={imagem} tamanho="8rem" />

      <nav ref={navRef}>
        {titulos.map((titulo) => (
          <a href="/#">{titulo}</a>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
