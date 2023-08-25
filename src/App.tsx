import React from 'react';
import logo from './logo.svg';
import './stylesheets/style.scss'
import Header from './app/shared/components/Header';
import Footer from './app/shared/components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
