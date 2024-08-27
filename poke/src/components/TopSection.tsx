import React, { Component, ReactNode } from 'react';
import Form from './Form';
import Button from './Button';

interface TopSectionProps {
  onFormSubmit: (inputValue: string) => void;
}

interface TopSectionState {
  inputValue: string;
}

class TopSection extends Component<TopSectionProps, TopSectionState> {
  constructor(props: TopSectionProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleFormSubmit: void = (inputValue: string) => {
    this.setState({ showPagination: inputValue.trim() === '' });
    this.props.onFormSubmit(inputValue);
  };

  render(): ReactNode {
    return (
      <div className="top-section">
        <Button text="simulate error" className="top-section-simulate-error" />
        <Form
          inputValue={this.state.inputValue}
          onInputChange={event =>
            this.setState({ inputValue: event.target.value })
          }
          onSubmit={() => this.handleFormSubmit(this.state.inputValue)}
        />
      </div>
    );
  }
}

export default TopSection;
