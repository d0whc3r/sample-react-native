import { CounterActionTypes, DECREASE_COUNTER, INCREASE_COUNTER } from './counter.types';

export const INITIAL_STATE = {
  counter: 0
};

export function counterReducer(state = INITIAL_STATE, action: CounterActionTypes) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
