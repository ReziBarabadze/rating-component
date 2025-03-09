import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RatingButton from "./RatingButton";

const RatingsContainer = () => {
  const buttons = [1, 2, 3, 4, 5];

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
          marginBottom: "30px",
        }}
      >
        <Image src="images/icon-star.svg" alt="icon" width={16} height={16} />
      </Box>
      <Typography sx={{ fontSize: "2rem", color: "white", fontWeight: 600 }}>
        How did we do?
      </Typography>
      <Typography sx={{ color: "#969fad", margin: "24px 0" }}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {buttons.map((button) => {
          return <RatingButton key={button} label={button} />;
        })}
      </Box>
      <Button
        sx={{
          backgroundColor: "#fc7614",
          color: "#131518",
          fontWeight: 600,
          marginTop: "2rem",
          width: "100%",
          borderRadius: "22.5px",
          padding: "0.75rem",
        }}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default RatingsContainer;
