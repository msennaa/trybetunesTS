import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TunesContext } from '../context/TunesContext';
import '../css/Header.css';
const user = require('../images/user.png');
const logo = require('../images/headphone.png');

interface Props  {
  page: string,
}


export default function Header(props: Props) {
  const { inputUser } = useContext(TunesContext);
  const history = useHistory();
  const { page } = props;

  const relog = () => {
    if (inputUser === '' || !inputUser) {
      global.alert('Favor relogar para utilizar a aplicação');
      return history.push('/');
    }
  };

  useEffect(() => {
    relog();
  }, []);

  return (
    <div className="Header">
      <div className="Header-user-container">
        <img src={ logo } alt="logo" />
        <div className="user-logo">
          <img src={ user } alt="logo" />
          <p>{`${inputUser}`}</p>
        </div>
      </div>
      <div className="Header-path-container">
        <button
          disabled={ page === 'Search' }
          type="button"
          onClick={ () => history.push('/search') }
        >
          Pesquisar
        </button>
        <button
          disabled={ page === 'Favorites' }
          type="button"
          onClick={ () => history.push('/favorites') }
        >
          Favoritas
        </button>
        <button
          disabled={ page === 'Profile' }
          type="button"
          onClick={ () => history.push('/profile') }
        >
          Perfil
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};
