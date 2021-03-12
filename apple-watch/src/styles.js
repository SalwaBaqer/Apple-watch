import styled, { createGlobalStyle } from "styled-components";

//image
import apple1 from "./images/apple1.png";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ImageStyled = styled.img`
  width: 350px;
  margin-left: 130px;
`;
export const ImageWatchStyled = styled.img`
  width: 300px;
  margin-top: 30px;
  margin-left: 150px;
`;
