import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { NavLink } from "react-router-dom";

function ContactInformation() {
  const contactInfo = [
    {
      icon: <AddIcCallIcon />,
      link: "tel:+13474316492",
      text: "+1 (347) 431-6492",
    },
    {
      icon: <EmailIcon />,
      link: "mailto:ademola@atlashover.us",
      text: "ademola@atlashover.us",
    },
    {
      icon: <PlaceIcon />,
      link: "https://maps.google.com/?q=9537 Georgian Way Owings Mills MD 21117",
      text: "9537 Georgian Way Owings Mills MD 21117",
    },
  ];

  return (
    <Box
      sx={{
        background: appColors.PRIMARY,
        position: "relative",
        flex: 1,
        maxWidth: 650,
        width: "100%",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          margin: "4rem auto",
        }}
      >
        <Box sx={{ margin: "1rem auto" }}>
          <Typography variant="h4" fontWeight={"bold"} color={appColors.WHITE}>
            {"Contact Information"}
          </Typography>
        </Box>
        <Box sx={{ margin: "1rem auto" }}>
          <Typography variant="body1" color={appColors.WHITE}>
            {
              "Take the first step towards innovative IT solutions and expert guidance"
            }
          </Typography>
        </Box>

        {contactInfo.map((contact) => (
          <Box
            sx={{
              marginTop: 2,
            }}
          >
            <NavLink
              style={{
                textDecoration: "none",
                color: appColors.WHITE,
                display: "flex",
                flexWrap: "wrap",
              }}
              to={contact.link}
            >
              <Typography marginRight={2}>{contact.icon}</Typography>
              <Typography>{contact.text}</Typography>
            </NavLink>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          height: 150,
          width: 150,
          background: appColors.WHITE,
          opacity: 0.3,
          position: "absolute",
          right: 30,
          bottom: 30,
        }}
      />
      <Box
        sx={{
          height: 100,
          width: 100,
          background: appColors.WHITE,
          opacity: 0.3,
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      />
    </Box>
  );
}

export default ContactInformation;
