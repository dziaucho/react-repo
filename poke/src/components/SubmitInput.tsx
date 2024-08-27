import React, { Component, ReactNode } from 'react';


interface SubmitInputProps {
  className: string;
}

class SubmitInput extends Component<SubmitInputProps> {
  render(): ReactNode {
    return (
      <input
        className={this.props.className}
        type="submit"
        value="pokemon!"
      ></input>
    );
  }
}

export default SubmitInput;
