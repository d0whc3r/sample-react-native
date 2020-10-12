export interface SquareState {
  red: number;
  green: number;
  blue: number;
}

export const INCREASE_COLOR = 'square/INCREASE_COLOR';
export const DECREASE_COLOR = 'square/DECREASE_COLOR';
export const SET_COLOR = 'square/SET_COLOR';

export interface SquarePayload {
  color: keyof SquareState;
  value: number;
}

export interface SquareIncreaseColor {
  type: typeof INCREASE_COLOR;
  payload: SquarePayload;
}

export interface SquareDecreaseColor {
  type: typeof DECREASE_COLOR;
  payload: SquarePayload;
}

export interface SquareSetColor {
  type: typeof SET_COLOR;
  payload: SquarePayload;
}

export type SquareActionTypes = SquareIncreaseColor | SquareDecreaseColor | SquareSetColor;
