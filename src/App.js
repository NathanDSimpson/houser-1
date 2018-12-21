import React, { Component } from 'react';
import Header from './components/Header/Header'
import routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
