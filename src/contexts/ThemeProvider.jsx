import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  shape: { borderRadius: 5 },
});

function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
