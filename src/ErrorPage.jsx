import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        id="error-page"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography my={2} variant="h1">
          Oops!
        </Typography>
        <Typography my={2} variant="h6">
          Sorry, an unexpected error has occurred.
        </Typography>

        <Typography my={2} variant="h6" fontStyle={"italic"}>
          {error.statusText || error.message}
        </Typography>
      </div>
    </ThemeProvider>
  );
}
