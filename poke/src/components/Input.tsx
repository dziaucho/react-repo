import React, { Component, ReactNode } from 'react';

interface InputProps {
  placeholder: string;
}

interface InputState {
  value: string;
}

class Input extends Component<InputProps, InputState> {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render(): ReactNode {
    return (
      <input
        type="text"
        value={this.props.value}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}

export default Input;
