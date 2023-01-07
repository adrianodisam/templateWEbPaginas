import React from 'react';
import Styles from './Formulario.module.css';

const Formulario = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objEmail = {
      name,
      email,
      mensagem,
    };

    console.log(objEmail);
  };
  return (
    <div className={Styles.Container}>
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
    </div>
  );
};
export default Formulario;
