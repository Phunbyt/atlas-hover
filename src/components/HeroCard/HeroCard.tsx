import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HeroCard({
  mainText,
  subText,
  mainTextColor,
  subTextColor,
  backgroundColor,
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        background: backgroundColor,
        textAlign: "center",
        borderRadius: "1rem",
      }}
    >
      <CardContent>
        <Typography
          fontWeight={"bold"}
          color={mainTextColor}
          variant="h4"
          component="div"
          margin={"1.5rem"}
        >
          {mainText}
        </Typography>

        <Typography margin={"1.5rem"} color={subTextColor} variant="body2">
          {subText}
        </Typography>
      </CardContent>
    </Card>
  );
}
