import propTypes from 'prop-types';
import React from 'react';
import SuperLogo from './styles/SuperTrunfoStyles';

export default function SuperTrunfo({ superTrunfo }) {
  return (
    <SuperLogo isTrunfo={ superTrunfo } data-testid="super-badge">
      <div>
        <span>Super Trunfo</span>
      </div>
    </SuperLogo>
  );
}

SuperTrunfo.propTypes = {
  superTrunfo: propTypes.bool.isRequired,
};
