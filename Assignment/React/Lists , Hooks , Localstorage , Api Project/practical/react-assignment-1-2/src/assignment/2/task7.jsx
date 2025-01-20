import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Task27 = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
};

export default Task27;
