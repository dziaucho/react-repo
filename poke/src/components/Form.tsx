import React, { Component, ReactNode } from 'react';
import Input from './Input';
import SubmitInput from './SubmitInput';

interface FormProps {
  inputValue: string;
  className: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (inputValue: string) => void;
}

class Form extends Component<FormProps> {
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSubmit(this.props.inputValue);
  };

  render(): ReactNode {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        <Input
          className='form-search_input-text'
          placeholder="put ur text here"
          value={this.props.inputValue}
          onChange={this.props.onInputChange}
        />

        <SubmitInput className='form-search_input-submit' />
      </form>
    );
  }
}

export default Form;
