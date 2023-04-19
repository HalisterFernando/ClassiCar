import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import Example from '../images/example.jpg';
import CardAtts from './CardAtts';

import {
  CardFrame,
  CardRarity,
  Description,
  Image,
  InnerFrame,
  Title,
} from './styles/CardStyles';
import SuperTrunfo from './SuperTrunfo';

export default function Card() {
  const { card } = useContext(CardContext);

  return (
    <CardFrame>
      <InnerFrame>
        <Title>
          <span>{card.name}</span>
          <CardRarity rarity={ card.rarity } />
        </Title>
        <Image>
          <img src={ card.image || Example } alt="Imagem da carta" />
          <SuperTrunfo />
        </Image>
        <Description>
          <span>{card.description}</span>
        </Description>
        <CardAtts
          speed={ card.attributes.velocidade }
          weight={ card.attributes.peso }
          length={ card.attributes.comprimento }
        />
      </InnerFrame>
    </CardFrame>
  );
}
