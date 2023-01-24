import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Button from '../Button/Button';
import SvgSeta from '../SvgSeta/SvgSeta';
import Card from '../Card/Card';
const Especialidades = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Áreas de Atuação" />
      <TextoCorpo texto="Somos especializados no atendimento a pessoas físicas e jurídicas, com enfoque no Direito do Trabalho, Direito Tributário, Direito Empresarial e Direito Administrativo." />
      <Button
        nome="Agende um horário"
        tamanho="11rem"
        cor="#ef8354"
        corFonte="#eee"
        svg={<SvgSeta />}
        largura="1rem"
      />

      {/* <Cards /> */}
      <Card
        anima="fade-right"
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
        anima="fade-down"
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
        anima="fade-left"
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

export default Especialidades;
