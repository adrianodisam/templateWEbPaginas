import React from 'react';
import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Sobre nós" />
      <TextoCorpo
        texto="
        A Escritório Advogados é formada por advogados com especialização,   pós graduação e mestrado nas mais importantes universidades públicas  e privadas do Brasil, passando por constantes atualizações em seus currículos para um melhor atendimento ao público alvo de nosso escritório."
      />
    </div>
  );
};

export default Sobre;
