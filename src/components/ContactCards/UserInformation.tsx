import { Box, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { FLY_ENVELOPE } from "../../assets";

function UserInformation() {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: 650,
        width: "100%",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem auto",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Last Name"
            variant="standard"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem auto",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Email"
            variant="standard"
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Phone Number"
            variant="standard"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Message"
            placeholder="Write your message..."
            variant="standard"
            multiline
            rows={3}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "2rem auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ maxWidth: 200, width: "100%" }}>
            <CustomButton text={"Send Message"} href={"#"} />
          </Box>
          <Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: 200,
              }}
              component="img"
              src={FLY_ENVELOPE}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UserInformation;
