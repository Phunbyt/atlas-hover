import { Box, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { FLY_ENVELOPE } from "../../assets";
import { useState } from "react";
import BasicModal from "../Modal/Modal";
import { sendEmail } from "../../configs/ses.config";

function UserInformation() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleData = (field: any) => {
    setData((prevState) => ({
      ...prevState, // keep the previous state values
      [field.target.name]: field.target.value, // update the specific field
    }));
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = () => {
    try {
      setIsLoading(true);
      sendEmail();
      console.log(data);
      console.log("data....");
      setIsLoading(false);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
      console.log("error....... 55555");
    }
  };

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
            name="firstName"
            value={data.firstName}
            onChange={(e) => handleData(e)}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Last Name"
            variant="standard"
            value={data.lastName}
            name="lastName"
            onChange={(e) => handleData(e)}
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
            type="email"
            variant="standard"
            value={data.email}
            name="email"
            onChange={(e) => handleData(e)}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 280 }}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Phone Number"
            type="tel"
            variant="standard"
            value={data.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleData(e)}
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
            value={data.message}
            name="message"
            onChange={(e) => handleData(e)}
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
          <Box
            sx={{
              maxWidth: 200,
              maxHeight: 50,
              height: "100%",
              width: "100%",
            }}
          >
            <CustomButton
              text={"Send Message"}
              href={"#"}
              onClick={handleSubmit}
              isLoading={isLoading}
            />
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
      <BasicModal
        openModal={openModal}
        handleClose={handleCloseModal}
        mainText={"Message Received"}
        subText={
          "Thank you for contacting us. We would reach out to you shortly"
        }
      />
    </Box>
  );
}

export default UserInformation;
