import React, { useState } from 'react';
import { Text, View } from 'react-native';
import InputText from '../components/text-input/text-input.component';

const TextScreen: React.FC = () => {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter Name:</Text>
      <InputText value={value} onChangeText={setValue} />
      <Text>Name is {value}</Text>
      <Text>Enter Password:</Text>
      <InputText value={password} onChangeText={setPassword} />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

export default TextScreen;
