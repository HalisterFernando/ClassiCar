import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fonts from './components/styles/Fonts';
import './index.css';
import Home from './pages/Home';
import Game from './pages/Game';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fonts>
            <Home />
          </Fonts>
        }
      />
      <Route
        path="/gameplay"
        element={
          <Fonts>
            <Game />
          </Fonts>
        }
      />
    </Routes>
  );
}
