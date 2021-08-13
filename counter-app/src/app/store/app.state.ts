import { CounterState } from './../counter/store/counter.state';
import { counterReducer } from '../counter/store/counter.reducer';

export interface AppState {
  counter: CounterState,
}

export const appReducer = {
  counter: counterReducer,
}