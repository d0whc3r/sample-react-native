export const INCREASE_COUNTER = 'counter/INCREASE_COUNTER';
export const DECREASE_COUNTER = 'counter/DECREASE_COUNTER';

export interface CounterState {
  counter: number;
}

export interface CounterIncreaseAction {
  type: typeof INCREASE_COUNTER;
}

export interface CounterDecreaseAction {
  type: typeof DECREASE_COUNTER;
}

export type CounterActionTypes = CounterIncreaseAction | CounterDecreaseAction;
