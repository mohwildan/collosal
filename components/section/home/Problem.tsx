import { Button, Flex, Heading } from "@chakra-ui/react";

const Problem = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
      borderY="1px solid rgba(255,255,255, 0.2)"
      mt="5rem"
      p="3rem"
      gap={{ base: "2rem", md: "4rem" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Heading
        variant="Section-Title"
        textAlign={{ base: "center", md: "left" }}
      >
        We&apos;ve prepared everything, it&apos;s time for you to tell the problem
      </Heading>
      <Flex gap={4} flexDir={{ base: "column", sm: "row" }}>
        <Button variant="Primary">Send Quote</Button>
        <Button variant="secondary-Light">Ask Us</Button>
      </Flex>
    </Flex>
  );
};

export default Problem;
