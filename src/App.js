import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import CardFilter from './components/CardFilter';
import Footer from './components/Footer';
import Form from './components/Form';
import Gameplay from './components/Gameplay';
import Header from './components/Header';
import Rules from './components/Rules';
import Container from './components/styles/Fonts';
import FormContainer from './components/styles/FormContainer';
import CardPreview from './components/styles/PreviewStyles';

import './index.css';

export default function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Container>
            <Rules />
            <Header />
            <FormContainer>
              <Form />
              <CardPreview>
                <h1>Pré-visualização</h1>
                <Card />
              </CardPreview>
            </FormContainer>
            <CardFilter />
            <Footer />
          </Container>
        }
      />
      <Route
        exatc
        path="/gameplay"
        element={
          <Container>
            <Rules />
            <Header />
            <Gameplay />
            <Footer />
          </Container>
        }
      />
    </Routes>
  );
}
