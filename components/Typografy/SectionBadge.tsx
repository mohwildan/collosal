import { Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const SectionBadge: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 0.6, delay: 0.1,type:"spring" }}
    >
      <Heading as="h3" variant="Section-Badge">
        {children}
      </Heading>
    </motion.div>
  );
};

export default SectionBadge;
