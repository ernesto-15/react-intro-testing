import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };

  const handleSubtract = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
