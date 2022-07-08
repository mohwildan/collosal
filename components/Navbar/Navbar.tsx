import { Box, Button, Container, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Box
      as="nav"
      w="full"
      h="80px"
      pos="fixed"
      zIndex={99}
      css={{ backdropFilter: "blur(10px)" }}
      display="flex"
      alignItems="center"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
      >
        <Logo />
        <Stack direction="row" display={{ base: "none", md: "flex" }}>
          <NavItem href="/service">Service</NavItem>
          <NavItem href="/Work">How We Work</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/about">About</NavItem>
        </Stack>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          variant="secondary-Light-SM"
          size="sm"
        >
          Contact
        </Button>
      </Container>
    </Box>
  );
};

export default Navbar;
