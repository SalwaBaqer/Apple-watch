import styled, { createGlobalStyle } from "styled-components";

//image
import watch from "./images/watch.png";
import apple1 from "./images/apple1.png"
export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ImageStyled = styled.img`
  width: 350px;
  margin-left: 550px;
  margin-right:550px;
  margin-bottom:50px;
z-index:10;

`;
export const StyledWrapper = styled.div`
position: relative;

`;

export const WatchStyled=styled.img`
width:350px;
/* margin-top:20px; */
margin-left:550px;
margin-right:580px;
  
       position: absolute;
       z-index:20;
`;
export const TopDivStyle=styled.div`
position: absolute;
margin-right:100px;


`
export const ButtomDivStyle=styled.div`
z-index: 9;
margin-right:100px;

`