import React, { Component, ReactNode } from 'react';
import ImagePokeball from './ImagePokeball';

interface ItemListProps {
  items: string[];
}

class ItemList extends Component<ItemListProps> {
  render(): ReactNode {
    return (
      <ul className="list-items-bottom-section">
        {this.props.items.map((item, index) => (
          <li className="item-bottom-section" key={index}>
            <h2 className="item-bottom-section-name">{item}</h2>
            <ImagePokeball className="item-image-pokeball" />
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
