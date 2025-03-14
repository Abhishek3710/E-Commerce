import { Typography } from "@mui/material";
import { useUserInfoQuery } from "../../features/account/accountApi"
import { Navigate, Outlet, useLocation } from "react-router-dom";



const RequireAuth = () => {
  const {data: user, isLoading} = useUserInfoQuery();

  const location = useLocation();

  if(isLoading) return <Typography> Loading ... </Typography>

  if(!user) return  <Navigate to='/login' state={{from : location}} />

  return (
    <Outlet />
  )
}

export default RequireAuth