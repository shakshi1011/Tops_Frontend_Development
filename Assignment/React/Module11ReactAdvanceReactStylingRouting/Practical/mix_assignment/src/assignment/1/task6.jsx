import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const Task16 = () => {
  return <Counter />;
};

export default Task16;
