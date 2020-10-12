import React from 'react';
import { Button, Text, View } from 'react-native';

export interface ColorCounterProps {
  color: 'red' | 'green' | 'blue';
  value: number;
  set: (x: number) => void;
  number?: number;
}

const DEFAULT_DIFF_NUMBER = 15;

const ColorCounter: React.FC<ColorCounterProps> = ({ color, value, set, number = DEFAULT_DIFF_NUMBER }) => {
  console.log('reload', color, value);

  const increase = () => {
    set(Math.min(value + number, 256));
  };

  const decrease = () => {
    set(Math.max(value - number, 0));
  };

  return (
    <View>
      <Text style={{ textTransform: 'capitalize' }}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={increase} />
      <Button title={`Decrease ${color}`} onPress={decrease} />
    </View>
  );
};

ColorCounter.defaultProps = {
  number: DEFAULT_DIFF_NUMBER
};

export default React.memo(ColorCounter);
