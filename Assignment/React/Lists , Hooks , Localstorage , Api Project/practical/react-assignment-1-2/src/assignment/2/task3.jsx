import React, { Component } from 'react';

class Task23 extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({ users });
  }

  render() {
    return (
      <div>
        <h3>Users:</h3>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task23;
