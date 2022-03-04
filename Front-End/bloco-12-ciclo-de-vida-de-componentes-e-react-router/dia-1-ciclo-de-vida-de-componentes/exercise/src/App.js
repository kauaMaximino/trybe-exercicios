import React, { Component } from 'react';
import Timer from "./components/Timer"
import "./App.css"

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showTimer: false
    };
  }
}

export default App
