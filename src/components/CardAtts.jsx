import React from 'react';
import propTypes from 'prop-types';
import Speedometer from '../images/speedometer.png';
import Weight from '../images/weight.png';
import CarL from '../images/length.webp';
import { CardAttributes, Attributes } from './styles/CardStyles';

export default function CardAtts({ speed, weight, length }) {
  return (
    <CardAttributes>
      <Attributes>
        <div>
          <img src={ Speedometer } alt="velocidade" />
        </div>
        <span>{`Velocidade: ${speed}`}</span>
      </Attributes>
      <Attributes>
        <div>
          <img src={ Weight } alt="peso" />
        </div>
        <span>{`Peso: ${weight}`}</span>
      </Attributes>
      <Attributes>
        <div>
          <img src={ CarL } alt="comprimento" />
        </div>
        <span>{`Comprimento: ${length}`}</span>
      </Attributes>
    </CardAttributes>

  );
}

CardAtts.propTypes = {
  attribute: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};
