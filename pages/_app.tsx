import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/Theme";
import Layout from "../components/Layout/Main";
import Font from "../lib/components/Font";
import { useState } from "react";
import { useEffect } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
        <ChakraProvider theme={theme}>
          <Font />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
    );
  }
}

export default MyApp;
