import React, { Component, ReactNode } from 'react';
import pokeball from '../assets/pokeball.svg';

interface ImagePokeballProps {
  className: string;
}

class ImagePokeball extends Component<ImagePokeballProps> {
  render(): ReactNode {
    return (
      <img src={pokeball} alt="pokeball" className={this.props.className}></img>
    );
  }
}

export default ImagePokeball;
