import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import WorkImage from "../../../public/main/How We Work Illustration.png";
import SectionBadge from "../../Typografy/SectionBadge";
import SectionParagraph from "../../Typografy/SectionParagraph";
import SectionTitle from "../../Typografy/SectionTitle";

const Work = () => {
  return (
    <Box mt="6rem">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box flex={1}>
          <Image src={WorkImage} placeholder="blur" />
        </Box>
        <Box flex={1} mt={16}>
          <SectionBadge>HOW WE WORK?</SectionBadge>
          <SectionTitle>
            {" "}
            Everything is well planned, well designed and developed
            wholeheartedly
          </SectionTitle>
          <SectionParagraph>
            {" "}
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </SectionParagraph>
        </Box>
      </Flex>
    </Box>
  );
};

export default Work;
