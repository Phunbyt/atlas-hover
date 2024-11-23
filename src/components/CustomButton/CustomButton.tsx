import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { appColors } from "../../constants/colors";
import { colors, Typography } from "@mui/material";

type CustomButtonType = {
  text: string;
  isPrimary?: boolean;
  href: string;
  onClick?: () => void;
};

export default function CustomButton({
  text,
  isPrimary = true,
  href,
  onClick,
}: CustomButtonType) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: isPrimary ? appColors.PRIMARY : appColors.SECONDARY,
        color: isPrimary ? appColors.WHITE : appColors.PRIMARY,
        textTransform: "none",
        width: "100%",
        height: "100%"
      }}
      href={href}
      onClick={onClick}
    >
      <Typography sx={{ fontWeight: "bold" }} component="p">
        {text}
      </Typography>
    </Button>
  );
}
