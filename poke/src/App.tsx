import './App.css';

import React, { Component } from 'react';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

class App extends Component {
  render() {
    return (
      <div>
        <Button text="Hello" />
        <Input placeholder="put your text here" />
      </div>
    );
  }
}

export default App;
