import { Box, chakra, Heading, Icon, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: IconType;
  text: string;
  desc: String;
  delay?: any;
  type?: any;
  duration?: any;
}
const BoxAnimate = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
const Card: FC<Props> = ({
  desc,
  text,
  icon,
  delay = 0,
  type = "spring",
  duration = 1,
}) => {
  return (
    <BoxAnimate
      bg="rgba(255,255,255, 0.05)"
      p={8}
      flex={1}
      h="270px"
      maxW={{ base: "100%", sm: "400px", md: "320px" }}
      borderRadius="5px"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, type, duration }}
    >
      <Box bg="rgba(255,255,255, 0.03)" w="fit-content" px={2} py={1}>
        <Icon as={icon} fontSize="2rem" color="white" />
      </Box>
      <Heading mt={8} variant="Feature-Card-Title">
        {text}
      </Heading>
      <Text mt={2} variant="Feature-Card-Description">
        {desc}
      </Text>
    </BoxAnimate>
  );
};

export default Card;
