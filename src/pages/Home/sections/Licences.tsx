import { Box, Container } from "@mui/material";
import { SBA_LOGO, VSOB_LOGO } from "../../../assets";

function Licences() {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              margin: "3rem auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 300,
              }}
              component="img"
              src={VSOB_LOGO}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              margin: "3rem auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 300,
              }}
              component="img"
              src={SBA_LOGO}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Licences;
