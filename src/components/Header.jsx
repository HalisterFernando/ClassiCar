import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import { GameContext } from '../context/GameProvider';
import { HeaderContainer, ContactBtn } from './styles/HeaderStyles';

export default function Header() {
  const { setRule } = useContext(CardContext);
  const { setGameRule } = useContext(GameContext);

  const isGameplay = window.location.href.includes('gameplay');

  const renderRules = () => (isGameplay ? setGameRule(true) : setRule(true));

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <h1>ClassiCar Trunfo</h1>
      <div>
        <ContactBtn game={ isGameplay } type="button" onClick={ () => scrollToContact() }>
          Contato
        </ContactBtn>
        <button type="button" onClick={ () => renderRules() }>
          Regras
        </button>
      </div>
    </HeaderContainer>
  );
}
