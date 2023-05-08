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

describe('Home', () => {
    it('should render the game rules', () => {
        renderWithRouter(<App />);

        const welcome = screen.getByText('Seja Bem-vindo ao ClassiCar Trunfo!');
        expect(welcome).toBeInTheDocument;
    });
    it('should be able to create a card', async () => {
        renderWithRouter(<App />);

        const name = screen.getByTestId('card-name');
        const description = screen.getByTestId('card-description');
        const speed = screen.getByTestId('speed');
        const weight = screen.getByTestId('weight');
        const length = screen.getByTestId('length');
        const image = screen.getByTestId('card-image')
        const saveBtn = screen.getByTestId('save-btn');              

        userEvent.type(name, 'Fusca');
        expect(name).toHaveValue('Fusca');
       
        userEvent.type(description, 'Famoso Volkswagen');
        expect(description).toHaveValue('Famoso Volkswagen');
       
        userEvent.type(speed, '133');
        expect(speed).toHaveValue(133);
       
        userEvent.type(weight, '780');
        expect(weight).toHaveValue(780);        
       
        userEvent.type(length, '4');
        expect(length).toHaveValue(4);

        userEvent.type(image, 'fusca.jpg');
        expect(image).toHaveValue('fusca.jpg');
                
        userEvent.click(saveBtn);

        expect(name).toHaveValue('');
        expect(description).toHaveValue('');
        expect(speed).toHaveValue(0);
        expect(weight).toHaveValue(0);
        expect(length).toHaveValue(0);
        expect(image).toHaveValue('');


        const newCard = screen.getByText('Famoso Volkswagen')

        expect(newCard).toBeInTheDocument;     
    });
    it('should be able to delete a card', () => {
        renderWithRouter(<App />)

        const deleteCard = screen.getByTestId('delete-btn-Fusca');

        userEvent.click(deleteCard);

        expect(deleteCard).not.toBeInTheDocument
    });
    it('should be able to create a super trumph card is no one exists', () => {
        renderWithRouter(<App />)

        const superTrumphCard = screen.getByTestId('delete-btn-Fusca');
        const superTrumph = screen.getByTestId('super-trunfo');
        const superTrumphBadges = screen.getAllByTestId('super-badge');

        expect(superTrumph).not.toBeInTheDocument;
        
        for (const badge of superTrumphBadges ) {
            expect(badge).not.toBeInTheDocument;
            
        }

        userEvent.click(superTrumphCard);

        expect(superTrumphCard).not.toBeInTheDocument;

        userEvent.click(superTrumph)

        expect(superTrumph).toBeInTheDocument;
        expect(superTrumphBadges[0]).toHaveStyle('display: flex');
    });
    it('should be able to start game after clicking ok', async () => {
        const { history } = renderWithRouter(<App />);

        userEvent.click(screen.getByText('OK'))
        userEvent.click(screen.getByTestId('play-btn'))
        
        history.push('/gameplay')
        
        await waitFor(() => {
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(1)
            expect(history.location.pathname).toBe('/gameplay')
        });       
    });
})