import React from 'react';
import SvgFamilia from '../SvgFamilia/SvgFamilia';
import TextoCard from '../TextoCard/TextoCard';
import Styles from './Card.module.css';

const Card = () => {
  return (
    <div className={Styles.Container}>
      <SvgFamilia />
      <TextoCard />
    </div>
  );
};

export default Card;
