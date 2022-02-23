import React from 'react';
import { PropTypes } from 'prop-types';
import './form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form action="" className="form">
        <label htmlFor="name">
          Nome:
          <input
            value={ cardName }
            onChange={ onInputChange }
            id="name"
            name="name"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="description"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr1:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
            name="attr1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          Attr2:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
            name="attr2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          Attr3:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
            name="attr3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="card">
          Carta:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="card"
            name="card"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="rarity"
            name="rarity"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          Carta:
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="super"
            name="super"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          id="save"
          type="button"
          data-testid="save-button"
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
