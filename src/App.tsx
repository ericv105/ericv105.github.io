import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Intro />
      </ThemeProvider>
    </div>
  );
}

export default App;
