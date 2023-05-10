import React from "react";
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import '@testing-library/jest-dom';
import { getByText } from "@testing-library/dom";


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Game', () => {
    it('should render the game rules', () => {
        renderWithRouter(<App />, {route: '/gameplay'});  

        const gameRules = screen.getByText('Regras do Jogo');
        expect(gameRules).toBeInTheDocument;
    });
    it('should be able to choose an attribute', () => {
        renderWithRouter(<App />, {route: '/gameplay'});

        const attributes = screen.getByTestId('attributes');
        const [_, velocidade, peso, comprimento] = attributes.options;

        expect(velocidade).toBeInTheDocument;
        expect(peso).toBeInTheDocument;
        expect(comprimento).toBeInTheDocument;
    });
    it('should be able to do the next step', () => {
      renderWithRouter(<App />, {route: '/gameplay'});

      const attributes = screen.getByTestId('attributes');
      const [_, velocidade, peso, comprimento] = attributes.options;      
      const nextBtn = screen.getByTestId('next');
      

      userEvent.click(velocidade);
      userEvent.click(nextBtn);

      expect(
      screen.queryByText('Boa!') || 
      screen.queryByText('Deu ruim!') || 
      screen.queryByText('Empate!')
      ).toBeInTheDocument;    
  });
  it('should be able to finish the game', () => {
      renderWithRouter(<App />, {route: '/gameplay'});

      const attributes = screen.getByTestId('attributes');
      const [_, velocidade, peso, comprimento] = attributes.options;      
      const nextBtn = screen.getByTestId('next');
      
      for (let i = 0; i < 10; i += 1) {
        userEvent.click(velocidade);
        userEvent.click(nextBtn);
      }

      expect(
        screen.queryByText('Você perdeu!') ||
        screen.queryByText('Empatou!') ||
        screen.queryByText('Você ganhou!')
      ).toBeInTheDocument;
  });
  it('should be able to play again', () => {
    renderWithRouter(<App />, {route: '/gameplay'});

      const attributes = screen.getByTestId('attributes');
      const [_, velocidade, peso, comprimento] = attributes.options;      
      const nextBtn = screen.getByTestId('next');
      
      for (let i = 0; i < 10; i += 1) {
        userEvent.click(velocidade);
        userEvent.click(nextBtn);
      }

      expect(screen.queryByText('Jogar novamente')).toBeInTheDocument;
  });
    

})