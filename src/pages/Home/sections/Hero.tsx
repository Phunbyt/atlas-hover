import { Box, Container, Typography } from "@mui/material";
import { appColors } from "../../../constants/colors";
import { GIRL_TOUCH, SVG_BACKGROUND } from "../../../assets";
import CustomButton from "../../../components/CustomButton/CustomButton";
import HeroCard from "../../../components/HeroCard/HeroCard";
import Grid from "@mui/material/Grid2";
import HeroAltCard from "../../../components/HeroCard/HeroAltCard";
import { ParticlesComponent } from "../../../components/Particles/Particles";
function Hero() {
  return (
    <Box sx={styles.heroDivContainer}>
      <ParticlesComponent />
      <Container
        sx={{
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            color={appColors.PRIMARY}
            fontSize={{
              xl: "4rem",
              lg: "4rem",
              md: "4rem",
              sm: "3rem",
              xs: "2rem",
            }}
          >
            Unleash Breakthrough Performance with Limitless Possibilities Ahead
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={appColors.BLACK}
            fontSize={{
              xl: "1.6rem",
              lg: "1.6rem",
              md: "1.6rem",
              sm: "1.3rem",
              xs: "1rem",
            }}
            marginTop={"2rem"}
          >
            Transform your business with results-driven IT consulting solutions
            tailored to every industry. We empower you to unlock your full
            potential, achieve unparalleled success, and propel your
            organization toward a brighter future.
          </Typography>
        </Box>
      </Container>

      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
          }}
          wrap="wrap"
        >
          <Grid
            size={{
              xl: 3,
              lg: 3,
              md: 3,
              sm: 5,
              xs: 6,
            }}
            sx={{}}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage: `url(${GIRL_TOUCH})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%", // add a height to the box
                minHeight: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                borderRadius: "1rem",
              }}
              component="img"
            />
          </Grid>
          <Grid
            // size={6}
            size={{
              xl: 6,
              lg: 6,
              md: 6,
              sm: 8,
              xs: 10,
            }}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                margin: "2rem auto",
                minWidth: "80%",
                maxWidth: 300,
              }}
            >
              <CustomButton text={"Let’s Get You Started"} href={"/contact"} />
            </Box>
            <Grid container spacing={2}>
              <Grid size={6}>
                <HeroCard
                  mainText={"100%"}
                  subText={"Clients and partners satisfaction guaranteed"}
                  mainTextColor={appColors.WHITE}
                  subTextColor={appColors.WHITE}
                  backgroundColor={appColors.PRIMARY}
                />
              </Grid>
              <Grid size={6}>
                <HeroCard
                  mainText={"2+"}
                  subText={"Years of dedicated service"}
                  mainTextColor={appColors.PRIMARY}
                  subTextColor={appColors.PRIMARY}
                  backgroundColor={appColors.SECONDARY}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{
              xl: 3,
              lg: 3,
              md: 3,
              sm: 5,
              xs: 6,
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage: `url(${SVG_BACKGROUND})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%", // add a height to the box
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                borderRadius: "1rem",
              }}
            >
              <Box>
                <HeroAltCard
                  subText={
                    "Optimize processes, leverage technology, and accelerate growth"
                  }
                  subTextColor={appColors.WHITE}
                  backgroundColor={"transparent"} // make the background transparent
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;

const styles = {
  heroDivContainer: {
    margin: "4rem auto",
  },
};
