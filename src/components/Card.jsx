import React from 'react';
import propTypes from 'prop-types';
import Example from '../images/example.jpg';
import CardAtts from './CardAtts';
import RarityIcon from '../images/rarity-icon.png';

import {
  CardFrame,
  CardRarity,
  Description,
  Image,
  InnerFrame,
  Title,
  License,
} from './styles/CardStyles';
import SuperTrunfo from './SuperTrunfo';

export default function Card({
  name,
  rarity,
  image,
  superTrunfo,
  description,
  speed,
  weight,
  length,
  author,
  license,
  link,
}) {
  return (
    <CardFrame>
      <InnerFrame>
        <Title>
          <span>{name}</span>
          <CardRarity rarity={ rarity } data-testid="card-rarity">
            <img src={ RarityIcon } alt="raridade" />
          </CardRarity>
        </Title>
        <Image>
          <img src={ image || Example } alt="Imagem da carta" />
          <SuperTrunfo superTrunfo={ superTrunfo } />
        </Image>
        <Description>
          <span>{description}</span>
        </Description>
        <CardAtts
          speed={ speed }
          weight={ weight }
          length={ length }
        />
      </InnerFrame>
      <License
        href={ link || '#' }
      >
        {
          author ? `Autor: ${author} Tipo de licença: ${license}` : ''
        }
      </License>
    </CardFrame>
  );
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  rarity: propTypes.objectOf(propTypes.bool),
  image: propTypes.string.isRequired,
  superTrunfo: propTypes.bool,
  description: propTypes.string,
  speed: propTypes.string.isRequired,
  weight: propTypes.string.isRequired,
  length: propTypes.string.isRequired,
  author: propTypes.string,
  license: propTypes.string,
  link: propTypes.string,
};

Card.defaultProps = {
  link: '#',
  license: '',
  author: '',
  rarity: { normal: true, raro: false, muitoRaro: false },
  superTrunfo: false,
  description: '',
};
