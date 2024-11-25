import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { appColors } from "../../../constants/colors";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { CIRCLE_RING } from "../../../assets";
import BulkLogos from "../../../components/BulkLogos/BulkLogos";

function Projects() {
  return (
    <Box>
      <Container
        sx={{
          margin: "3rem auto",
          width: "100%",
        }}
        maxWidth="xl"
      >
        <Grid
          container
          spacing={3}
          wrap="wrap"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid
            margin={"0 auto"}
            sx={{
              maxWidth: 500,
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  color={appColors.PRIMARY}
                >
                  Empowering Top and Emerging Companies with Seamless Solutions
                  and Integration
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={appColors.BLACK}
                  sx={{
                    margin: "1rem auto",
                  }}
                >
                  Our cutting-edge multi-industry solutions integrate
                  effortlessly, streamlining processes, amplifying productivity,
                  and propelling your business towards greater efficiency and
                  success.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={"bold"}
                  color={appColors.BLACK}
                  sx={{
                    margin: "1rem auto",
                  }}
                >
                  Empowering Top and Emerging Companies with Seamless Solutions
                  and Integration
                </Typography>
              </Box>
              <Box
                className="zombiee"
                sx={{
                  marginTop: "1rem",
                  width: "100%",
                  maxWidth: 300,
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  text={"See Our Projects"}
                  href={"/projets"}
                  isPrimary={false}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            margin={"0 auto"}
            sx={{
              height: "100%", // add a height to the box
              maxWidth: 500,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%", // add a height to the box
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${CIRCLE_RING})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: appColors.SECONDARY,
                  height: "100%", // add a height to the box
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "1rem",
                  minHeight: 500,
                  paddingLeft: ".5rem",
                }}
              >
                <BulkLogos />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
