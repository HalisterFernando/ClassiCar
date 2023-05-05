import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import CardProvider from './context/CardProvider';
import GameProvider from './context/GameProvider';

const renderWithRouter = (component, { route = '/' } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return ({
    ...render(
      <BrowserRouter history={ history }>
        <CardProvider>
          <GameProvider>
            <Routes>
              <Route path={ route } element={ component } />
            </Routes>
          </GameProvider>
        </CardProvider>
      </BrowserRouter>,
    ),
    history,
  });
};
export default renderWithRouter;
