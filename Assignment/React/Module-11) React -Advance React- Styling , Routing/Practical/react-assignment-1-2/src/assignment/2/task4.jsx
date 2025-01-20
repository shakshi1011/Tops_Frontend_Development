import React, { Component } from 'react';

class Task24 extends Component {
  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <h3>Component lifecycle methods demo</h3>;
  }
}

export default Task24;
