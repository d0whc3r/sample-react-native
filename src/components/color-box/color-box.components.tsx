import React from 'react';
import { ViewBoxColor, ViewBoxColorProps } from './color-box.styles';

interface ColorBoxProps extends ViewBoxColorProps {}

const ColorBox: React.FC<ColorBoxProps> = ({ background }) => {
  return <ViewBoxColor background={background} />;
};

export default ColorBox;
