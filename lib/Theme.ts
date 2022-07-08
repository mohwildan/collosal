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
      bg: "#292944",
      color: "#fff"
    }
  })
}

export const theme = extendTheme({ colors, components, styles });
