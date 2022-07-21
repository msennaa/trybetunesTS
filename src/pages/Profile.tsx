import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { TunesContext } from '../context/TunesContext';
import '../css/Profile.css';
const user = require('../images/user.png');

export default function Profile() {
  const [active, setActive] = useState(true);
  const [hiddenEdit, setHiddenEdit] = useState(true);
  const { setInputUser, inputUser, inputEmail, setInputEmail } = useContext(TunesContext);
  const minCharacters = 4;

  const handleEditButton = () => {
    setActive(false);
    setHiddenEdit(false);
  };

  const handleSaveButton = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(inputEmail);
    if (emailValidation === false) {
      return global.alert('Digite um email válido');
    }

    if (inputUser.length < minCharacters) {
      return global.alert('Nome deve conter pelo menos 4 caracteres');
    }

    setActive(true);
    setHiddenEdit(true);
  };

  return (
    <div>
      <Header page="Profile" />
      <div className="form-container">
        <div className="edit-button-container">
          <img src={ user } alt="user-logo" />
          {
            hiddenEdit && (
              <button onClick={ handleEditButton } type="button">
                Editar perfil
              </button>
            )
          }
        </div>
        <h4>Nome:</h4>
        <input
          onChange={ ({ target: { value } }) => setInputUser(value) }
          disabled={ active }
          type="text"
          maxLength={ 20 }
          placeholder={inputUser}
        />
        <h4>Email:</h4>
        <input
          onChange={ ({ target: { value } }) => setInputEmail(value) }
          disabled={ active }
          type="email"
          value={ inputEmail }
          placeholder={ inputEmail }
        />
        {
          !hiddenEdit && (
            <button
              onClick={ handleSaveButton }
              disabled={ active }
              className="save-button"
              type="button"
            >
              Salvar
            </button>
          )
        }
      </div>
    </div>
  );
}
