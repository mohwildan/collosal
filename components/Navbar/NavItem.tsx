import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { NodeProps } from "../../type/Interface";
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
      <Link color={router.asPath === href ? "#16fcd2" : "rgba(255,255,255,0.8)"} fontSize="1rem">
        <a style={{ marginRight: "2rem", }}>{children}</a>
      </Link>
    </NextLink>
  );
};

export default NavItem;