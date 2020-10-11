import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home.screen';
import ComponentsScreen from './src/screens/components.screen';
import ListScreen from './src/screens/list.screen';
import { NavigationRoutes, RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.HOME}>
        <Stack.Screen name={NavigationRoutes.HOME} component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name={NavigationRoutes.COMPONENT} component={ComponentsScreen} />
        <Stack.Screen name={NavigationRoutes.LIST} component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
