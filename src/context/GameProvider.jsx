import propTypes from 'prop-types';
import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const INDEX_LIMIT = 9;
const ZERO = 0;
const TEN = 10;
const TWENTY = 20;

export default function GameProvider(props) {
  const [gameRule, setGameRule] = useState(true);
  const [game, setGame] = useState({
    playerHand: [],
    cpuHand: [],
    next: false,
    index: ZERO,
    selectedAtt: '',
    playerScore: ZERO,
    cpuScore: ZERO,
    round: ZERO,
    endGame: false,
    playAgain: false,
  });

  const setCards = (cards) => {
    const playerHand = [];
    const cpuHand = [];

    if (cards.length) {
      for (let i = ZERO; i < TEN; i += 1) {
        playerHand.push(cards[i]);
      }
      for (let i = TEN; i < TWENTY; i += 1) {
        cpuHand.push(cards[i]);
      }      
      setGame({ ...game, playerHand, cpuHand });
    }

    return;
  };

  const resetIndex = () => game.index > INDEX_LIMIT && setGame({ ...game, index: ZERO });

  const finishGame = () => game.round === TEN && setGame({ ...game, endGame: true });

  const handleAtt = ({ target: { value } }) => {
    setGame({ ...game, selectedAtt: value });
  };

  const gameResult = () => {
    let result = 'Empate!';

    const areHandsLenghtValid = game.playerHand.length > ZERO && game.cpuHand.length > ZERO;
    const isGameIndexValid = game.index <= INDEX_LIMIT;

    if (areHandsLenghtValid && isGameIndexValid) {
      const { attributes: playerAtts } = game.playerHand[game.index];
      const { attributes: cpuAtts } = game.cpuHand[game.index];

      const arePlayerAttsGreaterThan = playerAtts[game.selectedAtt] > cpuAtts[game.selectedAtt];
      const arePlayerAttsLesserThan = playerAtts[game.selectedAtt] < cpuAtts[game.selectedAtt];
      const isSuperTrunfo = player[game.selectedAtt] === 'super trunfo';

      if (arePlayerAttsGreaterThan || isSuperTrunfo) {
        result = 'Boa!';
      } else if (arePlayerAttsLesserThan) {
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
    const result = gameResult();

    const resultsObj = {
      'Boa!': setGame(
        { ...game,
          round: game.round + 1,
          playerScore: game.playerScore + 1,
        },
      ),
      'Deu ruim!': setGame(
        { ...game,
          round: game.round + 1,
          cpuScore: game.cpuScore + 1,
        },
      ),
      'Empate!': setGame({ ...game, round: game.round + 1 })
    }   

    return game.next && resultsObj[result];
  };

  const playAgain = () => {    
    setGame({
      playerHand: [],
      cpuHand: [],
      next: false,
      index: ZERO,
      selectedAtt: game.selectedAtt,
      playerScore: ZERO,
      cpuScore: ZERO,
      round: ZERO,
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
