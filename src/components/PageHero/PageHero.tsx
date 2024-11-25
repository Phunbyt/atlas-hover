import { Box, Container, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";

function PageHero({ heroImage, height = "45vh", mainText, subText }) {
  const styles = {
    pageHeroContainer: {
      background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height,
    },
  };

  return (
    <Box sx={styles.pageHeroContainer}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
          }}
        >
          <Typography
            variant="h1"
            fontWeight={"bold"}
            color={appColors.PRIMARY}
            fontSize={{
              xl: "3rem",
              lg: "3rem",
              md: "3rem",
              sm: "2rem",
              xs: "2rem",
            }}
          >
            {mainText}
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
            {subText}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PageHero;
