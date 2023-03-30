import propTypes from 'prop-types';
import React from 'react';
import {
  AttributeName,
  Attributes,
  AttributeValue, CardAttributes,
  CardFrame,
  CardRarity,
  Description,
  ImageFrame,
  InnerFrame,
  License,
} from './styles/CardStyles';
import SuperTrunfo from './SuperTrunfo';

export default function ShowCards(props) {
  const {
    name,
    description,
    image,
    att1,
    att2,
    att3,
    rarity,
    superTrunfo,
    licenseName,
    author,
    link,
  } = props;

  return (
    <CardFrame>
      <InnerFrame>
        <ImageFrame>
          <div>
            <p>{name}</p>
            <CardRarity rarity={ rarity } />
          </div>
          <img src={ image } alt="carro" />
          <SuperTrunfo savedSuperTrunfo={ superTrunfo } />
        </ImageFrame>
        <Description>
          <span>{description}</span>
        </Description>
        <CardAttributes>
          <Attributes>
            <AttributeName>Velocidade</AttributeName>
            <AttributeValue>
              {`${att1}`}
              <span>Km/h</span>
            </AttributeValue>
          </Attributes>
          <Attributes>
            <AttributeName>Peso</AttributeName>
            <AttributeValue>
              {`${att2}`}
              <span>Kg</span>
            </AttributeValue>
          </Attributes>
          <Attributes>
            <AttributeName>Comprimento</AttributeName>
            <AttributeValue>
              {`${att3}`}
              <span>Mts</span>
            </AttributeValue>
          </Attributes>
        </CardAttributes>
      </InnerFrame>
      <License
        href={ link }
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${author} ${licenseName}`}
      </License>
    </CardFrame>
  );
}

ShowCards.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  att1: propTypes.number.isRequired,
  att2: propTypes.number.isRequired,
  att3: propTypes.number.isRequired,
  rarity: propTypes.objectOf(propTypes.bool).isRequired,
  superTrunfo: propTypes.bool.isRequired,
  licenseName: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};
