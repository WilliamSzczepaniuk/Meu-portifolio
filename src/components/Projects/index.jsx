import { Heading, Box, Flex } from "@chakra-ui/react";
import { ListCard } from "./listCard";
import { arrayProjects } from "../../assets/ArrayProjects";
import { Tittle } from "../Tittle";
export const Projects = () => {
  return (
    <Flex
      alignItems={"center"}
      h={"100%"}
      flexDirection={"column"}
      id="Projetos"
    >
      <Tittle tittle="Projetos em equipe e próprios" />
      <Box mt={10}>
        <ListCard arrayProjects={arrayProjects} />
      </Box>
    </Flex>
  );
};
