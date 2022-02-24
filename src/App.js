/* eslint-disable react/jsx-key */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      card: '',
      rarity: '',
      superT: false,
      savedCards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value, id } = target;

    this.setState({
      [name]: id === 'super' ? target.checked : value,
    });
  };

  saveCard = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      card,
      rarity,
      superT,
    } = this.state;

    const cardInfo = [{
      name,
      description,
      attr1,
      attr2,
      attr3,
      card,
      rarity,
      superT,
    }];

    this.setState((prevState) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      card: '',
      rarity: 'normal',
      superT: false,
      savedCards: [...prevState.savedCards, cardInfo],
    }));
  };

  render() {
    const { name, description, attr1, attr2, attr3, card, rarity, superT } = this.state;
    const { savedCards } = this.state;

    const inputArr = [name, description, card, rarity];
    const attArr = [attr1, attr2, attr3];

    const maxAtt = 90;
    const minAtt = 0;
    const limitAtt = 210;

    const sumAtt = attArr.map((att) => Number(att)).reduce((acc, curr) => acc + curr);

    const checkValues = inputArr.every((value) => value !== '');
    const checkAtt = attArr.every((att) => (
      att <= maxAtt && att >= minAtt && sumAtt <= limitAtt));

    const checkTrunfo = savedCards.flatMap((el) => el).map((sCard) => sCard.superT);

    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <div className="container">
            <section>
              <Form
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ card }
                cardRare={ rarity }
                cardTrunfo={ superT }
                onInputChange={ this.handleChange }
                isSaveButtonDisabled={ !(checkValues && checkAtt) }
                onSaveButtonClick={ this.saveCard }
                hasTrunfo={ checkTrunfo.some((el) => el === true) }
              />
            </section>
            <section>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ card }
                cardRare={ rarity }
                cardTrunfo={ superT }
                onInputChange={ this.handleChange }
              />
            </section>
          </div>
          <p>Lista de cartas</p>
          {
            savedCards.flatMap((el) => el).map((sCard) => (
              <Card
                cardName={ sCard.name }
                cardDescription={ sCard.description }
                cardAttr1={ sCard.attr1 }
                cardAttr2={ sCard.attr2 }
                cardAttr3={ sCard.attr3 }
                cardImage={ sCard.card }
                cardRare={ sCard.rarity }
                cardTrunfo={ sCard.superT }
              />))
          }
        </main>
      </>
    );
  }
}

export default App;
