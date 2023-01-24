import React from 'react';
import Banner from '../Banner/Banner';
import Especialidades from '../Especialidades/Especialidades';
import Sobre from '../Sobre/Sobre';
import Styles from './Main.module.css';
import imagem from '../Banner/0f13adda42c0d821eeee8c4b36d871be.jpeg';
import Contato from '../Contato/Contato';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <Especialidades />
      <Banner imagem={imagem} />
      <Sobre />
      <Contato />
    </div>
  );
};

export default Main;
