import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import CardStarted from "./CardStarted";

const Started = () => {
  return (
    <Box mt="6rem" py="6rem" bg="#221048" borderRadius="30px">
      <Box textAlign="center">
        <Container maxW={{ base: "100%", md: "35rem" }}>
          <Heading variant="Section-Badge">GET STARTED</Heading>
          <Heading variant="Section-Title" my={4}>
            What do you need? Choose a service that can help you
          </Heading>
        </Container>
        <Flex
          alignItems="center"
          w="100%"
          gap={4}
          flexDir={{ base: "column", md: "row" }}
          justifyContent="center"
          mt="3rem"
          px={{base: 0, md: "4rem"}}
        >
          <CardStarted title="Ui Design" price="1200$" color="#3f2379">
            <Text variant="Pricing-Detail">10 design pages</Text>
            <Text variant="Pricing-Detail">Well-documented</Text>
            <Text variant="Pricing-Detail">4 revisions</Text>
            <Text variant="Pricing-Detail">$100/addtional page</Text>
          </CardStarted>
          <CardStarted title="Ui Design" price="1200$" color="#233679">
            <Text variant="Pricing-Detail">Web & Mobile</Text>
            <Text variant="Pricing-Detail">Well-documented</Text>
            <Text variant="Pricing-Detail">8 revisions</Text>
            <Text variant="Pricing-Detail">$100/addtional page</Text>
          </CardStarted>
          <CardStarted title="Ui Design" price="1200$" color="#792366">
            <Text variant="Pricing-Detail">Daily backup</Text>
            <Text variant="Pricing-Detail">3 h of mantinenance</Text>
            <Text variant="Pricing-Detail">Including fixing</Text>
            <Text variant="Pricing-Detail">$50/addtional page</Text>
          </CardStarted>
        </Flex>
      </Box>
    </Box>
  );
};

export default Started;
