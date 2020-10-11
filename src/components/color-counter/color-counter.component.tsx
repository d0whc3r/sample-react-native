import React, { useMemo, useRef } from 'react';
import { Button, Text, View } from 'react-native';

interface ColorCounterProps {
  color: 'red' | 'green' | 'blue';
  value: number;
  set: (x: number) => void;
}

const ColorCounter: React.FC<ColorCounterProps> = ({ color, value, set }) => {
  console.log('reload', color, value);

  const increase = () => {
    set(Math.min(value + 50, 256));
  };

  const decrease = () => {
    set(Math.max(value - 50, 0));
  };

  return (
    <View>
      <Text style={{ textTransform: 'capitalize' }}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={increase} />
      <Button title={`Decrease ${color}`} onPress={decrease} />
    </View>
  );
};

export default React.memo(ColorCounter);
