import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './store/counterSlice';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter.count);
    return <>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(decrease())}>-1</button>
        <button onClick={() => dispatch(increase())}>-1</button>
    </>
}
export default Counter;