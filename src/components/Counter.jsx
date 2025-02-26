import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [incrementBy, setIncrementBy] = useState(1);

  const increment = () => {
    setCount(count + incrementBy);
  };

  const decrement = () => {
    setCount(count - incrementBy);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      
      <div className="flex items-center justify-center mb-6">
        <span className="text-6xl font-bold text-blue-600">{count}</span>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          -
        </button>
        
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          +
        </button>
        
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>
      
      <div className="mt-4">
        <label htmlFor="incrementBy" className="block text-sm font-medium text-gray-700 mb-1">
          Increment/Decrement By:
        </label>
        <input
          type="number"
          id="incrementBy"
          min="1"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value) || 1)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

// Default props
Counter.defaultProps = {
  initialCount: 0
};

export default Counter;