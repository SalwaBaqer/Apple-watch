//components
import SlideShow from "./components/SlideShow";
import NavBar from "./components/NavBar";
import ToggleButton from "./components/ToggleButton";
import Title from "./Title";

//style
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Explosion } from "./styles";
import { useState } from "react";

const theme = {
  mainColor: "#242424",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  ToggleButtonBackgroundColor: "red",
};

function App() {
  const [isEmpty, setisEmpty] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      {isEmpty ? (
        <>
          <Title />
          <SlideShow />
        </>
      ) : (
        <Explosion src="http://25.media.tumblr.com/2445ca33e5353b49a7226242e023a5a7/tumblr_n2jqrvJlTq1trh6n1o1_250.gif" />
      )}
      <ToggleButton isEmpty={isEmpty} setisEmpty={setisEmpty} />
    </ThemeProvider>
  );
}

export default App;
