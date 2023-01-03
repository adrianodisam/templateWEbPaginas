import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';

const Especialidades = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Áreas de Atuação" />
      <Cards />
      <Cards />
    </div>
  );
};

export default Especialidades;
