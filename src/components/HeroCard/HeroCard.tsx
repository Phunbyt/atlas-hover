import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function HeroCard({
  mainText,
  subText,
  mainTextColor,
  subTextColor,
  backgroundColor,
}: {
  mainText: string;
  subText: string;
  mainTextColor: string;
  subTextColor: string;
  backgroundColor: string;
}) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        background: backgroundColor,
        textAlign: "center",
        borderRadius: "1rem",
      }}
    >
      <CardContent>
        <Typography
          fontWeight={"bold"}
          color={mainTextColor}
          variant="h4"
          component="div"
          margin={"1.5rem"}
        >
          {mainText}
        </Typography>

        <Typography margin={"1.5rem"} color={subTextColor} variant="body2">
          {subText}
        </Typography>
      </CardContent>
    </Card>
  );
}
