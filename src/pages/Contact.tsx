import { Box } from "@mui/material";
import { TELEPHONE } from "../assets";
import PageHero from "../components/PageHero/PageHero";

function Contact() {
  return (
    <Box>
      <PageHero
        heroImage={TELEPHONE}
        mainText={"Talk to an Expert"}
        subText={
          "Discuss your technology needs with our experienced consultants and discover tailored solutions."
        }
      />
    </Box>
  );
}

export default Contact;
