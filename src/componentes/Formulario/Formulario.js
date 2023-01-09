import React from 'react';
import Styles from './Formulario.module.css';
import emailjs from '@emailjs/browser';
import Enviado from '../Enviado/Enviado';
import dotenv from 'dotenv';

dotenv.config();
const Formulario = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [status, setStatus] = React.useState('true');

  const onSubmit = async (event) => {
    debugger;
    event.preventDefault();
    if ((name === '') | (email === '') | (mensagem === '')) {
      alert('Preencha todos os campos');
      return;
    }
    const templatParams = {
      from_name: name,
      menssage: mensagem,
      email: email,
    };

    emailjs
      .send(
        process.env.SERVICE_EMAIL,
        process.env.TEMPLATE_EMAIL,
        templatParams,
        process.env.API_CHAVE_KEY,
      )
      .then(
        (response) => {
          console.log('Email enviado', response.status, response.text);
          setEmail('');
          setName('');
          setMensagem('');
          setStatus(false);
        },
        (err) => {
          console.log('Erro:', err);
        },
      );
  };
  console.log(process.env.SERVICE_EMAIL);
  return (
    <div className={Styles.Container}>
      {status ? (
        <form onSubmit={onSubmit} noValidate>
          <lord-icon
            src="https://cdn.lordicon.com/tkgyrmwc.json"
            trigger="hover"
            style={{ width: '70px', height: '70px' }}
          ></lord-icon>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Nome</strong>
            </label>
            <input
              required
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Digite seu email</strong>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="form-control"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2">
              <strong>Mensagem</strong>
            </label>
            <textarea
              type="text"
              name="mensagem"
              value={mensagem}
              className="form-control"
              onChange={(event) => {
                setMensagem(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      ) : (
        <Enviado />
      )}
    </div>
  );
};
export default Formulario;
