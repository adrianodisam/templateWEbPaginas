import React from 'react';
import Texto from '../Texto/Texto';
import Styles from './TextoCard.module.css';

const TextoCard = () => {
  return (
    <div className={Styles.Container}>
      <Texto texto="FAMÍLIA E SUCESSÕES" tamanho="1.8rem" cor="#555" />
      <h1>
        Esta é uma breve descrição que elabora o serviço que você mencionou
        acima.
      </h1>
    </div>
  );
};

export default TextoCard;
