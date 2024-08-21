import React, { Component } from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TopSection />
        <BottomSection />
        <Footer />
      </>
    );
  }
}

export default App;
