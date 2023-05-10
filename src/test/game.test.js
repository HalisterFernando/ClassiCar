import React from "react";
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import '@testing-library/jest-dom';


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
})