import React from 'react';

const Task21 = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task21;
