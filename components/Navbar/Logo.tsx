import {  Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import LogoCollosal from "../../public/Logo/Group 55.svg";

const Logo = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <Image src={LogoCollosal} />
      <Heading fontSize="24px">Collosal.</Heading>
    </Flex>
  );
};

export default Logo;
