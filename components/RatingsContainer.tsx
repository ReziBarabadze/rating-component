import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const RatingsContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232a34",
        padding: "2rem",
        width: "412px",
        height: "416px",
        borderRadius: "30px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#262e38",
          borderRadius: "50%",
          height: "3rem",
          width: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="images/icon-star.svg" alt="icon" width={16} height={16} />
      </Box>
      <Typography sx={{ fontSize: "2rem", color: "white", fontWeight: 600 }}>
        How did we do?
      </Typography>
      <Typography sx={{ color: "#969fad" }}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Typography>
    </Box>
  );
};

export default RatingsContainer;
