import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home.screen';
import ComponentsScreen from './src/screens/components.screen';
import ListScreen from './src/screens/list.screen';
import { NavigationRoutes, RootStackParamList } from './src/types';
import ImageScreen from './src/screens/image.screen';
import CounterScreen from './src/screens/counter.screen';
import ColorScreen from './src/screens/color.screen';
import SquareScreen from './src/screens/square.screen';
import TextScreen from './src/screens/text.screen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.HOME}>
        <Stack.Screen name={NavigationRoutes.HOME} component={HomeScreen} options={{ title: 'App' }} />
        <Stack.Screen name={NavigationRoutes.COMPONENT} component={ComponentsScreen} />
        <Stack.Screen name={NavigationRoutes.LIST} component={ListScreen} />
        <Stack.Screen name={NavigationRoutes.IMAGE} component={ImageScreen} />
        <Stack.Screen name={NavigationRoutes.COUNTER} component={CounterScreen} />
        <Stack.Screen name={NavigationRoutes.COLOR} component={ColorScreen} />
        <Stack.Screen name={NavigationRoutes.SQUARE} component={SquareScreen} />
        <Stack.Screen name={NavigationRoutes.TEXT} component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
