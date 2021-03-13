import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
   
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
export const ImageStyled = styled.img`
  width: 350px;
  margin-left: 480px;
  margin-right: 450px;
  margin-bottom: 50px;
  z-index: 10;
`;
export const StyledWrapper = styled.div`
  position: relative;
`;

export const WatchStyled = styled.img`
  width: 350px;
  /* margin-top:20px; */
  margin-left: 480px;
  margin-right: 480px;
  position: absolute;
  z-index: 20;
`;
export const TopDivStyle = styled.div`
  position: absolute;
  margin-right: 100px;
`;
export const ButtomDivStyle = styled.div`
  z-index: 9;
  margin-right: 100px;
  background-color: black;
`;

export const NavStyled = styled.div`
  margin-top: 1150px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 4%;
`;
export const Title = styled.h1`
  width: 4%;
`;

export const ToggleButtonWrapper = styled.div`
  margin-top: 600px;
  margin-bottom: 400px;
  margin-right: 500px;
  margin-left: 500px;
`;
export const ToggleWrapperStyled = styled.div`
  margin-bottom: 00px;
`;
export const Explosion = styled.img`
  width: 100%;
  height: 100%;
`;
