import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionParagraph: FC<Props> = ({ children }) => {
  return (
    <Text variant="Section-Paragraph" mt={6}>
      {children}
    </Text>
  );
};

export default SectionParagraph;
