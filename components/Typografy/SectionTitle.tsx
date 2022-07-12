import { Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const SectionTitle: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 0.6, delay: 0.5, type:"spring"}}
    >
      <Heading as="h1" variant="Section-Title" mt={4}>
        {children}
      </Heading>
    </motion.div>
  );
};

export default SectionTitle;
