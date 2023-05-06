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
    it('should not be available for the user to delete a card or start the game', async () => {
        renderWithRouter(<App />);

        const playBtn = screen.queryByTestId('play-btn');
        const deleteBtns = await screen.findAllByTestId('delete-btn');
        const overlay = screen.getByTestId('overlay');
        
        expect(overlay).toBeInTheDocument;
        expect(playBtn).toBeInTheDocument;
        expect(deleteBtns).toBeInTheDocument;

        const overlayRect = overlay.getBoundingClientRect();
        const playBtnRect = playBtn.getBoundingClientRect();        
        
        // checks if overlay is covering the play button
        
        expect(overlayRect.top).toBeLessThanOrEqual(playBtnRect.top);
        expect(overlayRect.bottom).toBeGreaterThanOrEqual(playBtnRect.bottom);
        expect(overlayRect.left).toBeLessThanOrEqual(playBtnRect.left);
        expect(overlayRect.right).toBeGreaterThanOrEqual(playBtnRect.right);
        
        for (const deleteBtn of deleteBtns) {
            const deleteBtnRect = deleteBtn.getBoundingClientRect();
            
            // checks if overlay is covering the delete button

            expect(overlayRect.top).toBeLessThanOrEqual(deleteBtnRect.top);
            expect(overlayRect.bottom).toBeGreaterThanOrEqual(deleteBtnRect.bottom);
            expect(overlayRect.left).toBeLessThanOrEqual(deleteBtnRect.left);
            expect(overlayRect.right).toBeGreaterThanOrEqual(deleteBtnRect.right);
            
            
            expect(deleteBtn).toHaveStyle('pointer-events: visibleFill')
        }        

               
        expect(playBtn).toHaveStyle('pointer-events: visibleFill');
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