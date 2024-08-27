import React, { Component } from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

interface AppState {
  showPagination: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showPagination: false,
    };
  }

  handleFormSubmit = (inputValue: string) => {
    this.setState({ showPagination: inputValue.trim() === '' });
  };

  render() {
    const { showPagination } = this.state;

    return (
      <>
        <Header />
        <TopSection onFormSubmit={this.handleFormSubmit} />
        <BottomSection showPagination={showPagination} />
        <Footer />
      </>
    );
  }
}

export default App;
