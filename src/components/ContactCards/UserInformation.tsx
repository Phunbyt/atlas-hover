import { Box, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { FLY_ENVELOPE } from "../../assets";
import { useEffect, useState } from "react";
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
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const fields: any = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "message",
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleData = (field: any) => {
    setData((prevState) => ({
      ...prevState, // keep the previous state values
      [field.target.name]: field.target.value, // update the specific field
    }));
    setError((prevState) => ({
      ...prevState, // keep the previous state values
      [field.target.name]: false, // update the specific field
    }));
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = () => {
    try {
      setIsLoading(true);

      fields.map((field: string) => {
        const check = (data as any)[field];
        if (check === "") {
          setError((prevState) => ({ ...prevState, [field]: true }));
        }
      });

      if (isError === false) {
        setIsLoading(false);
        setOpenModal(true);
        sendEmail(data);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });

        return;
      }
      // testEmail();
      console.log(data);
      console.log("data....");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      console.log("error....... 55555");
    }
  };

  useEffect(() => {
    const isEmpty = fields.map((field: string) => {
      const check = (data as any)[field];

      console.log(check);
      console.log("check....2");

      return check;
    });

    if (isEmpty.some((val: boolean) => !val)) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    console.log(isEmpty);
    console.log("isEmpty.....");
  }, [data]);

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
            error={error.firstName}
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
            error={error.lastName}
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
            error={error.email}
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
            error={error.phoneNumber}
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
            error={error.message}
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
