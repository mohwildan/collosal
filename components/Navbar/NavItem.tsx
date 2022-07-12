import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: ReactNode;
}

const NavItem: FC<Props> = ({ href, children }) => {
  const router = useRouter();
  return (
    <NextLink href={href}>
      <Link color={router.asPath === href ? "#16fcd2" : "rgba(255,255,255,0.8)"} fontSize="1rem" mr="2rem">
        {children}
      </Link>
    </NextLink>
  );
};

export default NavItem;
