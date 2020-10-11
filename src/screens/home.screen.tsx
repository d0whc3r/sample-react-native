import React from 'react';
import { BigText } from '../styles';
import { Button, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoutes, RootStackParamList } from '../types';

type HomeScreenProps = StackScreenProps<RootStackParamList, NavigationRoutes.HOME>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <BigText>Home</BigText>
      {Object.values(NavigationRoutes)
        .filter((name) => name !== NavigationRoutes.HOME)
        .map((name) => (
          <Button key={name} title={'Go to ' + name} onPress={() => navigation.navigate(name)} />
        ))}
    </View>
  );
};

export default HomeScreen;
