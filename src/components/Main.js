import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import style from "../style";

export default function Main() {
  const classes = style();
  return (
    <Container>
     
        <AppBar className={classes.appBar} sx={{boxShadow:0}}>
          <Toolbar className={classes.navFrame}>
            <Typography className={classes.navItem}>Contact</Typography>
            <Typography className={classes.navItem}>Work</Typography>
            <IconButton
              sx={{
                position: "absolute",
                width: "44px",
                height: "44px",
                left: "calc(50% - 44px/2)",

                /* Primary/Lighter */

                background: "#E7D7F6",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    </Container>
  );
}
