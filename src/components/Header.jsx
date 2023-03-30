import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import { GameContext } from '../context/GameProvider';
import HeaderContainer from './styles/HeaderStyles';

export default function Header() {
  const { setRule } = useContext(CardContext);
  const { setGameRule } = useContext(GameContext);

  const renderRules = () => {
    const regex = /gameplay/gi;
    const url = window.location.href;
    return regex.test(url) ? setGameRule(true) : setRule(true);
  };

  return (
    <HeaderContainer>
      <h1>ClassiCar Trunfo</h1>
      <button type="button" onClick={ () => renderRules() }>
        Regras
      </button>
    </HeaderContainer>
  );
}
