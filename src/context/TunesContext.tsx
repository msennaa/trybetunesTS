import { createContext, ReactNode, useState } from 'react';

type TunesContextProps = {
  children: ReactNode;
}

type TunesContextType = {
  inputUser: string;
  setInputUser: (newState: string) => void;
  favoriteMusics: any[];
  setFavoriteMusics: (newState: any) => void;
  inputEmail: string;
  setInputEmail: (newState: string) => void;
};

const initialValue = {
  inputUser: '',
  setInputUser: () => {},
  inputEmail: '',
  setInputEmail: () => {},
  favoriteMusics: [],
  setFavoriteMusics: () => {},
}

export const TunesContext = createContext<TunesContextType>(initialValue);

export const TunesContextProvider = ({ children }: TunesContextProps) => {
  const [inputUser, setInputUser] = useState(initialValue.inputUser);
  const [favoriteMusics, setFavoriteMusics] = useState(initialValue.favoriteMusics);
  const [inputEmail, setInputEmail] = useState(initialValue.inputEmail);

  const store = {
    inputUser, setInputUser, setFavoriteMusics,
    favoriteMusics, inputEmail, setInputEmail
  }

  return (
    <TunesContext.Provider value={ store }>
        { children }
    </TunesContext.Provider>
  )
}

