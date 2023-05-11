import propTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const GameContext = createContext();

const INDEX_LIMIT = 9;
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

  const setCards = (cards) => {
    const playerHand = [];
    const cpuHand = [];

    if (cards.length) {
      for (let i = 0; i < TEN; i += 1) {
        playerHand.push(cards[i]);
      }
      for (let i = TEN; i < TWENTY; i += 1) {
        cpuHand.push(cards[i]);
      }
      return setGame({ ...game, playerHand, cpuHand });
    }
  };

  const resetIndex = () => game.index > INDEX_LIMIT && setGame({ ...game, index: 0 });

  const finishGame = () => game.round === TEN && setGame({ ...game, endGame: true });

  const handleAtt = ({ target: { value } }) => {
    setGame({ ...game, selectedAtt: value });
  };

  const gameResult = () => {
    let result = 'Empate!';

    const areHandsLenghtValid = game.playerHand.length > 0 && game.cpuHand.length > 0;
    const isGameIndexValid = game.index <= INDEX_LIMIT;

    if (areHandsLenghtValid && isGameIndexValid) {
      const { attributes: playerAtts } = game.playerHand[game.index];
      const { attributes: cpuAtts } = game.cpuHand[game.index];

      const arePlayerAttsGT = playerAtts[game.selectedAtt] > cpuAtts[game.selectedAtt];
      const arePlayerAttsLT = playerAtts[game.selectedAtt] < cpuAtts[game.selectedAtt];
      const isSuperTrunfo = playerAtts[game.selectedAtt] === 'super trunfo';

      if (arePlayerAttsGT || isSuperTrunfo) {
        result = 'Boa!';
      }

      if (arePlayerAttsLT) {
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
