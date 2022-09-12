import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { useContext } from "react";
import { ContentContext } from "../Providers/Content";

export const Page = () => {
  const { actualComponent } = useContext(ContentContext);

  return (
    <Box
      minHeight={"100vh"}
      h={"100%"}
      background={`linear-gradient(0deg, rgba(14,1,36,1) 0%, rgba(31,5,68,1) 50%, rgba(12,1,32,1) 100%)`}
    >
      <Header />
      <Box fontFamily={"helvetica"} w={"100vw"}>
        <Box>{actualComponent}</Box>
      </Box>
    </Box>
  );
};
