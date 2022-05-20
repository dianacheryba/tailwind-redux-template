import React from "react";

const Counter = ({
  count,
  incrementAmount,
  incrementOnClick,
  decrementOnClick,
  changeIncrementAmount,
  incrementByAmountOnClick,
  incrementAsyncOnClick,
}) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-4">
        <button
          className="button active:bg-opacity-20 hover:border-purple-700 hover:border-opacity-40 focus:border-purple-700 focus:border-opacity-40"
          aria-label="Increment value"
          onClick={incrementOnClick}
        >
          +
        </button>
        <span className="px-4 mt-0.5 text-7xl font-mono">{count}</span>
        <button
          className="button active:bg-opacity-20 hover:border-purple-700 hover:border-opacity-40 focus:border-purple-700 focus:border-opacity-40"
          aria-label="Decrement value"
          onClick={decrementOnClick}
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center">
        <input
          className="text-3xl p-0.5 w-16 text-center mr-2"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={changeIncrementAmount}
        />
        <button
          className="button active:bg-opacity-20 hover:border-purple-700 hover:border-opacity-40 focus:border-purple-700 focus:border-opacity-40"
          onClick={incrementByAmountOnClick}
        >
          Add Amount
        </button>
        <button
          className="button relative ml-2 after:absolute after:block after:bg-purple-700 after:w-full after:h-full after:left-0 after:top-0 after:duration-1000 after:transition-width after:bg-opacity-10 active:after:duration-0 active:after:w-0"
          onClick={incrementAsyncOnClick}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
