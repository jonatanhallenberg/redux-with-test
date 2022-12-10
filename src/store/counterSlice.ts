import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increase(state, action: PayloadAction<void>) {
            state.count++;
        },
        decrease(state, action: PayloadAction<void>) {
            state.count--;
        }
    }
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer