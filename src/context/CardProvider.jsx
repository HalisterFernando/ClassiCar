/* eslint-disable no-magic-numbers */
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Cars from '../cars';
import CardContext from './CardContext';

export default function CardProvider(props) {
  const [rule, setRule] = useState(true);
  const [card, setCard] = useState({
    name: '',
    description: '',
    attributes: { velocidade: 0, peso: 0, comprimento: 0 },
    image: '',
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
  });
  const [savedCards, setSavedCards] = useState([]);
  const [isDisabled, setIsDisabled] = useState({ disabled: true });
  const [filter, setFilter] = useState({
    search: '',
    rarity: 'todas',
    isTrunfo: false,
  });

  const handleCard = ({ target: { name, value, checked } }) => {
    if (name === 'velocidade' || name === 'peso' || name === 'comprimento') {
      return setCard({
        ...card,
        attributes: {
          ...card.attributes,
          [name]: value > 9999 ? 9999 : value,
        },
      });
    }
    if (name === 'rarity') {
      return setCard({ ...card,
        rarity: {
          ...card.rarity,
          normal: value === 'normal',
          raro: value === 'raro',
          muitoRaro: value === 'muitoRaro',
        } });
    }

    return setCard(({ ...card, [name]: name === 'isTrunfo' ? checked : value }));
  };

  const validation = () => {
    const { velocidade, peso, comprimento } = card.attributes;
    const inputValues = [card.name, card.description, card.image]
      .every((value) => value.length > 0);
    const attributeValues = [Number(velocidade), Number(peso), Number(comprimento)]
      .every((att) => att >= 0);
    if (inputValues && attributeValues) {
      setIsDisabled({ disabled: false });
    } else {
      setIsDisabled({ disabled: true });
    }
  };

  const saveCard = () => {
    const { name, description, attributes, image, rarity, isTrunfo } = card;
    setSavedCards([...savedCards, {
      name,
      description,
      attributes,
      image,
      rarity,
      isTrunfo,
    }]);

    setCard({
      name: '',
      description: '',
      attributes: { velocidade: 0, peso: 0, comprimento: 0 },
      image: '',
      rarity: { normal: true, raro: false, muitoRaro: false },
      isTrunfo: false,
    });
    setIsDisabled({ disabled: true });
  };

  const checkForSuperTrunfo = () => savedCards
    .some(({ isTrunfo }) => isTrunfo);

  const removeCard = (name) => {
    setSavedCards(savedCards.filter((el) => el.name !== name));
  };

  const handleFilter = ({ target: { name, value, checked } }) => {
    setFilter({ ...filter, [name]: name === 'isTrunfo' ? checked : value });
  };

  useEffect(() => validation(), [card]);

  useEffect(() => savedCards.length === 0 && setSavedCards(Cars), []);

  useEffect(() => {
    console.log('Olá', savedCards);
    localStorage.setItem('cards', JSON.stringify(savedCards));
  }, [savedCards]);

  const Provider = {
    card,
    savedCards,
    handleCard,
    isDisabled,
    saveCard,
    removeCard,
    filter,
    handleFilter,
    checkForSuperTrunfo,
    rule,
    setRule,
  };

  const { children } = props;

  return (
    <CardContext.Provider value={ Provider }>
      {children}
    </CardContext.Provider>
  );
}

CardProvider.propTypes = {
  children: propTypes.node.isRequired,
};
