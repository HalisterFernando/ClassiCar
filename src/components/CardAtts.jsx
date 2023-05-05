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
        <span>
          Velocidade

          <p>{`${speed} Km/h`}</p>

        </span>
      </Attributes>
      <Attributes>
        <div>
          <img src={ Weight } alt="peso" />
        </div>
        <span>
          Peso

          <p>{`${weight} kg`}</p>

        </span>
      </Attributes>
      <Attributes>
        <div>
          <img src={ CarL } alt="comprimento" />
        </div>
        <span>
          Comprimento

          <p>{`${length} mts`}</p>

        </span>
      </Attributes>
    </CardAttributes>

  );
}

CardAtts.propTypes = {
  speed: propTypes.number.isRequired,
  weight: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
};
