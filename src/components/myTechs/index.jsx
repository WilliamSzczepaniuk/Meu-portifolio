import { Flex, Box, Heading } from "@chakra-ui/react";
import { Tittle } from "../Tittle";
import { Skills } from "./skills";

export const MyTechs = () => {
  return (
    <Flex flexDirection={"column"} alignItems="center">
      <Tittle tittle="Meus domínios na área tech" />
      <Box
        p={[1, 2, 3]}
        borderRadius="100px 25px 100px 25px"
        mt={[10, 20, "100px"]}
        border="7px inset #4531A4"
        w={[200, 400, 500]}
      >
        <Flex color={"white"} flexDirection={"column"} alignItems="center">
          <Heading
            fontFamily={"Roboto, sans-serif"}
            color="#FFFFFF"
            background={"rgba(14,1,36,1)"}
            textShadow="2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5"
          >
            Front end
          </Heading>
          <Box
            fontWeight={"light"}
            fontFamily="Roboto,sans-serif"
            mt={[1, 2, 3]}
          >
            <Skills text="JavaScript" />
            <Skills text="React" />
            <Skills icon={false} text="TypeScript" />
            <Skills text="Styled Components" />
            <Skills text="Redux" />
            <Skills text="Git" />
            <Skills text="Material UI" />
            <Skills text="CSS" />
            <Skills text="Context API" />
            <Skills text="Chakra UI" />
            <Skills text="Consumo de API" />
            <Skills text="Vercel" />
            <Skills icon={false} text="Laravel" />
            <Skills icon={false} text="PHP" />
            <Skills icon={false} text="NextJs" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
