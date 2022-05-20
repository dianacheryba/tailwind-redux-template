import React from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={props.incrementOnClick}
        >
          +
        </button>
        <span className={styles.value}>{props.count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={props.decrementOnClick}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={props.incrementAmount}
          onChange={props.changeIncrementAmount}
        />
        <button
          className={styles.button}
          onClick={props.incrementByAmountOnClick}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={props.incrementAsyncOnClick}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
