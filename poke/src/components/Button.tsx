import React, { Component } from 'react';

interface ButtonProps {
  text: string;
}

class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    return <button>{this.props.text}</button>;
  }
}

export default Button;
