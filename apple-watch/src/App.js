//components
import SlideShow from "./components/SlideShow";

//style
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ margin: "200px" }}>
        <SlideShow />
      </div>
    </ThemeProvider>
  );
}

export default App;
