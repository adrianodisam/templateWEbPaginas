import React from 'react';

import Styles from './Button.module.css';
const Button = (props) => {
  return (
    <div className={Styles.Container} style={{ height: `${props.largura}` }}>
      <div
        style={{
          background: `${props.cor}`,
          color: `${props.corFonte}`,
          width: `${props.tamanho}`,
        }}
      >
        {props.nome}
      </div>
      {props.svg}
    </div>
  );
};

export default Button;
