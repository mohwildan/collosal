import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import TeamImage from "../../../public/main/Team Illustration.png";
import SectionBadge from "../../Typografy/SectionBadge";
import SectionParagraph from "../../Typografy/SectionParagraph";
import SectionTitle from "../../Typografy/SectionTitle";

const Team = () => {
  return (
    <Box mt="6rem">
      <Flex flexDir={{ base: "column-reverse", md: "row" }}>
        <Box flex={1} mt={16}>
          <SectionBadge>OUR TEAM</SectionBadge>
          <SectionTitle>
            {" "}
            We&apos;re a team of designers, engineers and analysts
          </SectionTitle>
          <SectionParagraph>
            {" "}
            Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results.
          </SectionParagraph>
          <Button variant="secondary-Light" mt={6}>
            See Our Teams
          </Button>
        </Box>
        <Box flex={1}>
          <Image src={TeamImage} placeholder="blur" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Team;
