import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CardProvider from './context/CardProvider';
import GameProvider from './context/GameProvider';

const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'App', route);
  return ({
    ...render(
      <BrowserRouter>
        <CardProvider>
          <GameProvider>
            {component}
          </GameProvider>
        </CardProvider>
      </BrowserRouter>,
    ),
  });
};
export default renderWithRouter;
