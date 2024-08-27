import React, { Component, ReactNode } from 'react';
import ImagePokeball from './ImagePokeball';
import Paragraph from './Paragraph';

class CardPokemon extends Component {
  render(): ReactNode {
    return (
      <div>
        <h2>name card placeholder</h2>
        <ImagePokeball className="card-image-pokeball" />
        <p>desc placeholder</p>
      </div>
    );
  }
}

export default CardPokemon;
