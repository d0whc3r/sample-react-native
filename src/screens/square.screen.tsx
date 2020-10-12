import React, { useCallback, useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import ColorCounter, { ColorCounterProps } from '../components/color-counter/color-counter.component';
import { ViewBoxColorInfo } from '../types';
import ColorBox from '../components/color-box/color-box.components';
import { SQUARE_INITIAL_STATE, squareReducer } from '../redux/square/square.reducer';
import { SET_COLOR } from '../redux/square/square.types';

const colors: (keyof ViewBoxColorInfo)[] = ['red', 'green', 'blue'];

const SquareScreen: React.FC = () => {
  const [colorsValue, setColor] = useState<ViewBoxColorInfo>({
    red: 0,
    green: 0,
    blue: 0
  });

  const callBack = (colorName: keyof ViewBoxColorInfo) =>
    useCallback((value) => {
      setColor((prev) => ({ ...prev, [colorName]: value }));
    }, []);

  return (
    <View>
      {colors.map((color) => (
        <ColorCounter key={color} color={color} value={colorsValue[color]} set={callBack(color)} number={50} />
      ))}
      <Text>{Object.entries(colorsValue).join(' ')}</Text>
      <ColorBox background={colorsValue} />
    </View>
  );
};

const SquareScreenWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(squareReducer, SQUARE_INITIAL_STATE);

  const callBack = (colorName: keyof ViewBoxColorInfo) =>
    useCallback<ColorCounterProps['set']>((value) => {
      dispatch({ type: SET_COLOR, payload: { color: colorName, value } });
    }, []);

  return (
    <View>
      {colors.map((color) => (
        <ColorCounter key={color} color={color} value={state[color]} set={callBack(color)} />
      ))}
      <Text>{Object.entries(state).join(' ')}</Text>
      <ColorBox background={state} />
    </View>
  );
};

// export default SquareScreen;
export default SquareScreenWithReducer;
