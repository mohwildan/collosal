import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div style={{ paddingTop: "10rem" }}>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      {children}
    </div>
  );
};

export default Layout;
