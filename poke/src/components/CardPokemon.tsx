import React, { Component, ReactNode } from 'react';
import NameHeading from './NameHeading';
import ImagePokeball from './ImagePokeball';
import Paragraph from './Paragraph';

class CardPokemon extends Component {
  render(): ReactNode {
    return (
      <div>
        <NameHeading content="name placeholder" />
        <ImagePokeball />
        <Paragraph content="desc placeholder" />
      </div>
    );
  }
}

export default CardPokemon;
