import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import Example from '../images/example.jpg';
import Attribute from './Attribute';
import {
  AttributeName,
  Attributes,
  AttributeValue,
  CardAttributes,
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
        <CardAttributes>
          <Attributes>
            <AttributeName>Velocidade</AttributeName>
            <Attribute attribute="velocidade" value={ card.attributes.velocidade } />
          </Attributes>
          <Attributes>
            <AttributeName>Peso</AttributeName>
            <AttributeValue>
              {`${card.attributes.peso}`}
              <span>Kg</span>
            </AttributeValue>
          </Attributes>
          <Attributes>
            <AttributeName>Comprimento</AttributeName>
            <AttributeValue>
              {`${card.attributes.comprimento}`}
              <span>Mts</span>
            </AttributeValue>
          </Attributes>
        </CardAttributes>
      </InnerFrame>
    </CardFrame>
  );
}
