import styled from "styled-components/native";
import {colors} from "./variables";

export const AppView = styled.View`
  flex: 1;
  background-color: ${colors.background};
  color: ${colors.text};
  align-items: center;
`

export const Text = styled.Text`
  color: ${colors.text};
`