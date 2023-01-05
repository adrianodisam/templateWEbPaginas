import React from 'react';
import SvgBalanca from '../SvgBalanca/SvgBalanca';
import TextoCard from '../TextoCard/TextoCard';
import Styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={Styles.Container}>
      <SvgBalanca />
      <TextoCard />
    </div>
  );
};

export default Card;
