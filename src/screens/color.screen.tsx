import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { ViewBoxColorInfo } from '../types';
import ColorBox from '../components/color-box/color-box.components';

const ColorScreen: React.FC = () => {
  const [colors, setColors] = useState<ViewBoxColorInfo[]>([]);
  const randomRgb = () => {
    return {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
  };
  return (
    <View>
      <Button title="Add a color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList data={colors} keyExtractor={(color) => Object.values(color).join('-')} renderItem={({ item }) => <ColorBox background={item} />} />
    </View>
  );
};

export default ColorScreen;
