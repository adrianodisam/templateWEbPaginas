import React from 'react';
import Styles from './Formulario.module.css';
import emailjs from '@emailjs/browser';
import Enviado from '../Enviado/Enviado';

const Formulario = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  const [status, setStatus] = React.useState('true');

  const onSubmit = async (event) => {
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
        'service_gq3kkr4',
        'template_x3u24e6',
        templatParams,
        'QlVUl2MGU8m66qclo',
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
  console.log(window.env.REACT_APP_SERVICE_EMAIL);
  return (
    <div className={Styles.Container}>
      {status ? (
        <form onSubmit={onSubmit} noValidate>
          <lord-icon
            src="https://cdn.lordicon.com/tkgyrmwc.json"
            trigger="loop"
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
