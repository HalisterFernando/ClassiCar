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
      savedCards } = this.state;

    const cardInfo = [{
      name,
      description,
      attr1,
      attr2,
      attr3,
      card,
      rarity,
      superT,
      savedCards,
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

    const inputArr = [name, description, card, rarity];
    const attArr = [attr1, attr2, attr3];

    const maxAtt = 90;
    const minAtt = 0;
    const limitAtt = 210;

    const sumAtt = attArr.map((att) => Number(att)).reduce((acc, curr) => acc + curr);

    const checkValues = inputArr.every((value) => value !== '');
    const checkAtt = attArr.every((att) => (
      att <= maxAtt && att >= minAtt && sumAtt <= limitAtt));

    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
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
        </main>
      </>
    );
  }
}

export default App;
