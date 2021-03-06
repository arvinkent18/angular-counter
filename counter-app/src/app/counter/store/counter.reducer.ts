import { createReducer, on } from "@ngrx/store";
import { customIncrement, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
  initialState, 
  on(increment, state => ({
      ...state,
      counter: state.counter + 1 
  })),
  on(decrement, state => ({
      ...state,
      counter: state.counter - 1,
  })),
  on(reset, (state) => ({
      ...state,
      counter: 0,
  })),
  on(customIncrement, (state, payload) => ({
    ...state,
    counter: state.counter + payload.counter,
  })),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}