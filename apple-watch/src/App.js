//components
import SlideShow from "./components/SlideShow";
import NavBar from "./components/NavBar";
import ToggleButton from "./components/ToggleButton";

//style
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  ToggleButtonBackgroundColor: "red",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <SlideShow />
      <ToggleButton />
    </ThemeProvider>
  );
}

export default App;
