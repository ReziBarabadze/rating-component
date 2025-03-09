import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  selectedRating: number;
}

const ThanksMessage = ({ selectedRating }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="images/illustration-thank-you.svg"
        alt="receipt"
        height={108}
        width={162}
      />
      <Box
        sx={{
          backgroundColor: "#262e38",
          borderRadius: "22.5px",
          padding: "0.5rem 1rem",
          margin: "2rem 0",
        }}
      >
        <Typography sx={{ color: "#fc7614" }}>
          You selected {selectedRating} out of 5
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 600 }}>
        Thank you
      </Typography>
      <Typography
        sx={{ color: "#969fad", textAlign: "center", marginTop: "1rem" }}
      >
        We appreciate you talking the time to give a rating. If you ever need
        more support, do not hesitate to get in touch!
      </Typography>
    </Box>
  );
};

export default ThanksMessage;
