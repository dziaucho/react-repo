import React, { Component, ReactNode } from 'react';

class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className="footer">
        <p className="footer-text">
          boooooooo by{' '}
          <a
            className="footer-github-link"
            href="https://github.com/dziaucho"
            target="_blank"
          >
            dziaucho
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
