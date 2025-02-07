import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

function App() {
  const {darkMode} = useAppSelector((state) => state.ui);

  const paletteMode = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle,rgb(7, 15, 48), #111B27)"
            : "radial-gradient(circle, #AECF9F, #F0F9FF)",
          py: 8,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
