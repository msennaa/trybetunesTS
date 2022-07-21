import React, { useContext } from 'react';
import Header from '../components/Header';
import SongsCard from '../components/SongsCard';
import { TunesContext } from '../context/TunesContext';
import '../css/Favorite.css';

export default function Favorites() {
  const { favoriteMusics } = useContext(TunesContext);

  return (
    <div>
      <Header page="Favorites" />
      <h1 className="favorite-title">Musicas Favoritas</h1>
      <div className="favorite-container">
        {
          favoriteMusics.length === 0 ? (
            <h1>Nenhuma musica favoritada</h1>
          ) : favoriteMusics.map(({ trackName, previewUrl, trackId, artistName }, index) => (
            <SongsCard
              key={ index }
              trackName={ trackName }
              previewUrl={ previewUrl }
              trackId={ trackId }
              artistName={ artistName }
            />
          ))
        }
      </div>
    </div>
  );
}
