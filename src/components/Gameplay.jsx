import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../context/CardContext';
import GameContext from '../context/GameContext';
import Question from '../images/questionMark.png';
import ShowCards from './ShowCards';
import {
  Continue, CpuCard, GameContainer,
  MainContainer, NextCard, PlayAgain,
  QuestionCard,
  // eslint-disable-next-line comma-dangle
  Result, Score, Select, Setup
} from './styles/GameplayStyles';

const INDEXLIMIT = 9;
const VALUE = 0.5;

export default function Gameplay() {
  const { savedCards } = useContext(CardContext);
  const [shuffle, setShuffle] = useState([]);
  const { game, playAgain, setCards,
    handleAtt, gameResult, finishGame,
    resetIndex, setScore, nextRound,
    nextCard, newGame } = useContext(GameContext);

  const shuffleCards = () => {
    setShuffle(() => savedCards.sort(() => Math.random() - VALUE));
  };

  const enableSuperTrunfo = () => {
    if (game.playerHand.length > 0) {
      const { playerHand, index } = game;
      if (playerHand[index].isTrunfo) {
        return false;
      } return true;
    }
  };

  const roundOver = () => {
    if (game.endGame) {
      if (game.playerScore < game.cpuScore) {
        return 'Você perdeu!';
      } if (game.playerScore === game.cpuScore) {
        return 'Empatou!';
      }
      return 'Você ganhou!';
    }
  };

  const gameRender = () => {
    if (game.playerHand.length !== 0 && game.index <= INDEXLIMIT) {
      const {
        name, description, attributes,
        image, rarity, isTrunfo, license } = game.playerHand[game.index];
      return (
        <ShowCards
          name={ name }
          description={ description }
          image={ image }
          att1={ attributes.velocidade }
          att2={ attributes.peso }
          att3={ attributes.comprimento }
          rarity={ rarity }
          superTrunfo={ isTrunfo }
          licenseName={ license.name }
          author={ license.author }
          link={ license.link }
        />
      );
    }
  };

  const nextStep = () => {
    if (game.cpuHand.length !== 0 && game.next) {
      const {
        name, description, attributes,
        image, rarity, isTrunfo, license,
      } = game.cpuHand[game.index];

      return (
        <ShowCards
          name={ name }
          description={ description }
          image={ image }
          att1={ attributes.velocidade }
          att2={ attributes.peso }
          att3={ attributes.comprimento }
          rarity={ rarity }
          superTrunfo={ isTrunfo }
          licenseName={ license.name }
          author={ license.author }
          link={ license.link }
        />
      );
    }
  };

  useEffect(() => {
    if (game.playAgain) return shuffleCards();
    shuffleCards();
  }, [game.playAgain]);

  useEffect(() => finishGame(), [game.round]);

  useEffect(() => {
    if (game.playAgain) return setCards(shuffle);
    setCards(shuffle);
  }, [shuffle, game.playAgain]);

  useEffect(() => resetIndex(), [game.index]);

  useEffect(() => setScore(), [game.next]);

  useEffect(() => {
    if (game.playAgain) {
      playAgain();
    }
  }, [game.playAgain]);

  return (
    <MainContainer>
      <Setup>
        <Select htmlFor="select-att" next={ game.next } endGame={ game.endGame }>
          <select id="select-att" onChange={ handleAtt }>
            <option selected disabled>Escolha um atributo</option>
            <option value="velocidade">Velocidade</option>
            <option value="peso">Peso</option>
            <option value="comprimento">Comprimento</option>
            <option
              value="super trunfo"
              disabled={ enableSuperTrunfo() }
            >
              Super Trunfo
            </option>
          </select>
        </Select>
        <Continue
          type="button"
          onClick={ () => nextRound() }
          next={ game.next }
          endGame={ game.endGame }
          disabled={ game.selectedAtt === '' }
        >
          Avançar
        </Continue>
        <Result next={ game.next } endGame={ game.endGame }>{gameResult()}</Result>
        <NextCard
          next={ game.next }
          endGame={ game.endGame }
          type="button"
          onClick={ () => nextCard() }
        >
          Próxima Carta
        </NextCard>
        <h2>Placar</h2>
        <Score>
          <span>{`Você: ${game.playerScore}`}</span>
          <span>{`Oponente: ${game.cpuScore}`}</span>
        </Score>
        <h2>{roundOver()}</h2>
        <PlayAgain
          type="button"
          endGame={ game.endGame }
          onClick={ () => newGame() }
        >
          Jogar novamente
        </PlayAgain>
      </Setup>
      <GameContainer>
        <div>
          {gameRender()}
        </div>
        <QuestionCard next={ game.next }>
          <ShowCards
            image={ Question }
            name="?"
            att1="?"
            att2="?"
            att3="?"
            licenseName=""
            author=""
            link=""
          />
        </QuestionCard>
        <CpuCard next={ game.next }>
          {nextStep()}
        </CpuCard>
      </GameContainer>
    </MainContainer>
  );
}
