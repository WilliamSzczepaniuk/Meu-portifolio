import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { useContext } from "react";

import { contentContext } from "../Providers/Content";
import { useEffect } from "react";

export const Page = () => {
  const { actualComponent, setActualComponent } = useContext(contentContext);

  console.log(actualComponent);
  return (
    <Box
      h={"100vh"}
      background={`linear-gradient(0deg, rgba(14,1,36,1) 0%, rgba(31,5,68,1) 50%, rgba(12,1,32,1) 100%)`}
    >
      <Header setActualComponent={setActualComponent} />
      <Box fontFamily={"helvetica"} w={"100vw"}>
        <Box>{actualComponent}</Box>
      </Box>
    </Box>
  );
};
