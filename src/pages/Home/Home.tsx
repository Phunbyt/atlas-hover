import Hero from "./sections/Hero";
import ServicesList from "./sections/ServicesList";
import Projects from "./sections/Projects";
import AtlasIntelligence from "./sections/AtlasIntelligence";
import { Box } from "@mui/material";
import Licences from "./sections/Licences";

function Home() {
  return (
    <Box>
      <Hero />
      <ServicesList />
      <Projects />
      <AtlasIntelligence />
      <Licences />
    </Box>
  );
}

export default Home;
