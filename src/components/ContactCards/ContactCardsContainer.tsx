import { Box } from "@mui/material";
import ContactInformation from "./ContactInformation";
import UserInformation from "./UserInformation";

function ContactCardsContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "3rem auto",
      }}
    >
      <ContactInformation />
      <UserInformation />
    </Box>
  );
}

export default ContactCardsContainer;
