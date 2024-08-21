import React, { Component, ReactNode } from 'react';
// import CardPokemon from './CardPokemon';
import Pagination from './Pagination';

class BottomSection extends Component {
  render(): ReactNode {
    return (
      <div className='bottom-section'>
        {/*<CardPokemon /> */}
        <Pagination />
      </div>
    );
  }
}

export default BottomSection;
