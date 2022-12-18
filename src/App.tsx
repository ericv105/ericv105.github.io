import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* enableColorScheme for dark scroll bar */}
        <CssBaseline enableColorScheme /> 
        <Navbar />
        <Intro />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;
