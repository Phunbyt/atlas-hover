import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { appColors } from "../../constants/colors";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HeroAltCard({
  subText,
  subTextColor,
  backgroundColor,
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        background: backgroundColor,
        borderRadius: "1rem",
      }}
    >
      <CardContent>
        <Typography>
          <FlashOnIcon
            sx={{
              color: appColors.WHITE,
            }}
          />
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
          }}
          margin={"1.5rem"}
          color={subTextColor}
          variant="body2"
        >
          {subText}
        </Typography>
      </CardContent>
    </Card>
  );
}
