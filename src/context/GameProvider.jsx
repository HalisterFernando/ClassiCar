import propTypes from 'prop-types';
import React, { useState } from 'react';

import GameContext from './GameContext';

const INDEXLIMIT = 9;
const TEN = 10;
const TWENTY = 20;

export default function GameProvider(props) {
  const [gameRule, setGameRule] = useState(true);
  const [game, setGame] = useState({
    playerHand: [],
    cpuHand: [],
    next: false,
    index: 0,
    selectedAtt: '',
    playerScore: 0,
    cpuScore: 0,
    round: 0,
    endGame: false,
    playAgain: false,
  });

  const setCards = (shuffle) => {
    const playerHand = [];
    const cpuHand = [];
    if (shuffle.length !== 0) {
      for (let i = 0; i < TEN; i += 1) {
        playerHand.push(shuffle[i]);
      }
      for (let i = TEN; i < TWENTY; i += 1) {
        cpuHand.push(shuffle[i]);
      }
      setGame({ ...game, playerHand, cpuHand });
    }
  };

  const resetIndex = () => game.index > INDEXLIMIT && setGame({ ...game, index: 0 });

  const finishGame = () => game.round === TEN && setGame({ ...game, endGame: true });

  const handleAtt = ({ target: { value } }) => {
    setGame({ ...game, selectedAtt: value });
  };

  const gameResult = () => {
    let result = 'Empate!';
    if (game.playerHand.length !== 0
          && game.cpuHand.length !== 0 && game.index <= INDEXLIMIT) {
      const { attributes: playerAtts } = game.playerHand[game.index];
      const { attributes: cpuAtts } = game.cpuHand[game.index];
      if (playerAtts[game.selectedAtt] > cpuAtts[game.selectedAtt]
            || playerAtts[game.selectedAtt] === 'super trunfo') {
        result = 'Boa!';
      } else if (playerAtts[game.selectedAtt] < cpuAtts[game.selectedAtt]) {
        result = 'Deu ruim!';
      }
    }
    return result;
  };

  const nextRound = () => {
    setGame({ ...game, next: true });
  };

  const nextCard = () => {
    setGame({ ...game, index: game.index + 1, next: false });
  };

  const newGame = () => {
    setGame({ ...game, playAgain: true });
  };

  const setScore = () => {
    if (game.next) {
      const result = gameResult();
      switch (result) {
      case 'Boa!':
        return setGame(
          { ...game,
            round: game.round + 1,
            playerScore: game.playerScore + 1,
          },
        );
      case 'Deu ruim!':
        return setGame(
          { ...game,
            round: game.round + 1,
            cpuScore: game.cpuScore + 1,
          },
        );
      default:
        return setGame({ ...game, round: game.round + 1 });
      }
    }
  };

  const playAgain = () => {
    console.log('PlayAgain');
    setGame({
      playerHand: [],
      cpuHand: [],
      next: false,
      index: 0,
      selectedAtt: game.selectedAtt,
      playerScore: 0,
      cpuScore: 0,
      round: 0,
      endGame: false,
      playAgain: false,
    });
  };

  const Provider = {
    handleAtt,
    setCards,
    resetIndex,
    finishGame,
    gameResult,
    playAgain,
    setScore,
    nextRound,
    nextCard,
    newGame,
    game,
    gameRule,
    setGameRule,
  };
  const { children } = props;
  return (
    <GameContext.Provider value={ Provider }>
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: propTypes.node.isRequired,
};
