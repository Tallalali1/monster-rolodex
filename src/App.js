import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
     { name: "Tallal"},
     { name: "Frank"},
     { name: "Linda"},
    ],
    };

  }

  render() {
  return (
    <div className="App">
    {
      this.state.monsters.map(monster => {
        return <h1>{monster.name}</h1>
      })
    }
    </div>
    );
  }
}

export default App;
