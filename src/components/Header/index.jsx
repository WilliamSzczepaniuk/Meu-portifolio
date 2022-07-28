import { Flex, Heading } from "@chakra-ui/react";
import { MyTechs } from "../myTechs";
import { Projects } from "../Projects";
import { LinkButton } from "./linkButton";
import { Qualifications } from "../Contact";
import { About } from "../About";
export const Header = ({ setActualComponent }) => {
  return (
    <Flex
      background={"rgba(14,1,36,1)"}
      h={["35px", 45, 50]}
      w={"100vw"}
      justifyContent={"space-evenly"}
      display={"flex"}
    >
      <Flex justifyContent={"space-evenly"} w={"100%"}>
        <LinkButton
          component={About}
          setActualComponent={setActualComponent}
          description={"Sobre"}
        />
        <LinkButton
          component={MyTechs}
          setActualComponent={setActualComponent}
          description={"Tecnologias"}
        />
        <LinkButton
          component={Qualifications}
          setActualComponent={setActualComponent}
          description={"Contato"}
        />
        <LinkButton
          component={Projects}
          setActualComponent={setActualComponent}
          description={"Projetos"}
        />
      </Flex>
    </Flex>
  );
};
