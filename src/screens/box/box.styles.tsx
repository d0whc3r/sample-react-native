import styled from 'styled-components/native';
import { CSSProp } from 'styled-components';

export const BoxView = styled.View`
  border: 3px solid black;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
`;

export interface TextStyledProps {
  styles?: CSSProp;
}

const border = 2;
const padding = 5;

export const TextStyled = styled.Text<TextStyledProps>`
  border: ${border}px solid red;
  padding: ${border + padding}px ${border + padding}px 0;
  line-height: 16px;
  ${(props) => props.styles}
`;
