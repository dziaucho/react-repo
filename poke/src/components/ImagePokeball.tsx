import React, { Component, ReactNode } from 'react';
import pokeball from '../assets/pokeball.svg';

class ImagePokeball extends Component {
  render(): ReactNode {
    return <img src={pokeball} alt="pokeball"></img>;
  }
}

export default ImagePokeball;
