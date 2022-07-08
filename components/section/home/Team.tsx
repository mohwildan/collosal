import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import TeamImage from "../../../public/main/Team Illustration.png";

const Team = () => {
  return (
    <Box mt="6rem">
      <Flex flexDir={{ base: "column-reverse", md: "row" }}>
        <Box flex={1} mt={16}>
          <Heading variant="Section-Badge">OUR TEAM</Heading>
          <Heading variant="Section-Title" mt={4}>
            We&apos;re a team of designers, engineers and analysts
          </Heading>
          <Text variant="Section-Paragraph" mt={6}>
            Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results.
          </Text>
          <Button variant="secondary-Light" mt={6}>See Our Teams</Button>
        </Box>
        <Box flex={1}>
          <Image src={TeamImage} placeholder="blur" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Team;
