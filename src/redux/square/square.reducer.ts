import { DECREASE_COLOR, INCREASE_COLOR, SET_COLOR, SquareActionTypes, SquareState } from './square.types';

export const SQUARE_INITIAL_STATE: SquareState = {
  red: 0,
  green: 0,
  blue: 0
};

export function squareReducer(state = SQUARE_INITIAL_STATE, action: SquareActionTypes) {
  switch (action.type) {
    case INCREASE_COLOR: {
      const { value, color } = action.payload;
      const actual = state[color];
      return {
        ...state,
        [color]: Math.min(actual + value, 256)
      };
    }
    case DECREASE_COLOR: {
      const { value, color } = action.payload;
      const actual = state[color];
      return {
        ...state,
        [color]: Math.max(actual - value, 0)
      };
    }
    case SET_COLOR: {
      const { value, color } = action.payload;
      return {
        ...state,
        [color]: value
      };
    }
    default:
      return state;
  }
}
