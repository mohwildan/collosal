import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageDescription: FC<Props> = ({ children }) => {
  return (
    <Text mt={4} variant="Page-Description">
      {children}
    </Text>
  );
};

export default PageDescription;
