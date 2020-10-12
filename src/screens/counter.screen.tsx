import React, { useReducer, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { counterReducer, INITIAL_STATE } from '../redux/counter/counter.reducer';
import { DECREASE_COUNTER, INCREASE_COUNTER } from '../redux/counter/counter.types';

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

const CounterScreenWithReducer: React.FC = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  return (
    <View>
      <Button color="green" title="+" onPress={() => dispatch({ type: INCREASE_COUNTER })} />
      <Button color="red" title="-" onPress={() => dispatch({ type: DECREASE_COUNTER })} />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

// export default CounterScreen;
export default CounterScreenWithReducer;
