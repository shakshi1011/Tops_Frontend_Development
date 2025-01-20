import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const Task15 = () => {
  return <UserCard name="Alice" age={25} location="New York" />;
};

export default Task15;
