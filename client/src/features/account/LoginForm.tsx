import { LockOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../../lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLazyUserInfoQuery, useLoginMutation } from "./accountApi";

const LoginForm = () => {
  const [login, {isLoading}] = useLoginMutation();
  const [fetchUserInfo] = useLazyUserInfoQuery();
  const { register, handleSubmit,formState: { errors }} = useForm<LoginSchema>({ mode:'onTouched', resolver:zodResolver(loginSchema)});
  const location = useLocation();
  const navigate = useNavigate();

  
  const onSubmit = async (data: LoginSchema) => {
    await login(data);
    await fetchUserInfo();
    navigate(location.state?.from || '/catalog');
  };
  return (
    <Container component={Paper} maxWidth="sm" sx={{ borderRadius: "3" }}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginTop="8"
      >
        <LockOutlined sx={{ mt: 3, color: "secondary.main", fontSize: 40 }} />
        <Typography variant="h5">Sign In</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          width="100%"
          display="flex"
          flexDirection="column"
          gap={3}
          marginY={3}
        >
          <TextField
            fullWidth
            label="Email"
            autoFocus // when component loads, cursor inside this email box
            {...register("email")}
            error={!!errors.email} //converts to a boolean from field error
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password} //converts to a boolean from field error
            helperText={errors.password?.message}
          />
          <Button disabled={isLoading} variant="contained" type="submit">
            Sign In
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don't have an account?
            <Typography
              sx={{ ml: 2 }}
              component={Link}
              to="/register"
              color="primary"
            >
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
