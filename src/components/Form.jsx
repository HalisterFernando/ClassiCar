import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr1:
          <input
            id="attr1"
            name="attr1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          Attr2:
          <input
            id="attr2"
            name="attr2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          Attr3:
          <input
            id="attr3"
            name="attr3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="card">
          Carta:
          <input
            id="card"
            name="card"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
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
            id="super"
            name="super"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
        <button id="save" type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
