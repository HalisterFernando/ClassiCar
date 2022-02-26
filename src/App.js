import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Delete from './components/Delete';
import CardFilter from './components/CardFilter';
import RareFilter from './components/RareFilter';
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
      rarity: 'normal',
      superT: false,
      nameFilter: '',
      rareFilter: 'todas',
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

  deleteCard = ({ target }) => {
    const { savedCards } = this.state;
    const name = target.value;
    const newCards = savedCards.flatMap((el) => el)
      .filter((el) => el.name !== name);
    this.setState(({ savedCards: newCards }));
    // Luá Octaviano me ajudou a desempacar nesse requisito <3
  };

  filterRender = (arr) => (
    arr.map((card) => (
      <>
        <Card
          key={ card.name }
          cardName={ card.name }
          cardDescription={ card.description }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.card }
          cardRare={ card.rarity }
          cardTrunfo={ card.superT }
        />
        <Delete cardName={ card.name } deleteCard={ this.deleteCard } />
      </>
    ))
  );

  cardsToRender = () => {
    const { savedCards, nameFilter, rareFilter } = this.state;
    const cardsToFilter = savedCards.flatMap((el) => el).map((el) => el);

    let filteredCard = cardsToFilter.filter((card) => card.name.includes(nameFilter));

    if (rareFilter !== 'todas') {
      filteredCard = cardsToFilter.filter((card) => card.rarity === rareFilter);
    }

    return this.filterRender(filteredCard);
  };

  render() {
    const { name, description, attr1, attr2, attr3, card, rarity, superT } = this.state;
    const { savedCards, nameFilter, rareFilter } = this.state;

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
          <CardFilter
            filter={ nameFilter }
            onInputChange={ this.handleChange }
          />
          <RareFilter
            onInputChange={ this.handleChange }
            rare={ rareFilter }
          />
          {
            this.cardsToRender()
          }
        </main>
      </>
    );
  }
}

export default App;
