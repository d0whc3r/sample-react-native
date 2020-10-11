import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import ColorCounter from '../components/color-counter/color-counter.component';
import { ViewBoxColorInfo } from '../types';
import ColorBox from '../components/color-box/color-box.components';

const SquareScreen: React.FC = () => {
  const colors: (keyof ViewBoxColorInfo)[] = ['red', 'green', 'blue'];
  const [colorsValue, setColor] = useState<ViewBoxColorInfo>({
    red: 0,
    green: 0,
    blue: 0
  });

  const callBack = (colorName: keyof ViewBoxColorInfo) =>
    useCallback(
      (value) => {
        setColor((prev) => ({ ...prev, [colorName]: value }));
      },
      [colorsValue[colorName]]
    );

  return (
    <View>
      {colors.map((color) => (
        <ColorCounter key={color} color={color} value={colorsValue[color]} set={callBack(color)} />
      ))}
      <Text>{Object.entries(colorsValue).join(' ')}</Text>
      <ColorBox background={colorsValue} />
    </View>
  );
};

export default SquareScreen;
