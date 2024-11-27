import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
