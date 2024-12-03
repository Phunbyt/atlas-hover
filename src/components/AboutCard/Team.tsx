import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { appColors } from "../../constants/colors";
import { members } from "./teamList";
import TeamCard from "./TeamCard";
import { useLocation } from "react-router-dom";

function Team() {
  const location = useLocation();

  useEffect(() => {
    const serviceId = location.hash.substring(1);

    if (serviceId) {
      const serviceElement = document.getElementById(serviceId);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Box
      sx={{
        background: appColors.PRIMARY,
      }}
      id={"vision"}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"} color={appColors.WHITE}>
            {"Our Vision Pioneers"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxWidth: 1200,
            margin: "0 auto",
            paddingBottom: "4rem",
          }}
        >
          {members.map((member) => (
            <TeamCard
              imageLink={member.imageLink}
              teamProfile={member.teamProfile}
              teamMemberName={member.teamMemberName}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Team;
