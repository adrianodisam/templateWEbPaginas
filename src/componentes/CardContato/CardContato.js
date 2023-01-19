import React from 'react';
import Styles from './CardContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
import imagemTelefone from '../Contato/telefone.png';
import RedeSociais from '../RedeSociais/RedeSociais';

const CardContato = () => {
  const tel = ['(11)99953-7132'];
  const whats = ['(11)99953-7132'];

  return (
    <div className={Styles.Container}>
      <div>
        <h1>
          <lord-icon
            src="https://cdn.lordicon.com/elzslyvl.json"
            trigger="hover"
            style={{ width: '100px', height: '100px' }}
          ></lord-icon>
          <br />
          <small>Rua jussara 64 , parque pirajussara Embu das artes - Sp</small>
        </h1>
      </div>

      <ul>
        {tel.map((telefone) => (
          <li>
            <img src={imagemTelefone} alt="Telefone" />
            {telefone}
          </li>
        ))}
        {whats.map((whatsapp) => (
          <li>
            <img src={imagem} alt="Logo whatsapp" />
            {whatsapp}
          </li>
        ))}
      </ul>
      <RedeSociais posicao="right" />
    </div>
  );
};

export default CardContato;
