import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { Tittle } from "../Tittle";
export const MyTechs = () => {
  return (
    <Flex
      bg={"black"}
      id="Tecnologias"
      flexDirection={"column"}
      alignItems="center"
    >
      <Tittle tittle="   Meus domínios na área tech" />
      <Box mt={[10, 20, 30]} bg={"darkgray.100"} w={[200, 400, 600]}>
        <Flex flexDirection={"column"} alignItems="center">
          <Heading>Front end</Heading>
          <Text>Css</Text>
          <Text>React</Text>
          <Text>JavaScript</Text>
          <Text>HTML5</Text>
          <Text>Chakra-Ui</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
