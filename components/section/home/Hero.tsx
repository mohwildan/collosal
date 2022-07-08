import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import CardMain from "./CardMain";
import Seponsor from "./Seponsor";
const Hero = () => {
  return (
    <Layout>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        textAlign="center"
        maxW={{ base: "100%", md: "35rem" }}
      >
        <Heading variant="Section-Badge">CLIENT-DEVELOPMENT DRIVEN</Heading>
        <Heading variant="Page-Title" mt={4}>
          We Design. We Develop. We Ship. In The Same Day.
        </Heading>
        <Text mt={4} variant="Page-Description">
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} mt={4} gap={4}>
          <Button variant="Primary">Send Quote</Button>
          <Button variant="Primary-Light">Lear More</Button>
        </Stack>
      </Container>
      <CardMain />
      <Seponsor />
    </Layout>
  );
};

export default Hero;
