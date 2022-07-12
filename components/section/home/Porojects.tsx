import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ImageMobileApp from "../../../public/main/Project Card1.png";
import ImageDesktopApp from "../../../public/main/Project Card2.png";
import Buble1 from "../../../public/bububle/Ellipse 15.svg";
import Buble2 from "../../../public/bububle/Ellipse 16.svg";
import Buble3 from "../../../public/bububle/Ellipse 17.svg";
import { motion } from "framer-motion";

const Porojects = () => {
  return (
    <Box mt="6rem" textAlign="center" pos="relative">
      <motion.div
        initial={{ x: "-5rem" }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 1.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Box position="absolute" left="2rem" zIndex={-1}>
          <Image src={Buble1} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: "-5rem" }}
        whileInView={{ y: 0 }}
        transition={{ type: "tween", duration: 1.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Box position="absolute" right="2rem" top={0} zIndex={-1}>
          <Image src={Buble2} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: "5rem" }}
        whileInView={{ y: 0 }}
        transition={{ type: "tween", duration: 1.3 }}
        viewport={{ amount: 0.5 }}
      >
        <Box position="absolute" right="2rem" top="5rem" zIndex={-1}>
          <Image src={Buble3} />
        </Box>
      </motion.div>
      <Container>
        <Heading variant="Section-Badge">PROJECTS</Heading>
        <Heading mt={4} variant="Section-Title">
          We have completed many amazing projects that you will not believe
        </Heading>
      </Container>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        mt={12}
        gap={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDir="column">
          <Image src={ImageMobileApp} placeholder="blur" />
          <Heading mt={4} variant="Project-Title">
            The Mobile Landing Page
          </Heading>
          <Text variant="Project-Description">
            A landing page for mobile app
          </Text>
          <Button
            alignSelf="center"
            mt={4}
            variant="secondary-outline-SM"
            borderRadius="full"
          >
            Detail
          </Button>
        </Flex>
        <Flex flexDir="column">
          <Image src={ImageDesktopApp} placeholder="blur" />
          <Heading mt={4} variant="Project-Title">
            The Mobile Landing Page
          </Heading>
          <Text variant="Project-Description">
            A landing page for mobile app
          </Text>
          <Button
            alignSelf="center"
            mt={4}
            variant="secondary-outline-SM"
            borderRadius="full"
          >
            Detail
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Porojects;
