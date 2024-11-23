import { Box } from "@mui/material";
import React from "react";
import PageHero from "../components/PageHero/PageHero";
import { ROBOT_TOUCH } from "../assets";

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
    </Box>
  );
}

export default About;
