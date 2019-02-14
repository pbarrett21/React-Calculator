import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Calculator">
        <p className="result">Result here</p>
        <div className="calculatorbuttons">
          <button className="button">C</button>
          <button className="button"></button>
          <button className="button"></button>
          <button className="button">/</button>
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">*</button>
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">-</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">+</button>
          <button className="button">0</button>
          <button className="button">.</button>
          <button className="button">=</button>
        </div>
      </div>
    );
  }
}

export default App;
