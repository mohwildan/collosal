import { Flex } from "@chakra-ui/react";
import ImageSponsore from "./ImageSponsore";
import ForebaseImage from "../../../public/patner/Vector-2.png";
import GIthubImage from "../../../public/patner/Github Logo.png";
import FacbookImage from "../../../public/patner/Vector-1.png";
import GoogleImage from "../../../public/patner/Google Logo.png";
import MicrosoftImage from "../../../public/patner/Vector-3.png";

const Seponsor = () => {
  return (
    <Flex
      w="full"
      h="100px"
      alignItems="center"
      mb={4}
      gap={3}
      justifyContent="space-around"
      borderY="1px solid rgba(255,255,255, 0.2)"
      mt="5rem"
    >
      <ImageSponsore src={GIthubImage} />
      <ImageSponsore src={ForebaseImage} />
      <ImageSponsore src={GoogleImage} />
      <ImageSponsore src={MicrosoftImage} />
      <ImageSponsore src={FacbookImage} />
    </Flex>
  );
};

export default Seponsor;
