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
    };
  }

  handleChange = ({ target }) => {
    const { name, value, id } = target;

    this.setState({
      [name]: id === 'super' ? target.checked : value,
    });
  };

  saveButton = () => {
    console.log(Object.values(this.state));
  };

  render() {
    const { name, description, attr1, attr2, attr3, card, rarity, superT } = this.state;
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
          {this.saveButton()}
        </main>
      </>
    );
  }
}

export default App;
