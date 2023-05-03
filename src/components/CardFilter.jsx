import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import {
  DeleteButton,
  DisplayCards,
  FilterContainer,
  Options,
  Search,
} from './styles/CardFilterStyles';
import Card from './Card';

export default function CardFilter() {
  const { savedCards, removeCard, filter, handleFilter } = useContext(CardContext);

  const renderCards = () => {
    let cardsToRender = [...savedCards];

    if (filter.search) {
      cardsToRender = cardsToRender.filter(({ name }) => name.includes(filter.search));
    }
    if (filter.rarity !== 'todas') {
      cardsToRender = cardsToRender.filter(({ rarity }) => rarity[filter.rarity]);
    }
    if (filter.isTrunfo) {
      cardsToRender = cardsToRender.filter(({ isTrunfo }) => isTrunfo === true);
    }

    return cardsToRender.length > 0 && cardsToRender.map((card) => (
      
      <div key={ card.name }>        
        <Card
          name={ card.name }
          rarity={ card.rarity }
          image={ card.image }
          description={ card.description }
          speed={ card.attributes.velocidade }
          weight={ card.attributes.peso }
          length={ card.attributes.comprimento }
          superTrunfo={ card.isTrunfo }
          license={ card.license ? card.license.name : ' ' }
          author={ card.license ? card.license.author : ' ' }
          link={ card.license ? card.license.link : ' ' }
        />
        <DeleteButton
          onClick={ () => removeCard(card.name) }
          type="button"
        >
          Remover
        </DeleteButton>
      </div>
    ));
  };

  return (
    <FilterContainer>
      <Search htmlFor="search">
        <h2>Encontre a carta desejada</h2>
        <input
          id="search"
          name="search"
          type="text"
          value={ filter.search }
          onChange={ handleFilter }
          placeholder="Digite o nome da carta"
        />
      </Search>
      <Options>
        <span>Raridade</span>
        <select
          data-testid="rare-filter"
          name="rarity"
          onChange={ handleFilter }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muitoRaro">Muito Raro</option>
        </select>
        <input
          id="super-trunfo"
          type="checkbox"
          name="isTrunfo"
          checked={ filter.isTrunfo }
          onChange={ handleFilter }
        />
        <span>Super Trunfo</span>
      </Options>
      <DisplayCards>
        {renderCards()}
      </DisplayCards>
    </FilterContainer>
  );
}
