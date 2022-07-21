import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TunesContextProvider } from './context/TunesContext';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';

export default function App() {
  return (
    <TunesContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/search" exact component={ Search } />
          <Route path="/album/:id" exact component={ Album } />
          <Route path="/favorites" exact component={ Favorites } />
          <Route path="/profile" exact component={ Profile } />
        </Switch>
    </BrowserRouter>
    </TunesContextProvider>
  )
}
