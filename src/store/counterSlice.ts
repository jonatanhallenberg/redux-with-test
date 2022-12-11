import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    count: number
}

// Define the initial state using that type
const initialState: CounterState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase(state, action: PayloadAction<void>) {
            state.count++;
        },
        decrease(state, action: PayloadAction<void>) {
            state.count--;
        },
        increaseByX(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
})

export const { increase, decrease, increaseByX } = counterSlice.actions
export default counterSlice.reducer