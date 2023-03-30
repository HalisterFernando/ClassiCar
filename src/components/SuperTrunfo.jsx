import propTypes from 'prop-types';
import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import { InnerText, SuperLogo } from './styles/SuperTrunfoStyles'

export default function SuperTrunfo(props) {
  const { card } = useContext(CardContext);
  const { savedSuperTrunfo } = props;
  return (
    <SuperLogo isTrunfo={ card.isTrunfo ? true : savedSuperTrunfo }>
      <div>
        <InnerText>
          <p>Super Trunfo</p>
        </InnerText>
      </div>
    </SuperLogo>
  );
}

SuperTrunfo.propTypes = {
  savedSuperTrunfo: propTypes.bool,
};
