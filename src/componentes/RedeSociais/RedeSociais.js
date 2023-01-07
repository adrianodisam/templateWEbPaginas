import React from 'react';
import SvgFacebook from '../SvgFacebook/SvgFacebook';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgLinkedin from '../SvgLinkedin/SvgLinkedin';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{ justifyContent: `${props.posicao}` }}
    >
      <SvgFacebook />
      <SvgInstagram />
      <SvgLinkedin />
    </div>
  );
};

export default RedeSociais;
