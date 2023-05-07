import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../context/CardProvider';
import {
  AttributesContainer,
  CardForm,
  CheckSuperTrunfo,
  PlayButton,
  SaveButton,
} from './styles/FormStyles';

export default function Form() {
  const {
    card,
    handleCard,
    isDisabled,
    saveCard,
    checkForSuperTrunfo,
  } = useContext(CardContext);
  const history = useNavigate();

  return (
    <CardForm>
      <h2>Adicionar nova carta</h2>
      <form>
        <label htmlFor="card-name">
          <h4>Nome da carta</h4>
          <input
            id="card-name"
            maxLength="15"
            name="name"
            value={ card.name }
            onChange={ handleCard }
            type="text"
            data-testid="card-name"
          />
        </label>
        <label htmlFor="card-description">
          <h4>Descrição</h4>
          <textarea
            id="card-description"
            name="description"
            maxLength="96"
            value={ card.description }
            onChange={ handleCard }
            data-testid="card-description"
          />
        </label>
        <AttributesContainer>
          <label htmlFor="card-att1">
            <span>Velocidade</span>
            <input
              id="card-att1"
              type="number"
              name="velocidade"
              min="0"
              value={ card.attributes.velocidade }
              onChange={ handleCard }
              data-testid="speed"
            />
          </label>
          <label htmlFor="card-att2">
            <span>Peso</span>
            <input
              id="card-att2"
              type="number"
              name="peso"
              min="0"
              value={ card.attributes.peso }
              onChange={ handleCard }
              data-testid="weight"

            />
          </label>
          <label htmlFor="card-att3">
            <span>Comprimento</span>
            <input
              id="card-att3"
              type="number"
              name="comprimento"
              min="0"
              value={ card.attributes.comprimento }
              onChange={ handleCard }
              data-testid="length"

            />
          </label>
        </AttributesContainer>
        <label htmlFor="card-image">
          <h4>Imagem</h4>
          <input
            id="card-image"
            type="text"
            name="image"
            placeholder="Insira URL da imagem"
            value={ card.image }
            onChange={ handleCard }
            data-testid="card-image"
          />

        </label>
        <label htmlFor="card-rarity">
          <h4>Raridade</h4>
          <select
            id="card-rarity"
            name="rarity"
            onChange={ handleCard }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muitoRaro">Muito raro</option>
          </select>
        </label>
        <CheckSuperTrunfo isTrunfo={ checkForSuperTrunfo() } htmlFor="super-trunfo">
          <input
            id="super-trunfo"
            type="checkbox"
            name="isTrunfo"
            checked={ card.isTrunfo }
            onChange={ handleCard }
            data-testid="super-trunfo"
          />
          <span>Super Trunfo</span>
        </CheckSuperTrunfo>
        <br />
        <SaveButton
          available={ isDisabled.disabled }
          type="button"
          disabled={ isDisabled.disabled }
          onClick={ () => saveCard() }
          data-testid="save-btn"
        >
          Salvar
        </SaveButton>
        <PlayButton
          type="button"
          data-testid="play-btn"
          onClick={ () => history('/gameplay') }
        >
          Jogar
        </PlayButton>
      </form>
    </CardForm>
  );
}
