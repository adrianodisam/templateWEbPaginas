import React from 'react';
import Card from '../Card/Card';
import Styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={Styles.Container}>
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
