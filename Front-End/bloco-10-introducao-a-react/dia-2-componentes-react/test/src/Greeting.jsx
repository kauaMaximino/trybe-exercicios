import React from 'react';

class Greeting extends React.Component {
  
  render() {
    const props = { name: 'Samuel', lastName: 'rodo' }

    return <h1>Hello, Kauã Nax</h1>;
  }
}

export default Greeting;