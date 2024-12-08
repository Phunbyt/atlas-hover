import Button from "@mui/material/Button";
import { appColors } from "../../constants/colors";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type CustomButtonType = {
  text: string;
  isPrimary?: boolean;
  isLoading?: boolean;
  href: string;
  onClick?: () => void;
};

export default function CustomButton({
  text,
  isPrimary = true,
  href,
  onClick,
  isLoading,
}: CustomButtonType) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: isPrimary ? appColors.PRIMARY : appColors.SECONDARY,
        color: isPrimary ? appColors.WHITE : appColors.PRIMARY,
        textTransform: "none",
        width: "100%",
        height: "100%",
      }}
      href={href}
      onClick={onClick}
    >
      {isLoading ? (
        <Box>
          <CircularProgress
            sx={{
              color: appColors.WHITE,
            }}
          />
        </Box>
      ) : (
        <Typography sx={{ fontWeight: "bold" }} component="p">
          {text}
        </Typography>
      )}
    </Button>
  );
}
