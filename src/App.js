import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Gameplay from './components/Gameplay';
import Header from './components/Header';
import Rules from './components/Rules';
import Fonts from './components/styles/Fonts';
import { Container } from './components/styles/GameplayStyles';

import './index.css';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Fonts>
            <Home />
          </Fonts>
        }
      />
      <Route
        exatc
        path="/gameplay"
        element={
          <Fonts>
            <Container >
              <Rules />
              <Header />
              <Gameplay />
              <Footer />
            </Container>
              
          </Fonts>
        }
      />

    </Routes>
  );
}
