import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  src: StaticImageData;
}

const ImageSponsore: FC<Props> = ({src}) => {
  return (
    <Box>
      <Image src={src} placeholder="blur"/>
    </Box>
  );
};

export default ImageSponsore;
