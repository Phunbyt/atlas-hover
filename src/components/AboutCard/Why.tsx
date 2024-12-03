import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AnimatedImageCard from "../AnimatedImageCard/AnimatedImageCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { CHESS } from "../../assets";

function Why() {
  const whyItemsList = [
    "Customized technology solutions",
    "Operational optimization strategies",
    "Administrative management guidance",
    "Expert training and support",
  ];
  const benefitsLists = [
    "Proven Track Record: Our success stories speak for themselves.",
    "Customer-Centric: Your satisfaction is our top priority.",
    "Innovative Solutions: We stay ahead of the curve to bring you the best.",
    "Collaborative Spirit: We work with you as a trusted partner.",
    "Quick Response Times: Fast support when you need it.",
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
          <AnimatedImageCard imageLink={CHESS} />
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
            {"Why us?"}
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
              "In today's fast-paced digital landscape, selecting the right partner for your technology, operational, and administrative needs is crucial. At AtlasHover, we stand out from the crowd by delivering exceptional expertise, personalized service, and a commitment to excellence."
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
            {"Unparalleled Expertise"}
            <Typography
              variant="body1"
              fontWeight={"bold"}
              color={appColors.BLACK}
              sx={{
                margin: "1rem 0",
              }}
            >
              {
                "Our team of seasoned professionals boasts extensive experience in providing:"
              }
            </Typography>
            <List>
              {whyItemsList.map((text) => (
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
          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={appColors.BLACK}
            sx={{
              margin: "1rem 0",
            }}
          >
            {"Personalized Approach"}
            <Typography
              variant="body1"
              fontWeight={"bold"}
              color={appColors.BLACK}
              sx={{
                margin: "1rem 0",
              }}
            >
              {
                "We take the time to understand your unique challenges and goals, tailoring our services to meet your specific needs."
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
              {"Key Benefits"}
            </Typography>
            <List>
              {benefitsLists.map((text) => (
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

export default Why;
