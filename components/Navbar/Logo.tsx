import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import LogoCollosal from "../../public/Logo/Group 55.svg";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  delay?: number;
  children: ReactNode;
}

const AnimationsLogo: FC<Props> = ({ delay = 0, children }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      {children}
    </motion.span>
  );
};

const Logo = () => {
  return (
    <Flex alignItems="center" gap={2} cursor="pointer">
      <motion.div
        whileInView={{ rotate: -90 }}
        transition={{ delay: 0.3, duration: 0.2, type: "spring" }}
      >
        <Image src={LogoCollosal} />
      </motion.div>
      <Heading fontSize="24px">
        <AnimationsLogo>C</AnimationsLogo>
        <AnimationsLogo delay={0.1}>o</AnimationsLogo>
        <AnimationsLogo delay={0.2}>l</AnimationsLogo>
        <AnimationsLogo delay={0.3}>l</AnimationsLogo>
        <AnimationsLogo delay={0.4}>o</AnimationsLogo>
        <AnimationsLogo delay={0.5}>s</AnimationsLogo>
        <AnimationsLogo delay={0.6}>a</AnimationsLogo>
        <AnimationsLogo delay={0.7}>l</AnimationsLogo>
        <AnimationsLogo delay={0.8}>.</AnimationsLogo>
      </Heading>
    </Flex>
  );
};

export default Logo;
