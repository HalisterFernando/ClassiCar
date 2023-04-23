import propTypes from 'prop-types';
import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import SuperLogo from './styles/SuperTrunfoStyles';

export default function SuperTrunfo(props) {
  const { card } = useContext(CardContext);
  const { savedSuperTrunfo } = props;
  return (
    <SuperLogo isTrunfo={ card.isTrunfo ? true : savedSuperTrunfo }>
      <div>

        <span>Super Trunfo</span>

      </div>
    </SuperLogo>
  );
}

SuperTrunfo.propTypes = {
  savedSuperTrunfo: propTypes.bool.isRequired,
};
