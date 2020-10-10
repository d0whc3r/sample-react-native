import React from 'react';
import { BigText } from '../styles';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen: React.FC = () => {
  return <View>
    <BigText>Home</BigText>
    <Button
      title="Go to components Demo"
      onPress={() => console.log('button! demo')}
    />
    <TouchableOpacity onPress={() => console.log('opacity')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>;
};

export default HomeScreen;
