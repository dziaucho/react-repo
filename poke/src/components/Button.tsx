import React, { Component, ReactNode } from 'react';

interface ButtonProps {
  text: string;
}

class Button extends Component<ButtonProps> {
  render(): ReactNode {
    return <button>{this.props.text}</button>;
  }
}

export default Button;
