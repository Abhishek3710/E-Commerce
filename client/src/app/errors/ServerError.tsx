import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ServerError = () => {
  const { state } = useLocation();
  return (
    <Paper>
      {state?.error ? (
        <>
          <Typography variant="h3" color="secondary" sx={{p:3}}>{state.error.title}</Typography>
          <Divider />
          <Typography variant="body1" sx={{ padding: 4 }}>{state.error.detail}</Typography>
        </>
      ) : (
        <Typography>Server Error</Typography>
      )}
    </Paper>
  );
};

export default ServerError;
