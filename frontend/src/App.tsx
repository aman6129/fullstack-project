import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ImageSearchPage, FavoritesPage } from './pages';
import { NavBar } from './components';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
          <Route path='/'>
            <ImageSearchPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
