import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  price: string;
  children: ReactNode;
  color: string;
}

const CardStarted: FC<Props> = ({ title, price, children, color }) => {
  return (
    <Box bg={color} w={{base: "100%", sm: "350px", md: "400px"}} flex={1} px={5} borderRadius="10px">
      <Flex justifyContent="space-between" alignItems="flex-start" mt="4rem">
        <Heading mt={2} variant="Price-Title">{title}</Heading>
        <Box>
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)">
            Starting from
          </Text>
          <Heading variant="Pricing-Price">{price}</Heading>
        </Box>
      </Flex>
      <Box mt="4rem" textAlign="center">{children}</Box>
      <Button mb="4rem" color={color} mt={8} variant="Secondary">Detail</Button>
    </Box>
  );
};

export default CardStarted;
