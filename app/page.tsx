import RatingsContainer from "@/components/RatingsContainer";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
      }}
    >
      <RatingsContainer />
    </Box>
  );
};

export default Home;
