import React from 'react';
import Styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={Styles.Container}>
      {props.icone}
      <h3>{props.titulo}</h3>
      <h4>{props.texto}</h4>
    </div>
  );
};

export default Card;
