import React, { Component, ReactNode } from 'react';
import Form from './Form';
import Button from './Button';

class TopSection extends Component {
  render(): ReactNode {
    return (
      <>
        <Button text="simulate error" />
        <Form />
      </>
    );
  }
}

export default TopSection;
