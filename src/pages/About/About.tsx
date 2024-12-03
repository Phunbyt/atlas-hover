import { Box, Container } from "@mui/material";
import PageHero from "../../components/PageHero/PageHero";
import { ROBOT_TOUCH } from "../../assets";
import Who from "../../components/AboutCard/Who";
import What from "../../components/AboutCard/What";
import Why from "../../components/AboutCard/Why";
// import Team from "../../components/AboutCard/Team";

function About() {
  return (
    <Box>
      <PageHero
        heroImage={ROBOT_TOUCH}
        mainText={"Innovative Solutions, Exceptional Service"}
        subText={
          "Discover what sets us apart as a leading IT consulting firm and how our team of experts can help transform your business."
        }
      />

      <Container maxWidth="xl">
        <Who />
        <What />
        <Why />
      </Container>
      {/* <Team /> */}

      <Box
        sx={{
          height: 50,
        }}
      />
    </Box>
  );
}

export default About;
