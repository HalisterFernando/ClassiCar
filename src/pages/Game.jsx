import React from 'react';
import { Container } from '../components/styles/GameplayStyles';
import Rules from '../components/Rules';
import Header from '../components/Header';
import Gameplay from '../components/Gameplay';
import Footer from '../components/Footer';

export default function Game() {
  return (
    <Container>
      <Rules />
      <Header />
      <Gameplay />
      <Footer />
    </Container>
  );
}
