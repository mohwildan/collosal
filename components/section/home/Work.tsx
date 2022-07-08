import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import WorkImage from "../../../public/main/How We Work Illustration.png";

const Work = () => {
  return (
    <Box mt="6rem">
      <Flex flexDir={{base: "column", md: "row"}}>
        <Box flex={1}>
          <Image src={WorkImage} placeholder="blur" />
        </Box>
        <Box flex={1} mt={16}>
          <Heading variant="Section-Badge">HOW WE WORK?</Heading>
          <Heading variant="Section-Title" mt={4}>
            Everything is well planned, well designed and developed
            wholeheartedly
          </Heading>
          <Text variant="Section-Paragraph" mt={6}>
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Work;
