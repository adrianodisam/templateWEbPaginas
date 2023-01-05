import React from 'react';
import Card from '../Card/Card';
import Styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={Styles.Container}>
      <Card texto="Assistência às questões de natureza societária, na elaboração e planejamento dos mais diferentes contratos comerciais." />
      <Card />
    </div>
  );
};

export default Cards;
