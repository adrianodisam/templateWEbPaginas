import React from 'react';
import Card from '../Card/Card';
import Styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={Styles.Container}>
      <Card
        titulo="Direito Empresarial"
        texto="Assistência às questões de natureza societária, na elaboração e planejamento dos mais diferentes contratos comerciais."
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/gqdnbnwt.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
      <Card
        titulo="Direito Administrativo"
        texto="Assessoria e consultoria jurídica para empresas e entidades privadas licitantes, organizando os documentos necessários."
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/fhtaantg.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
      <Card
        titulo="Direito do Trabalho"
        texto="Atendimento consultivo de toda a legislação trabalhista, representando os clientes em suas procuradorias."
        icone={
          <lord-icon
            src="https://cdn.lordicon.com/raayvuis.json"
            trigger="hover"
            style={{ width: '250px', height: '250px' }}
          ></lord-icon>
        }
      />
    </div>
  );
};

export default Cards;
