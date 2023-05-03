import propTypes from 'prop-types';
import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import SuperLogo from './styles/SuperTrunfoStyles';

export default function SuperTrunfo({superTrunfo}) {
  const { card } = useContext(CardContext);
  
  return (
    <SuperLogo isTrunfo={ superTrunfo }>
      <div>

        <span>Super Trunfo</span>

      </div>
    </SuperLogo>
  );
}

SuperTrunfo.propTypes = {
  savedSuperTrunfo: propTypes.bool.isRequired,
};
