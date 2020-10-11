import React from 'react';
import { FlatList } from 'react-native';
import { TextMargin } from '../styles';

const ListScreen: React.FC = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 }
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <TextMargin>
            {item.name} - Age {item.age}
          </TextMargin>
        );
      }}
    />
  );
};

export default ListScreen;
