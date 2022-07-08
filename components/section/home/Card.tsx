import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: IconType;
  text: string;
  desc: String;
}

const Card: FC<Props> = ({ desc, text, icon }) => {
  return (
    <Box
      bg="rgba(255,255,255, 0.05)"
      p={8}
      flex={1}
      h="270px"
      maxW={{ base: "100%", sm: "400px", md: "320px" }}
      borderRadius="5px"
    >
      <Box bg="rgba(255,255,255, 0.03)" w="fit-content" px={2} py={1}>
        <Icon as={icon} fontSize="2rem" color="white"/>
      </Box>
      <Heading mt={8} variant="Feature-Card-Title">
        {text}
      </Heading>
      <Text mt={2} variant="Feature-Card-Description">
        {desc}
      </Text>
    </Box>
  );
};

export default Card;
