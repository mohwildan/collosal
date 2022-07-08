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
        icon={FiFigma}
        text="Design"
        desc="The project interface will be designed first, our favorite tool is Figma."
      />
      <Card
        icon={BsCode}
        text="Develop"
        desc="Transform design and write business logic here. Choose the technology you want."
      />
      <Card
        icon={BsBox}
        text="Ship"
        desc="After the work is complete, we will send the project and all its assets to you."
      />
    </Flex>
  );
};

export default CardMain;
