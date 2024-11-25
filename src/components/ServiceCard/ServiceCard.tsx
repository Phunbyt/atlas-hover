import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavLink } from "react-router-dom";
import { appColors } from "../../constants/colors";
import "./servicecard.css";
export default function ServiceCard({
  serviceIcon,
  titletext,
  bodyText,
  backText,
  serviceLink,
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleHover = () => {
    setIsFlipped(true);
  };

  const handleHoverEnd = () => {
    setIsFlipped(false);
  };

  return (
    <Card
      className="flip-2-ver-right-1"
      sx={{
        maxWidth: 345,
        width: "100%",
        height: 350,
        background: appColors.GLASS,
        color: appColors.WHITE,
        borderRadius: "1rem",
        "&:hover": {
          animation:
            "flip-2-ver-right-1 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) .3s both",
          willChange: "transform",
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <CardHeader
        sx={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        avatar={
          <IconButton
            sx={{
              color: appColors.WHITE,
            }}
            aria-label="settings"
          >
            {serviceIcon}
          </IconButton>
        }
        action={
          <IconButton
            sx={{
              color: appColors.WHITE,
            }}
            aria-label="settings"
          >
            <ArrowOutwardIcon>
              <NavLink to={serviceLink} />
            </ArrowOutwardIcon>
          </IconButton>
        }
      />
      {!isFlipped ? (
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            fontWeight={"bold"}
            marginBottom={"3.5rem"}
            variant="h5"
            component="div"
          >
            {titletext}
          </Typography>
          <Typography variant="body2">{bodyText}</Typography>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            textAlign: "justify",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.5s",
          }}
        >
          <Typography marginTop={"2rem"} variant="body2">
            {backText}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
