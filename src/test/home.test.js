import React from "react";
import { screen } from '@testing-library/react';
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import Home from "../pages/Home";
import { Routes } from "react-router-dom";
describe('Home', () => {
    it('render the game rules', () => {
        renderWithRouter(<App />);

        const welcome = screen.getByText('Seja Bem-vindo ao ClassiCar Trunfo!');
        expect(welcome).toBeInTheDocument;
    });
})