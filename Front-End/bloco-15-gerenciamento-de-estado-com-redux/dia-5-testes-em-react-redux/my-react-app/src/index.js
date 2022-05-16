import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);