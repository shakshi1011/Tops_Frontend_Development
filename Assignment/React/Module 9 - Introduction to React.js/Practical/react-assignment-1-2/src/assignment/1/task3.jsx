import React from 'react';

const Greeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

const Task13 = () => {
  return <Greeting name="John" />;
};

export default Task13;
