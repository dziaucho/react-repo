import React, { Component, ReactNode } from 'react';

interface NameHeadingProps {
  nameClass: string;
  content: string;
}

class NameHeading extends Component<NameHeadingProps> {
  render(): ReactNode {
    return <h2 className={this.props.nameClass}>{this.props.content}</h2>;
  }
}

export default NameHeading;
