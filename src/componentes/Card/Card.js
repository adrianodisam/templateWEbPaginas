import React from 'react';
import SvgBalanca from '../SvgBalanca/SvgBalanca';
import Styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={Styles.Container}>
      <SvgBalanca />
      <h3>{props.titulo}</h3>
      <h4>{props.texto}</h4>
    </div>
  );
};

export default Card;
