import React from 'react';
import Styles from './Header.module.css';
import Video from '../Video/Video';
import Texto from '../Texto/Texto';
import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container}>
      <Video />
      <Texto
        texto="Nossa história nos inspira a contribuir para o direito do
        futuro."
        tamanho="1.8rem"
        cor="#eee"
      />
      <RedeSociais posicao="right" />
    </div>
  );
};

export default Header;
