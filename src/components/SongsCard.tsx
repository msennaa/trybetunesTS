import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TunesContext } from '../context/TunesContext';
import '../css/SongCard.css';

interface Props {
  trackName: string,
  trackId: number,
  previewUrl: string,
  artistName: string,
}


export default function SongsCard(props: Props) {
  const { trackName, previewUrl, trackId, artistName } = props;
  const { favoriteMusics, setFavoriteMusics } = useContext(TunesContext);

  const sendFavoriteMusic = (newMusic:Props) => {
    setFavoriteMusics([...favoriteMusics, newMusic]);
  };


  const submitMusic = () => {
    const newMusic = {
      trackName,
      previewUrl,
      trackId,
      artistName,
    };

    sendFavoriteMusic(newMusic);
  };

  const removeFavoriteMusic = () => {
    const validate = favoriteMusics.filter((music:any) => music.trackId !== trackId);
    return setFavoriteMusics(validate);
  };

  const validate = favoriteMusics.some((music:any) => music.trackId === trackId);

  const path = window.location.pathname;

  return (
    <div className="song-item">
      {
        path === '/favorites' ? (
          <h1>{artistName}</h1>
        ) : (
          <>
          </>
        )
      }
      <h4>{trackName}</h4>
      <div className="audio-container">
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
        </audio>
        {
          validate ? (
            <button className="fav-button" type="button" onClick={ removeFavoriteMusic }>
              ❤️
            </button>
          ) : (
            <button className="fav-button" type="button" onClick={ submitMusic }>
              🤍
            </button>
          )
        }
      </div>

    </div>
  );
}

SongsCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
};
