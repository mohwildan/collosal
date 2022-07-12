import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const SectionParagraph: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Text variant="Section-Paragraph" mt={6}>
        {children}
      </Text>
    </motion.div>
  );
};

export default SectionParagraph;
