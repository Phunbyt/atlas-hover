import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AnimatedImageCard from "../AnimatedImageCard/AnimatedImageCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { AIRPLANE } from "../../assets";

function What() {
  const whatItemsList = [
    "Custom Computer Programming Services: Expert development of bespoke software applications to meet your unique business requirements.",

    "Computer Systems Design Services: End-to-end design, implementation, and integration of computer systems to drive operational excellence.",

    "Computer Facilities Management Services: Reliable management and maintenance of your computer infrastructure.",

    "Administrative Management and General Management Consulting Services: Strategic guidance to enhance operational efficiency, productivity, and decision-making.",

    "Computer Training: Expert training to empower your team with essential computer skills.",

    "Janitorial Services: Reliable and efficient cleaning solutions to maintain a clean and healthy work environment.",

    "Other Computer Related Services: Comprehensive support for all your computer-related needs.",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        alignItems: "center",
        margin: "2rem 0",
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: "100%",
          marginLeft: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: 400,
            width: { md: "100%", sm: 400, xs: 300 },
            maxWidth: 500,
          }}
        >
          <AnimatedImageCard imageLink={AIRPLANE} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 2,
          width: "100%",
          margin: "1rem",
          maxWidth: 800,
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={appColors.PRIMARY}
          >
            {"What we do?"}
          </Typography>

          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={appColors.BLACK}
            sx={{
              margin: "1rem 0",
            }}
          >
            {
              "At AtlasHover, we offer a comprehensive range of services designed to support your organization's technology, operational, and administrative needs. Our expert team provides tailored solutions to help you optimize performance, enhance efficiency, and drive success."
            }
          </Typography>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={appColors.BLACK}
            sx={{
              margin: "1rem 0",
            }}
          >
            {"Our Services include"}
            <List>
              {whatItemsList.map((text) => (
                <ListItem disablePadding>
                  <FiberManualRecordIcon
                    sx={{
                      color: appColors.PRIMARY,
                      fontSize: ".8rem",
                      marginRight: ".5rem",
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={appColors.PRIMARY}
                  >
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default What;
