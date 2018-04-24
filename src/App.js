import React, { Component } from 'react';
import Body from './components/Body.js';
import './App.css';
import Photos from './components/Photos.js';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Codee's carousel for B12!</h1>
            </header>
            <div className="carousel-main">
                <Body slides={Photos}/>
            </div>
        </div>
    );
  }
}

export default App;
