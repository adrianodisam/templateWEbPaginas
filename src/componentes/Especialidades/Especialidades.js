import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Button from '../Button/Button';
import SvgSeta from '../SvgSeta/SvgSeta';
const Especialidades = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Áreas de Atuação" />
      <TextoCorpo texto="Somos especializados no atendimento a pessoas físicas e jurídicas, com enfoque no Direito do Trabalho, Direito Tributário, Direito Empresarial e Direito Administrativo." />
      <Button
        nome="Agende um horário"
        tamanho="11rem"
        cor="#ef8354"
        corFonte="#eee"
        svg={<SvgSeta />}
        largura="1rem"
      />

      <Cards />
    </div>
  );
};

export default Especialidades;
