import { extendTheme } from "@chakra-ui/react";
import { Heading, Text, Button } from "./components";

const colors = {
  juju: {
    50: "#fff",
  },
};

const components = {
  Button,
  Heading,
  Text,
};

const styles = {
  global: () => ({
    body: {
      bg: "linear-gradient(90deg, rgba(35,26,33,1) 0%, rgba(16,31,49,1) 53%, rgba(35,12,40,1) 100%)",
      color: "#fff"
    }
  })
}

export const theme = extendTheme({ colors, components, styles });
