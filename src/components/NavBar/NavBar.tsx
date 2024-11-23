import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./navbar.css";

import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { ATLASHOVER_LOGO } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import { appColors } from "../../constants/colors";
import { Typography } from "@mui/material";
import LongMenu from "./Menu";

function NavBar() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <Container
      sx={{
        width: "100%",
      }}
      maxWidth="xl"
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Box
            component="img"
            alt="Atlas logo"
            sx={{
              height: 100,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              objectFit: "contain",
            }}
            src={ATLASHOVER_LOGO}
          />
        </Box>

        <Box
          flex={1}
          sx={{
            maxWidth: {
              xl: "50%",
              lg: "70%",
              md: "80%",
              sm: "100%",
              xs: "100%",
            },
          }}
          className="navbar"
        >
          <nav aria-label="main mailbox folders">
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {navLinks.map((item) => (
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <NavLink
                    style={{
                      textDecoration: "none",
                    }}
                    to={item.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pendingNav"
                        : isActive
                        ? "activeNav"
                        : "defaultNav"
                    }
                  >
                    {item.name}
                  </NavLink>
                </Box>
              ))}

              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <CustomButton text={"Get Started"} href={"/contact"} />
              </Box>
            </Stack>
          </nav>
        </Box>

        <Box className="hamburger" justifyContent={"stretch"}>
          <LongMenu />
        </Box>
      </Stack>
    </Container>
  );
}

export default NavBar;
