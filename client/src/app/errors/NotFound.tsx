import { SearchOff } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      component={Paper}
      sx={{
        height: 400,
        width:1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        marginTop:10
      }}
    >
      <SearchOff sx={{ fontSize: 100, color: "primary.main" }} />
      <Typography variant="h3" gutterBottom>
        Oops! We could not find what you were looking for.
      </Typography>
      <Button
        component={Link}
        to='/catalog'
        fullWidth
        variant="contained"
        color="primary"
      >
        Go back to shop
      </Button>
    </Container>
  );
};

export default NotFound;
