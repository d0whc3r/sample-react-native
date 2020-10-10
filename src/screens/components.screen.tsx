import React from 'react';
import { Button, View } from 'react-native';
import { BigText } from '../styles';

const ComponentsScreen: React.FC = () => {
  return (
    <View>
      <BigText>This is the components screen</BigText>
      <Button title="test" onPress={() => undefined} />
    </View>
  );
};

ComponentsScreen.displayName = 'ComponentsScreen';

export default ComponentsScreen;
