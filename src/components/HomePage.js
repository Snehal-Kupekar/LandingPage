import { Box } from "@mui/material";
import React from "react";
import frame from "../Images/frame1.png";
const HomePage = () => {
  return (
    <Box
      sx={{ position: "absolute", width: 1440, height: 800, left: 0, top: 119 }}
    >
      <img src={frame}></img>
    </Box>
  );
};

export default HomePage;
