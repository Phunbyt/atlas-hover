import React from "react";
import {  Box, Container, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import { ATLASHOVER_LOGO } from "../../assets";
import { NavLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const companyLinks = [
    { name: "About", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Team", link: "/about#vision" },
  ];
  const servicesLinks = [
    { name: "Custom Computer Programming", link: "/services#programming" },
    { name: "Computer Facilities Management", link: "/services#manage" },
    { name: "Computer Systems Design", link: "/services#design" },
    { name: "Janitorial Services", link: "/services#janitor" },
    {
      name: "Administrative Management and General Management Consulting",
      link: "/services#admin",
    },
    { name: "Computer training", link: "/services#train" },
    { name: "Other computer related services", link: "/services#others" },
  ];

  const socials = [
    { icon: <FacebookIcon />, link: "#" },
    { icon: <XIcon />, link: "#" },
    { icon: <InstagramIcon />, link: "#" },
    { icon: <LinkedInIcon />, link: "#" },
  ];
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`${serviceId}`);
  };

  return (
    <Container
      sx={{
        width: "100%",
      }}
      maxWidth="xl"
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              maxWidth: 300,
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 200,
                }}
                component="img"
                src={ATLASHOVER_LOGO}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color={appColors.BLACK}
                sx={{
                  margin: "1rem 0",
                }}
              >
                Our unique blend of value-driven strategy and result-oriented
                execution sets us apart, delivering solutions that resonate and
                endure.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: 200,
              width: "100%",
              margin: "1.2rem 0",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color={appColors.BLACK}
              >
                Company
              </Typography>
            </Box>
            <Box>
              {companyLinks.map((item) => (
                <Box
                  sx={{
                    marginTop: ".6rem",
                  }}
                >
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: appColors.BLACK,
                    }}
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: 300,
              width: "100%",
              margin: "1.2rem 0",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color={appColors.BLACK}
              >
                Services
              </Typography>
            </Box>
            <Box>
              {servicesLinks.map((item) => (
                <Box
                  sx={{
                    marginTop: ".6rem",
                  }}
                  key={item.link}
                  onClick={() => handleServiceClick(item.link)}
                >
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: appColors.BLACK,
                    }}
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: 200,
              width: "100%",
              margin: "1.2rem 0",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                color={appColors.BLACK}
              >
                Get In Touch
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                fontWeight={"bold"}
                color={appColors.BLACK}
                margin={".5rem 0"}
              >
                hello@atlashover.us
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
              }}
            >
              {socials.map((item) => (
                <Box>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: appColors.BLACK,
                    }}
                    to={item.link}
                  >
                    {item.icon}
                  </NavLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <hr />
      <br />
      <Box
        sx={{
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: 3,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              color={appColors.BLACK}
            >
              © 2024 Atlas Hover. All rights reserved
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            flex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              fontWeight={"bold"}
              color={appColors.BLACK}
            >
              Terms & Conditions
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              fontWeight={"bold"}
              color={appColors.BLACK}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
