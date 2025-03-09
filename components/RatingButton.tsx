import { Button } from "@mui/material";
import React from "react";

interface Props {
  rating: number;
  setSelected: (arg1: number) => void;
  selectedRating: number;
}

const RatingButton = ({ rating, setSelected, selectedRating }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: rating === selectedRating ? "#fff" : "#262e38",
        color: rating === selectedRating ? "#262e38" : "#969fad",
        width: "51px",
        height: "51px",
        borderRadius: "50%",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#fc7614",
          color: "#262e38",
        },
      }}
      onClick={() => setSelected(rating)}
    >
      {rating}
    </Button>
  );
};

export default RatingButton;
