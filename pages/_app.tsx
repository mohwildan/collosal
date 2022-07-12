import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/Theme";
import Layout from "../components/Layout/Main";
import Font from "../lib/components/Font";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        <ChakraProvider theme={theme}>
          <Font />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AnimatePresence>
    );
  }
}

export default MyApp;
