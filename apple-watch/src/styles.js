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
  width: 320px;
  justify-content: centre;
`;

export const BackgroundDiv = styled.div`
  background-image: url(${apple1});
`;
