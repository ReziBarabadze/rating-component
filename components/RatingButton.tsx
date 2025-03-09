import { Button } from "@mui/material";
import React from "react";

interface Props {
  label: number;
}

const RatingButton = ({ label }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: "#262e38",
        color: "#969fad",
        width: "51px",
        height: "51px",
        borderRadius: "50%",
      }}
    >
      {label}
    </Button>
  );
};

export default RatingButton;
