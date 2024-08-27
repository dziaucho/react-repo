import React, { Component, ReactNode } from 'react';

interface InputProps {
  className: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render(): ReactNode {
    return (
      <input
        className={this.props.className}
        type="text"
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
