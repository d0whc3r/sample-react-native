import React from 'react';
import { BoxView, TextStyled } from './box.styles';
import { StyleSheet } from 'react-native';

const BoxScreen: React.FC = () => {
  return (
    <BoxView>
      <TextStyled styles={{ flex: 4, left: 10, bottom: 10 }}>Box screen 1</TextStyled>
      <TextStyled styles={{ flex: 4, 'align-self': 'flex-end', position: 'absolute', right: 10 }}>Box screen 2</TextStyled>
      <TextStyled styles={{ flex: 2, ...StyleSheet.absoluteFillObject, background: 'gray' }}>Box screen 3</TextStyled>
    </BoxView>
  );
};

export default BoxScreen;
