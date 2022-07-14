import { Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionTitle: FC<Props> = ({ children }) => {
  return (
    <Heading as="h1" variant="Section-Title" mt={4}>
      {children}
    </Heading>
  );
};

export default SectionTitle;
