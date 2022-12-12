# Workbook - Steg-för-steg
## Counter-komponent med useState

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
---

4. Ta bort App.test.tsx

Ta bort *App.test.tsx* då testfallet inte längre är aktuellt.

---

```sh
# Checka ut koden fram till hit
git checkout 1-counter-with-usestate
```
---

## Lägga in Redux

1. Installera npm-paket

```sh
npm install redux
npm install @reduxjs/toolkit
npm install react-redux
```

2. Skapa counterSlice.ts

```ts
// store/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increase(state, action) {
      state.count++;
    },
    decrease(state, action) {
      state.count--;
    }
  }
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer
```

3. Skapa store/index.ts och lägg in counterReducer

```tsx
// store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})
```

4. Lägg in Provider i index.tsx

```tsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```


5. Installera Chrome Redux DevTools

- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

```sh
npm start
```

- Öppna sidan i Chrome och kontrollera att Redux fungerar genom att öppna Redux DevTools. Om State innehåller *counter* är allt ok!

![](20221210121611.png)  

---

```sh
# Checka ut koden fram till hit
git checkout 2-redux-installed
```
---

## Refaktorisera Counter att använda Redux

1. Använd Redux i Counter.tsx

```diff
import React, {useState} from 'react';
+import { useSelector, useDispatch } from 'react-redux'
+import { increase, decrease } from './store/counterSlice';

const Counter = () => {

    
-    const [ count, setCount ] = useState(0);
+   const dispatch = useDispatch();
+   const count = useSelector(state => state.counter.count);
    return <>
        <p>Count: {count}</p>
+        <button onClick={() => dispatch(decrease())}>-1</button>
-        <button onClick={() => setCount(count - 1)}>-1</button>
+        <button onClick={() => dispatch(increase())}>+1</button>
-        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
}
export default Counter;
```

2. Testa i Chrome

```sh
npm start
```

- Öppna sidan i Chrome och kolla vad som händer i Redux DevTools när man trycker på plus- och minusknapparna

---

```sh
# Checka ut koden fram till hit
git checkout 3-counter-with-redux
```
---
```
