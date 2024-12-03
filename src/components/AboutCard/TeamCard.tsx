import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AnimatedImageCardLight from "../AnimatedCardLight/AnimatedImageCardLight";

function TeamCard({
  imageLink,
  teamProfile,
  teamMemberName,
}: {
  imageLink: string;
  teamProfile: string;
  teamMemberName: string;
}) {
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: "100%",
          margin: "2rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: "100%", sm: 400, xs: 200 },
          }}
        >
          <AnimatedImageCardLight imageLink={imageLink} />
        </Box>
        <Typography
          marginTop={"1rem"}
          variant="h5"
          fontWeight={"bold"}
          color={appColors.WHITE}
        >
          {teamMemberName}
        </Typography>
        <Typography marginTop={"1rem"} variant="body2" color={appColors.WHITE}>
          {teamProfile}
        </Typography>
      </Box>
    </Box>
  );
}

export default TeamCard;
