import { useState } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index'

const Counter = () => {

  const [increaseBy, setIncreaseBy] = useState(2);
  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector(state => state.counter.toggleCounter);
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
   };

  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  function handleDecrement() {
    dispatch(counterActions.decrement());
  }

  function handleOnChangeIncrement(event) {
    setIncreaseBy(event.target.value);
  }

  function handleIncreaseBy() {
    dispatch(counterActions.increaseBy(+increaseBy))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      { toggleCounter && 
        <>
            <div>
              <button onClick={handleIncrement}>Increment</button>
              <button onClick={handleDecrement}>decrement</button>
            </div>
            <div>
              <button onClick={handleIncreaseBy}>Increase by {increaseBy}</button>
              <input type="number" value={increaseBy} onChange={handleOnChangeIncrement} />
            </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
