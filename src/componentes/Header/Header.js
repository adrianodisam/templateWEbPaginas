import React from 'react';
import Styles from './Header.module.css';
import Video from '../Video/Video';
import Button from '../Button/Button';
import Texto from '../Texto/Texto';

const Header = () => {
  return (
    <div className={Styles.Container}>
      <Video />
      <Texto
        texto="Nossa história nos inspira a contribuir para o direito do
        futuro."
        tamanho="1.8rem"
        cor="#555"
      />

      <Button nome="Como podemos ajudar ?" />
    </div>
  );
};

export default Header;
