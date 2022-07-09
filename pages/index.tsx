import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/section/home/Hero";
import Porojects from "../components/section/home/Porojects";
import Started from "../components/section/home/Started";
import Team from "../components/section/home/Team";
import Work from "../components/section/home/Work";

const Home: NextPage = () => {
  return (
    <>
    <Hero />
    <Work />
    <Team />
    <Porojects />
    <Started />
    </>
  );
};

export default Home;
