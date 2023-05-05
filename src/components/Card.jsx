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
          <CardRarity rarity={ rarity }>
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
  rarity: propTypes.objectOf(propTypes.bool).isRequired,
  image: propTypes.string.isRequired,
  superTrunfo: propTypes.bool.isRequired,
  description: propTypes.string.isRequired,
  speed: propTypes.number.isRequired,
  weight: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
  author: propTypes.string,
  license: propTypes.string,
  link: propTypes.string,
};

Card.defaultProps = {
  link: '#',
  license: '',
  author: '',
};
