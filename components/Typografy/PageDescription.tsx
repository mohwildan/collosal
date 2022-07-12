import { Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const PageDescription: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Text mt={4} variant="Page-Description">
        {children}
      </Text>
    </motion.div>
  );
};

export default PageDescription;
