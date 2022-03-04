import React, { Component } from 'react';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTimer: false,
    };
  }

  toggleTimer = () => {
    this.setState((prev) => ({ showTimer: !prev.showTimer }));
  };

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
        </header>

        <main>
          {showTimer && <Timer />}
          <button type="button" onClick={this.toggleTimer}>
            {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
          </button>
        </main>
      </div>
    );
  }
}

export default App;
