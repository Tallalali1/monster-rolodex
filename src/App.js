import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Tallal",
      company: "Tecaudex"
    }

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}, I work at {this.state.company}
        </p>
       <button onClick={() => {
        this.setState({ name: "Ali" });
       }}>Change name</button>
      </header>
    </div>
    );
  }
}

export default App;
