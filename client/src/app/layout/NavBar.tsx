import {DarkMode, LightMode } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

type Props = {
    darkMode : boolean,
    setDarkMode: (mode: boolean)=>void
}

const NavBar = ({darkMode, setDarkMode}: Props) => {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)}> 
                {darkMode?<DarkMode /> : <LightMode />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar