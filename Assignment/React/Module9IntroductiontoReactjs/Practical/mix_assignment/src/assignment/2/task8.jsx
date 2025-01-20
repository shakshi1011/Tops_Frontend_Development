import React, { useRef } from 'react';

const Task28 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default Task28;
