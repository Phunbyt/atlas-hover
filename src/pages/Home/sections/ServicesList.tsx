import React from "react";
import { appColors } from "../../../constants/colors";
import { Height } from "@mui/icons-material";
import { width } from "@mui/system";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import CodeIcon from "@mui/icons-material/Code";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedIcon from "@mui/icons-material/Verified";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BackHandIcon from "@mui/icons-material/BackHand";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Grid from "@mui/material/Grid2";
import { Box, Container, Typography } from "@mui/material";

function ServicesList() {
  const services = [
    {
      serviceIcon: <CodeIcon />,
      titletext: "Custom Computer Programming Services",
      bodyText:
        "We provide you with tailored software solutions for your business need",
      backText:
        "Whether you’re starting a new project or improving existing ones, we’re here to equip you with the right tools to turn your software needs into business success. With over two decades of experience, we provide in-depth industry insights as your technology partner. Explore our flexible engagement models for a seamless digital transformation journey.",
      serviceLink: "/services#programming",
    },
    {
      serviceIcon: <MemoryIcon />,
      titletext: "Computer Systems Design Services",
      bodyText: "Improve the performance of your systems and architechture ",
      backText:
        "We provide value-added computer system design and engineering services to enable OEMs and ISVs to deliver integrated hardware and software solutions to their customers.",
      serviceLink: "/services#design",
    },
    {
      serviceIcon: <VerifiedIcon />,
      titletext: " Computer Training",
      bodyText:
        "Get trained, get certified through our top tier training institute",
      backText:
        " our programs foster professional growth through leadership, communication, and project management development, ultimately boosting productivity and efficiency while ensuring security and compliance.",
      serviceLink: "/services#train",
    },
    {
      serviceIcon: <FactCheckIcon />,
      titletext: "Computer Facilities Management Services",
      bodyText:
        "Be rest assured of an all time high in efficiency of your facilities ",
      backText:
        "The AtlasHover Computer Facilities Management (CFM) solution provides an all-encompassing suite of tools designed to optimize and streamline the management of IT infrastructure. ",
      serviceLink: "/services#facility",
    },
    {
      serviceIcon: <AdminPanelSettingsIcon />,
      titletext:
        "Administrative Management and General Management Consulting Services",
      bodyText: "We arm you with all  you'll need to succeed on your own",
      backText:
        "In our approach to General Management Consulting, we take a comprehensive, holistic view to support agency leadership in making well-informed, strategic decisions. We deliver actionable insights and data-driven recommendations across a range of critical areas",
      serviceLink: "/services#manage",
    },
    {
      serviceIcon: <BackHandIcon />,
      titletext: "Janitorial Services",
      bodyText:
        "Feel secure in the knowledge that we do our part for the environment we love",
      backText:
        "At Atlashover, we're dedicated to delivering exceptional commercial janitorial services that exceed our clients' expectations. Our winning team of experienced janitors shares our commitment to unwavering work ethic",
      serviceLink: "/services#janitor",
    },
    {
      serviceIcon: <ViewInArIcon />,
      titletext: "Other Computer Related Rervices",
      bodyText:
        "Your all in one solution for all things technology and innovation",
      backText:
        "At AtlasHover, we understand that every business has unique computer needs. That's why we offer comprehensive support and solutions beyond our listed services.",
      serviceLink: "/services#others",
    },
  ];

  return (
    <Box sx={styles.divContainer}>
      <Container>
        <Box
          sx={{
            paddingTop: "3rem",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            color={appColors.WHITE}
          >
            Our Services Help You Achieve Unparalleled Efficiency and
            Productivity
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
            Our Services Help You Achieve Unparalleled Efficiency and
            Productivity
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent={"center"}>
          {services.map((service) => {
            const { serviceIcon, titletext, bodyText, backText, serviceLink } =
              service;
            return (
              <Grid>
                <ServiceCard
                  serviceIcon={serviceIcon}
                  titletext={titletext}
                  bodyText={bodyText}
                  backText={backText}
                  serviceLink={serviceLink}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            height: 100,
          }}
        />
      </Container>
    </Box>
  );
}

export default ServicesList;

const styles = {
  divContainer: {
    background: appColors.PRIMARY,
    height: "100%",
    width: "100%",
  },
};
