import { Box } from "@mui/material";
import { COMING_SOON } from "../assets";

function Careers() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
        }}
        component="img"
        src={COMING_SOON}
      />
    </Box>
  );
}

export default Careers;
