import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";
import { NodeProps } from "../../type/Interface";
import Navbar from "../Navbar/Navbar";

const Main: FC<NodeProps> = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <title>Collosal - Home</title>
      </Head>
      <Navbar />
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
};

export default Main;
