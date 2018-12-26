import React, { Component } from 'react';
import './App.css';
import 'react-bulma-components/full';
import Jumbotron from './components/Jumbotron';
import List from './components/List';
import Footer from './components/Footer'; 
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <br />
          <List />
        </div>
        <br />  
       <Footer />
       <Modal /> 
      </div>
    );
  }
}

export default App;
