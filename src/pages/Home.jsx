import React, { useContext } from 'react';
import FormContainer from '../components/styles/FormContainer';
import Form from '../components/Form';
import Card from '../components/Card';
import { CardContext } from '../context/CardProvider';
import CardPreview from '../components/styles/PreviewStyles';
import Header from '../components/Header';
import Rules from '../components/Rules';
import Footer from '../components/Footer';
import CardFilter from '../components/CardFilter';

export default function Home() {
  const { card } = useContext(CardContext);
  return (
    <>
      <Rules />
      <Header />
      <FormContainer>
        <Form />
        <CardPreview>
          <Card
            name={ card.name }
            rarity={ card.rarity }
            image={ card.image }
            description={ card.description }
            speed={ card.attributes.velocidade }
            weight={ card.attributes.peso }
            length={ card.attributes.comprimento }
            superTrunfo={ card.isTrunfo }
          />
        </CardPreview>
      </FormContainer>
      <CardFilter />
      <Footer />
    </>
  );
}
