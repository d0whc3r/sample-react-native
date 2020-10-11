import styled from 'styled-components/native';
import { ViewBoxColorInfo } from '../../types';

export interface ViewBoxColorProps {
  background: ViewBoxColorInfo;
}

export const ViewBoxColor = styled.View<ViewBoxColorProps>`
  height: 100px;
  width: 100px;
  background-color: ${({ background }) => `rgb(${background.red}, ${background.green}, ${background.blue})`};
`;
