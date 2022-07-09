import { Box, Container, Heading } from "@chakra-ui/react";
import SliderTestimonial from "./SliderTestimonial";

const Testimonial = () => {
  return (
    <Box mt="6rem">
      <Container textAlign="center" maxW={{ base: "100%", md: "35rem" }}>
        <Heading variant="Section-Badge">TESTIMONIAL</Heading>
        <Heading mt={4} variant="Section-Title">
          What do our sy that we never let down?
        </Heading>
      </Container>
        <SliderTestimonial />
    </Box>
  );
};

export default Testimonial;
