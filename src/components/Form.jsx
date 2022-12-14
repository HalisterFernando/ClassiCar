/* eslint-disable no-magic-numbers */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CardContext from '../context/CardContext';
import {
  Attributes,
  CardForm, CheckSuperTrunfo, Description,
  DescriptionContainer,
  Input,
  InputAtt,
  InputContainer,
  InputImg,
  LabelTitle,
  NewCard,
  PlayButton,
  SaveButton,
  SelectRarity
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
      <NewCard>
        Adicionar nova carta
      </NewCard>
      <form>
        <LabelTitle>Nome da carta</LabelTitle>
        <InputContainer htmlFor="card-name">
          <Input
            id="card-name"
            maxLength="15"
            name="name"
            value={ card.name }
            onChange={ handleCard }
            type="text"
          />
        </InputContainer>
        <DescriptionContainer htmlFor="card-description">
          <LabelTitle>Descrição</LabelTitle>
          <Description
            id="card-description"
            name="description"
            maxLength="96"
            value={ card.description }
            onChange={ handleCard }
          />
        </DescriptionContainer>
        <Attributes htmlFor="card-att1">
          <p>Velocidade</p>
          <InputAtt
            id="card-att1"
            type="number"
            name="velocidade"
            min="0"
            value={ card.attributes.velocidade }
            onChange={ handleCard }
          />
        </Attributes>

        <Attributes htmlFor="card-att2">
          <p>Peso</p>
          <InputAtt
            id="card-att2"
            type="number"
            name="peso"
            min="0"
            value={ card.attributes.peso }
            onChange={ handleCard }
          />
        </Attributes>

        <Attributes htmlFor="card-att3">
          <p>Comprimento</p>
          <InputAtt
            id="card-att3"
            type="number"
            name="comprimento"
            min="0"
            value={ card.attributes.comprimento }
            onChange={ handleCard }
          />
        </Attributes>
        <InputContainer htmlFor="card-image">
          <LabelTitle>Imagem</LabelTitle>
          <InputImg
            id="card-image"
            type="text"
            name="image"
            placeholder="Insira URL da imagem"
            value={ card.image }
            onChange={ handleCard }
          />

        </InputContainer>
        <label htmlFor="card-rarity">
          <LabelTitle>Raridade</LabelTitle>
          <SelectRarity
            id="card-rarity"
            name="rarity"
            onChange={ handleCard }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muitoRaro">Muito raro</option>
          </SelectRarity>
        </label>
        <CheckSuperTrunfo isTrunfo={ checkForSuperTrunfo() } htmlFor="super-trunfo">
          <input
            id="super-trunfo"
            type="checkbox"
            name="isTrunfo"
            checked={ card.isTrunfo }
            onChange={ handleCard }
          />
          <span>Super Trunfo</span>
        </CheckSuperTrunfo>
        <br />

        <SaveButton
          available={ isDisabled.disabled }
          type="button"
          disabled={ isDisabled.disabled }
          onClick={ () => saveCard() }
        >
          Salvar

        </SaveButton>
        <PlayButton
          type="button"
          onClick={ () => history('/gameplay') }
        >
          Jogar
        </PlayButton>
      </form>
    </CardForm>
  );
}
