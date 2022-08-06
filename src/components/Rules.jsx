import React, { useContext } from 'react';
import CardContext from '../context/CardContext';
import GameContext from '../context/GameContext';

import { OkBtn, RulesContainer, RulesInnerContainer } from './styles/RulesStyles';

export default function Rules() {
  const { rule, setRule } = useContext(CardContext);
  const { gameRule, setGameRule } = useContext(GameContext);
  const renderRules = () => {
    const regex = /gameplay/gi;
    const url = window.location.href;
    const urlCheck = regex.test(url);
    return { state: urlCheck ? gameRule : rule, urlCheck };
  };

  return (
    <RulesContainer rule={ renderRules().state }>
      <RulesInnerContainer rule={ renderRules().urlCheck }>
        {renderRules().urlCheck ? (
          <>
            <div>
              <h1>Regras do Jogo</h1>
            </div>
            <div>
              <h2>Selecione um atributo</h2>
              <p>
                Selecione um atributo entre Peso, Velocidade ou Comprimento
                o atributo Super Trunfo estará disponível somente em sua respecitiva carta
              </p>
              <h2>Avançar</h2>
              <p>
                Ao clicar em avançar, ganha 1 ponto quem tiver
                o valor maior dentre o atributo escolhido, caso sejam iguais,
                ninguém ganha ponto
              </p>
              <h2>Jogando Novamente</h2>
              <p>
                Ao final de 10 rounds, ganha quem tiver mais pontos
                e se quiser jogar novamente basta clicar em Jogar novamente.
                Divirta-se!!!
              </p>
              <OkBtn type="button" onClick={ () => setGameRule(false) }>
                OK
              </OkBtn>
            </div>
          </>

        ) : (

          <>
            <div>
              <h1>Seja Bem-vindo ao ClassiCar Trunfo!</h1>
            </div>
            <div>
              <h2>Adicionando uma carta</h2>
              <p>
                Você pode adicionar quantas cartas desejar,
                basta preencher seus atributos e clicar em salvar!
              </p>
              <h2>Filtrando as cartas</h2>
              <p>
                Você pode buscar por alguma carta em específico usando os filtros abaixo
                seja por, nome, raridade ou super trunfo!
              </p>
              <h2>Jogar</h2>
              <p>
                Basta clicar em jogar que o jogo iniciará
                com as cartas salvas e/ou pré-definidas!
              </p>
              <OkBtn type="button" onClick={ () => setRule(false) }>
                OK
              </OkBtn>
            </div>
          </>
        )}
      </RulesInnerContainer>
    </RulesContainer>
  );
}
