import { Box } from "@mui/material";
import React from "react";
import frame from "../Images/frame1.png";

const styles = theme => ({
    Card: {
      width: 300,
      margin: 'auto'
    },
    Media: {
      height: 550,
      width: '100%'
    }
  });

const HomePage = () => {

    const classes = styles();
  return (

    <Box
      sx={{ position: "absolute", width: 1500, height: 800, left: 0, right:0}}
    >
      <img className={classes.Media} src={frame}></img>
    </Box>
  );
};

export default HomePage;
