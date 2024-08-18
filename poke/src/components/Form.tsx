import React, { Component, ReactNode } from 'react';
import Input from './Input';
import SubmitInput from './SubmitInput';

class Form extends Component {
  render(): ReactNode {
    return (
      <>
        <Input placeholder="put ur text here" />
        <SubmitInput />
      </>
    );
  }
}

export default Form;
