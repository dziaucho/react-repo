import React, { Component, ReactNode } from 'react';
import CardPokemon from './CardPokemon';

class BottomSection extends Component {
  render(): ReactNode {
    return (
      <div>
        <CardPokemon />
      </div>
    );
  }
}

export default BottomSection;
