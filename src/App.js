import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fonts from './components/styles/Fonts';
import './index.css';
import Home from './pages/Home';
import Game from './pages/Game';

export default function App() {
  return (
    <Fonts>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/gameplay" element={ <Game /> } />
      </Routes>
    </Fonts>
  );
}
