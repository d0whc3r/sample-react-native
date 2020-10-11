import React from 'react';
import { BigText } from '../styles';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoutes, RootStackParamList } from '../types';

type HomeScreenProps = StackScreenProps<RootStackParamList, NavigationRoutes.HOME>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <BigText>Home</BigText>
      <Button title="Go to components Demo" onPress={() => navigation.navigate(NavigationRoutes.COMPONENT)} />
      <Button title="Go to list Demo" onPress={() => navigation.navigate(NavigationRoutes.LIST)} />
      <TouchableOpacity onPress={() => console.log('opacity')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
