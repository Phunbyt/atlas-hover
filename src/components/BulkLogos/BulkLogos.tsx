import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  ICON_1,
  ICON_11,
  ICON_12,
  ICON_13,
  ICON_14,
  ICON_15,
  ICON_16,
  ICON_17,
  ICON_18,
  ICON_19,
  ICON_2,
  ICON_20,
  ICON_21,
  ICON_22,
  ICON_3,
  ICON_4,
  ICON_5,
  ICON_6,
  ICON_7,
  ICON_8,
  ICON_9,
} from "../../assets";

const logos = [
  ICON_1,
  ICON_2,
  ICON_3,
  ICON_4,
  ICON_5,
  ICON_6,
  ICON_7,
  ICON_8,
  ICON_9,
  //   ICON_10,
  ICON_11,
  ICON_12,
  ICON_13,
  ICON_14,
  ICON_15,
  ICON_16,
  ICON_17,
  ICON_18,
  ICON_19,
  ICON_20,
  ICON_21,
  ICON_22,
];

export default function BulkLogos() {
  return (
    <Box>
      <Grid container spacing={6} minHeight={160} wrap="wrap">
        {logos.map((logo) => (
          <Grid
            sx={{
              animation: "shadow-drop-center 1s ease-in-out infinite both",
              animationFillMode: "both",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar src={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
