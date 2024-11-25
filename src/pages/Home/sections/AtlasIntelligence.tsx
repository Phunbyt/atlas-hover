import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { appColors } from "../../../constants/colors";
import CustomButton from "../../../components/CustomButton/CustomButton";

function AtlasIntelligence() {
  return (
    <Box sx={styles.atlasIntContainer}>
      <Container
        sx={{
          margin: "3rem auto",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              color={appColors.WHITE}
            >
              AI (Atlas Hover Intelligence) Solution
            </Typography>

            <Typography
              variant="body2"
              textAlign={"center"}
              fontSize={"1.3rem"}
              color={appColors.WHITE}
              sx={{
                margin: "3rem auto",
              }}
            >
              Our pioneering AI solutions are designed to drive tangible
              business outcomes, including improved customer experiences,
              increased revenue, and enhanced operational efficiency. Partner
              with us to leverage AI's transformative potential, fuel growth,
              and stay competitive in today's fast-paced digital economy.
            </Typography>
          </Box>

          <Box
            className="zombiee"
            sx={{
              marginTop: "1rem",
              width: "100%",
              maxWidth: 300,
            }}
          >
            <CustomButton
              text={"Partner with Us"}
              href={"/projets"}
              isPrimary={false}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AtlasIntelligence;

const styles = {
  atlasIntContainer: {
    background: `url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGY0djNibGY5OXVsbDZpank5dzh3bGFkbXFkNm5iaHc4dmdyY3hmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1J9PbDIgHvgeVry0/giphy.gif) left center/ 100% 100% no-repeat `,
  },
};
