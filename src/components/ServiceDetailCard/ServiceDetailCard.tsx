import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AnimatedImageCard from "../AnimatedImageCard/AnimatedImageCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function ServiceDetailCard({
  mainText,
  subText,
  listTexts,
  cardImage,
  isReverse,
  linkId,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: isReverse ? "row-reverse" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2rem 0",
      }}
      id={linkId}
    >
      <Box
        sx={{
          flex: 1,
          width: "100%",
          marginRight: "1rem",
        }}
      >
        <Box
          sx={{
            height: 400,
            width: { md: "100%", sm: 400, xs: 300 },
            maxWidth: 500,
            justifySelf: isReverse ? "end" : "start",
          }}
        >
          <AnimatedImageCard imageLink={cardImage} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          margin: "1rem",
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
            {mainText}
          </Typography>

          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={appColors.BLACK}
            sx={{
              margin: "1rem 0",
            }}
          >
            {subText}
          </Typography>

          <List>
            {listTexts.map((text) => (
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
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceDetailCard;
