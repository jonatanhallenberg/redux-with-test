# How I setup this repo

1. Skapa react app

```sh
npx create-react-app redux-with-test --template typescript
```

2. Skapa Counter.tsx

```tsx
//Counter.tsx
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
```

3. Rensa App.tsx och lägg in Counter

```tsx
//App.tsx
import React from 'react';
import Counter from './Counter';

const App = () => (
  <>
    <Counter />
  </>
)
export default App;
```

3. 