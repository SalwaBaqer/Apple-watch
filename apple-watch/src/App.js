//components
import SlideShow from "./components/SlideShow";
import NavBar from "./components/NavBar";
import About from "./components/About";

//style
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  AboutBackgroundColor: "red",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <SlideShow />
      <About />
    </ThemeProvider>
  );
}

export default App;
