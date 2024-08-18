import React, { Component, ReactNode } from 'react';

interface ParagraphProps {
  content: string;
}

class Paragraph extends Component<ParagraphProps> {
  render(): ReactNode {
    return <p>{this.props.content}</p>;
  }
}

export default Paragraph;
