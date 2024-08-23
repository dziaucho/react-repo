import React, { Component, ReactNode } from 'react';

class SubmitInput extends Component {
  render(): ReactNode {
    return (
      <input
        className="submit-input-top-section"
        type="submit"
        value="pokemon!"
      ></input>
    );
  }
}

export default SubmitInput;
