import { Box } from "@mui/material";
import { PROJECT } from "../assets";

function Projects() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
        }}
        component="img"
        src={PROJECT}
      />
    </Box>
  );
}

export default Projects;
