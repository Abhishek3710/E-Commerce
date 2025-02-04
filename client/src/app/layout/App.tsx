import { useEffect, useState } from "react";
import { Product } from "../models/product";

import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const paletteMode = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:5001/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box sx={{minHeight:'100vh', background:darkMode ? "radial-gradient(circle, #1E3ABA, #111B27)"
          : "radial-gradient(circle, #AECF9F, #F0F9FF)", py:8}}>
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
