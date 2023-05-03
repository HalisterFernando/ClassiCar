import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
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

export default function Card({ name, image, description, speed, weight, length, author }) {  

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
          <SuperTrunfo />
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
      <License href="#">{author ? `Autor: ${author}` : ''}</License>
    </CardFrame>
  );
}
