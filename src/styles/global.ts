import styled from "styled-components/native";
import {colors, sizes} from "./variables";
import {Colors, Sizes} from "../types/Variablres";

export const ScreenView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
  padding-bottom: 55px;
`

export const Text = styled.Text<{ $color?: Colors, $size?: Sizes }>`
  color: ${({ $color }) => $color ? colors[$color] : colors.text};
  font-size: ${({ $size }) => $size ? sizes[$size] : sizes.h6}px;
`;

export const CentredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`