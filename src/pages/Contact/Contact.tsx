import { Box, Container } from "@mui/material";
import { TELEPHONE } from "../../assets";
import PageHero from "../../components/PageHero/PageHero";
import ContactCardsContainer from "../../components/ContactCards/ContactCardsContainer";

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

      <Container maxWidth="xl">
        <ContactCardsContainer />
      </Container>
    </Box>
  );
}

export default Contact;
