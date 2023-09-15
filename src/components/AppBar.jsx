import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Juan Manuel Alcaide Portfolio
          </Typography>
          <Button color="inherit">About me</Button>
          <Button color="inherit">Proyects</Button>
          <Button color="inherit">Formal Resume</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
