import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import PageDescription from "../../Typografy/PageDescription";
import PageTitle from "../../Typografy/SectionTitle";
import SectionBadge from "../../Typografy/SectionBadge";
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
        <SectionBadge>CLIENT-DEVELOPMENT DRIVEN</SectionBadge>
        <PageTitle>We Design. We Develop. We Ship. In The Same Day.</PageTitle>
        <PageDescription>
          {" "}
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </PageDescription>
        <Stack direction={{ base: "column", sm: "row" }} mt={4} gap={4}>
          <Button variant="Primary">Send Quote</Button>
          <Button variant="secondary-Light">Lear More</Button>
        </Stack>
      </Container>
      <CardMain />
      <Seponsor />
    </Layout>
  );
};

export default Hero;
