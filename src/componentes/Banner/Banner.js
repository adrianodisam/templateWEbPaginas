import React from 'react';
import Texto from '../Texto/Texto';
import Styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{
        background: `linear-gradient( #1A1A1A, Transparent 100% , rgba(0, 0, 0, 0)100%), url(${props.imagem})`,
      }}
    >
      <h3>CAPACITAÇÃO E EXPERIÊNCIA</h3>
      <Texto
        texto="Somos especialistas em Direito Criminal."
        tamanho="1.8rem"
        cor="#ffc1c1"
      />
    </div>
  );
};

export default Banner;
