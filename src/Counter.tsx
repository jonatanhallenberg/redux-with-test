import React from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { increase, decrease } from './store/counterSlice';

const Counter = () => {

    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.count);
    return <>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(decrease())}>-1</button>
        <button onClick={() => dispatch(increase())}>+1</button>
    </>
}
export default Counter;