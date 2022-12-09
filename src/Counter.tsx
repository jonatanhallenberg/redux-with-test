import React, {useState} from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0);
    return <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setCount(count+1)}>+1</button>
    </>
}
export default Counter;