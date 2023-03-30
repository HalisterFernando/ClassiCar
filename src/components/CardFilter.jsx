import React, { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import ShowCards from './ShowCards';
import {
  DeleteButton,
  DisplayCards,
  FilterContainer,
  Options,
  Search,
  SearchLabel,
} from './styles/CardFilterStyles';

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
        <ShowCards
          name={ card.name }
          image={ card.image }
          description={ card.description }
          att1={ card.attributes.velocidade }
          att2={ card.attributes.peso }
          att3={ card.attributes.comprimento }
          rarity={ card.rarity }
          superTrunfo={ card.isTrunfo }
          licenseName={ card.license ? card.license.name : ' ' }
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
      <SearchLabel htmlFor="search">
        <Search>Encontre a carta desejada</Search>
        <input
          id="search"
          name="search"
          type="text"
          value={ filter.search }
          onChange={ handleFilter }
          placeholder="Digite o nome da carta"
        />
      </SearchLabel>
      <Options>
        <p>Raridade</p>
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
        <p>Super Trunfo</p>
      </Options>
      <DisplayCards>
        {renderCards()}
      </DisplayCards>
    </FilterContainer>
  );
}
