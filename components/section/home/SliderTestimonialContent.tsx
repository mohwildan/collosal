import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  image: StaticImageData;
  name: string;
  company: string;
}

const SliderTestimonialContent: FC<Props> = ({
  children,
  image,
  name,
  company,
}) => {
  return (
    <Flex
      flexDir="column"
      bg="rgba(255,255,255, 0.05)"
      w="full"
      h="450px"
      borderRadius="3px"
      p="2rem"
      textAlign="center"
    >
      <Box mt={9}>
        <Image src={image} style={{height: "30px", width: "30px"}} alt={name} placeholder="blur"/>
        <Heading variant="Testimonial-Name" mt={3}>{name}</Heading>
        <Text mt={1} variant="Testimonial-Company">{company}</Text>
        <Box mt={8}>
          <Text variant="Testimonial-Description">{children}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SliderTestimonialContent;
