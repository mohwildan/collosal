import Card from "./Card";
import { FiFigma } from "react-icons/fi";
import { BsBox, BsCode } from "react-icons/bs";
import { Flex } from "@chakra-ui/react";

const CardMain = () => {
  return (
    <Flex
      gap={10}
      flexDir={{ base: "column", md: "row" }}
      mt="8rem"
      justifyContent="center"
      alignItems="center"
    >
      <Card
      delay={0.6}
        icon={FiFigma}
        text="Design"
        desc="The project interface will be designed first, our favorite tool is Figma."
      />
      <Card
      delay={0.7}
        icon={BsCode}
        text="Develop"
        desc="Transform design and write business logic here. Choose the technology you want."
      />
      <Card
      delay={0.8}
        icon={BsBox}
        text="Ship"
        desc="After the work is complete, we will send the project and all its assets to you."
      />
    </Flex>
  );
};

export default CardMain;
