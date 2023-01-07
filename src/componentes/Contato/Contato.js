import React from 'react';
import CardContato from '../CardContato/CardContato';
import Formulario from '../Formulario/Formulario';
import Styles from './Contato.module.css';

const Contato = (props) => {
  return (
    <div className={Styles.Container}>
      <Formulario />
      <CardContato />
    </div>
  );
};

export default Contato;
