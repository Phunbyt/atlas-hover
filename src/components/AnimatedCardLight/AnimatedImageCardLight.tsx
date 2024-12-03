import { Box } from "@mui/material";
import "./animatedImageCardLight.css";

function AnimatedImageCardLight({ imageLink }: { imageLink: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        "&:hover": {
          animation:
            "shadow-pop-br2 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
          willChange: "transform",
        },
      }}
      component="img"
      src={imageLink}
    />
  );
}

export default AnimatedImageCardLight;
