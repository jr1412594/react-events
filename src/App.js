import { Component } from 'react'

import ComponentOne from './ComponentOne'

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <p>App</p>
        <ComponentOne />
      </div>
    );
  }
}

export default App;
