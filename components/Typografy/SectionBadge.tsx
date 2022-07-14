import { Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionBadge: FC<Props> = ({ children }) => {
  return (
    <Heading as="h3" variant="Section-Badge">
      {children}
    </Heading>
  );
};

export default SectionBadge;
