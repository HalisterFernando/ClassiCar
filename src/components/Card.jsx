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
  ImageFrame,
  InnerFrame,
} from './styles/CardStyles';
import SuperTrunfo from './SuperTrunfo';

export default function Card() {
  const { card } = useContext(CardContext);

  return (
    <CardFrame>
      <InnerFrame>
        <ImageFrame>
          <div>
            <p>{card.name}</p>
            <CardRarity rarity={ card.rarity } />
          </div>
          <img src={ card.image || Example } alt="Imagem da carta" />
          <SuperTrunfo />
        </ImageFrame>
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
