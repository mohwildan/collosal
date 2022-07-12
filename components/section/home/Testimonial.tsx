import { Box, Container, Heading } from "@chakra-ui/react";
import SectionBadge from "../../Typografy/SectionBadge";
import SectionTitle from "../../Typografy/SectionTitle";
import SliderTestimonial from "./SliderTestimonial";

const Testimonial = () => {
  return (
    <Box mt="6rem">
      <Container textAlign="center" maxW={{ base: "100%", md: "35rem" }}>
        <SectionBadge>TESTIMONIAL</SectionBadge>
        <SectionTitle> What do our sy that we never let down?</SectionTitle>
      </Container>
      <SliderTestimonial />
    </Box>
  );
};

export default Testimonial;
