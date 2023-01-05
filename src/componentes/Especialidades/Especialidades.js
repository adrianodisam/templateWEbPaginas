import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Button from '../Button/Button';
const Especialidades = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Áreas de Atuação" />
      <TextoCorpo texto="Somos especializados no atendimento a pessoas físicas e jurídicas, com enfoque no Direito do Trabalho, Direito Tributário, Direito Empresarial e Direito Administrativo." />
      <Button nome="Agende um horário" cor="#555" corFonte="#eee" />
      <Cards />
    </div>
  );
};

export default Especialidades;
