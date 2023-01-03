import React from 'react';
import Styles from './Button.module.css';
const Button = (props) => {
  return (
    <div className={Styles.Container}>
      <div>{props.nome}</div>
    </div>
  );
};

export default Button;
