import { Box, Container, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Box
      as="nav"
      w="full"
      h="120px"
      pos="fixed"
      zIndex={99}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <Stack direction="row">
          <NavItem href="/service">Service</NavItem>
          <NavItem href="/Work">How We Work</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/about">About</NavItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
