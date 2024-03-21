import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggleCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.toggleCounter = !state.toggleCounter;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;