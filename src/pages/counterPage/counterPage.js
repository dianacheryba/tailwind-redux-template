import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../../redux/counter/counterSlice";
import Counter from "./components/Counter";

const CounterPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementOnClick = () => {
    dispatch(increment());
  };
  const decrementOnClick = () => {
    dispatch(decrement());
  };
  const changeIncrementAmount = (e) => {
    setIncrementAmount(e.target.value);
  };
  const incrementByAmountOnClick = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
  };
  const incrementAsyncOnClick = () => {
    dispatch(incrementAsync(Number(incrementAmount) || 0));
  };

  return (
    <Counter
      count={count}
      incrementAmount={incrementAmount}
      incrementOnClick={incrementOnClick}
      decrementOnClick={decrementOnClick}
      changeIncrementAmount={changeIncrementAmount}
      incrementByAmountOnClick={incrementByAmountOnClick}
      incrementAsyncOnClick={incrementAsyncOnClick}
    />
  );
};

export default CounterPage;
