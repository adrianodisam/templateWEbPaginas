import React from 'react';
import Card from '../Card/Card';
import Styles from './Cards.module.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Cards = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={Styles.Container}>
      <Card
        data-aos="bottom-top"
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
        data-aos="fade-right"
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
        data-aos="fade-left"
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
