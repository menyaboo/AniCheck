import styled from "styled-components/native";
import {colors} from "../../../styles/variables";

export const TitleItemView = styled.View`
  flex-direction: row;
  padding: 20px;
  margin: 0 ;
  width: 100%;
  align-items: center;
  max-height: 200px;
  overflow: hidden;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.backgroundSecondary};
`

export const ImageTitle = styled.Image`
  width: 120px;
  height: 170px;
  border-radius: 10px;
  
`

export const Description = styled.View`
  margin: 0 20px;
  max-width: 250px;
  align-items: start;
`