import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CardProvider from './context/CardProvider';
import GameProvider from './context/GameProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <GameProvider>
        <CardProvider>
          <App />      
        </CardProvider>
      </GameProvider>
    </BrowserRouter>       
  </React.StrictMode>,
  document.getElementById('root'),
);
