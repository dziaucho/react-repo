import React, { Component, ReactNode } from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render(): ReactNode {
    return (
      <input
        className="input-text-top-section"
        type="text"
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
