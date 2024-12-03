import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { VR_GIRL } from "../../assets";
import PageHero from "../../components/PageHero/PageHero";
import ServiceDetailCard from "../../components/ServiceDetailCard/ServiceDetailCard";
import { serviceListArray } from "./serviceList";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();

  useEffect(() => {
    const serviceId = location.hash.substring(1);

    if (serviceId) {
      const serviceElement = document.getElementById(serviceId);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Box>
      <PageHero
        heroImage={VR_GIRL}
        mainText={"Your Vision, Our Expertise"}
        subText={
          "From concept to completion, our dynamic team crafts innovative solutions for businesses across various sectors. With precision and care, we tailor our expertise to meet your distinct needs and drive success."
        }
      />

      <Container maxWidth="xl">
        <Box>
          {serviceListArray.map((serviceList) => (
            <ServiceDetailCard
              mainText={serviceList.mainText}
              subText={serviceList.subText}
              listTexts={serviceList.listTexts}
              cardImage={serviceList.cardImage}
              isReverse={serviceList.isReverse}
              linkId={serviceList.linkId}
            />
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            margin: "5rem 0",
          }}
        >
          <Box
            sx={{
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            <CustomButton text={"Let’s Get You Started"} href={"/contact"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
