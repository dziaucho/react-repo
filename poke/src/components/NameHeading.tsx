import React, { Component, ReactNode } from 'react';

interface NameHeadingProps {
  content: string;
}

class NameHeading extends Component<NameHeadingProps> {
  render(): ReactNode {
    return <h2>{this.props.content}</h2>;
  }
}

export default NameHeading;
