import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { Tittle } from "../Tittle";
import { Skills } from "./skills";

export const MyTechs = () => {
  return (
    <Flex flexDirection={"column"} alignItems="center">
      <Tittle tittle="Meus domínios na área tech" />
      <Box
        borderRadius={"10px"}
        mt={[10, 20, 30]}
        border="inset white 10px"
        borderColor={"white"}
        bg={"darkgray.100"}
        w={[200, 400, 600]}
      >
        <Flex color={"white"} flexDirection={"column"} alignItems="center">
          <Heading
            color="#FFFFFF"
            background={"rgba(14,1,36,1)"}
            textShadow="2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5"
          >
            Front end
          </Heading>
          <Box>
            <Skills icon={false} text="JavaScript" />
            <Skills text="React" />
            <Skills text="TypeScript" />
            <Skills text="Styled Components" />
            <Skills text="Redux" />
            <Skills text="Git" />
            <Skills text="Material UI"></Skills>
            <Skills text="CSS"></Skills>
            <Skills text="Context"> API</Skills>
            <Skills text="Chakra UI"></Skills>
            <Skills text="Consumo de API"></Skills>
            <Skills text="Vercel"></Skills>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
