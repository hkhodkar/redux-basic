import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'


const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}


const reducer = combineReducers({
    counterReducer
  })

const store = configureStore({reducer});

export default store;