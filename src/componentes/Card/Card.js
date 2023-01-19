import React from 'react';
import Styles from './Card.module.css';
import Aos from 'aos';
const Card = (props) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-zoom-in" className={Styles.Container}>
      {props.icone}
      <h3>{props.titulo}</h3>
      <h4>{props.texto}</h4>
    </div>
  );
};

export default Card;
