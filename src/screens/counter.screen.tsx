import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const CounterScreen: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button color="green" title="+" onPress={() => setCounter(counter + 1)} />
      <Button color="red" title="-" onPress={() => setCounter(counter - 1)} />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
