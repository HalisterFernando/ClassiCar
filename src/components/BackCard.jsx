import React from 'react';
import propTypes from 'prop-types';
import { BackInnerFrame, BackCardFrame } from './styles/BackCardStyles';

function BackCard({ next }) {
  return (
    <BackCardFrame next={ next }>
      <BackInnerFrame>
        <div>
          <span>
            <p>ClassiCar</p>
          </span>
        </div>
      </BackInnerFrame>
    </BackCardFrame>
  );
}

BackCard.propTypes = {
  next: propTypes.bool.isRequired,
};

export default BackCard;
