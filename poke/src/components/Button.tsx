import React, { Component, ReactNode } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
  isPagination: boolean;
  disabled?: boolean;
  isCurrent?: boolean;
}

class Button extends Component<ButtonProps> {
  addPaginationClasses: string[] = (className: string) => {
    const classes: string[] = [className];

    if (isCurrent) {
      classes.push('disabled-pagination-button-number');
    }

    if (className) {
      classes.push(this.props.className);
    }

    const buttonClassName = classes.join(' ');
    return buttonClassName;
  };

  render(): ReactNode {
    return (
      <button
        className={
          this.props.isPagination
            ? this.addPaginationClasses(this.props.className)
            : this.props.className
        }
        onClick={this.props.onClick}
        disabled={this.props.disabled || this.props.isCurrent}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
