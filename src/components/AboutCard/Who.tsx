import { Box, Typography } from "@mui/material";
import { appColors } from "../../constants/colors";
import AnimatedImageCard from "../AnimatedImageCard/AnimatedImageCard";
import { ATLASHOVER_LOGO } from "../../assets";

function Who() {
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
            // width: "100%",
            maxWidth: 500,
            // minWidth: 500,
          }}
        >
          <AnimatedImageCard imageLink={ATLASHOVER_LOGO} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 2,
          //   width: "100%",
          margin: "1rem",
          maxWidth: 800,
        //   minWidth: { sm: 400 },
        }}
      >
        <Box
          sx={
            {
              // width: "100%",
            }
          }
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={appColors.PRIMARY}
          >
            {"Who we are?"}
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
              "Our journey began with a simple vision: to transform how businesses approach technology. Today, we continue to turn innovative ideas into reality, helping organizations leverage the power of IT to drive growth, efficiency, and success."
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
            {
              "With a deep understanding of industry needs and cutting-edge technology, we partner with our clients to deliver tailored strategies that drive growth, improve efficiency, and ensure long-term success. Our team of experienced consultants combines technical expertise with a customer-first mindset, making sure that every solution is not just effective, but also aligned with your unique business goals."
            }
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Who;
