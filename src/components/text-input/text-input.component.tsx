import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInputStyled } from './text-input.styles';

export interface InputTextProps extends TextInputProps {
  readonly?: boolean;
}

const InputText: React.FC<InputTextProps> = ({ readonly, ...props }) => {
  return <TextInputStyled {...props} editable={!readonly} />;
};

InputText.defaultProps = {
  readonly: false,
  autoCapitalize: 'none',
  autoCorrect: false
};

export default InputText;
