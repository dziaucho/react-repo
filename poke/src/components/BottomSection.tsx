import React, { Component, ReactNode } from 'react';
// import CardPokemon from './CardPokemon';
import Pagination from './Pagination';

interface BottomSectionProps {
  showPagination: boolean;
}

class BottomSection extends Component<BottomSectionProps> {
  render(): ReactNode {
    return (
      <div className="bottom-section">
        {/*<CardPokemon /> */}
        {this.props.showPagination && <Pagination />}
      </div>
    );
  }
}

export default BottomSection;
