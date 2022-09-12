import { Flex } from "@chakra-ui/react";
import { MyTechs } from "../myTechs";
import { Projects } from "../Projects";
import { LinkButton } from "./linkButton";
import { Qualifications } from "../Contact";
import { About } from "../About";
export const Header = () => {
  return (
    <Flex
      background={"rgba(14,1,36,1)"}
      h={["35px", 45, 50]}
      w={"100vw"}
      justifyContent={"space-evenly"}
      display={"flex"}
    >
      <Flex
        fontFamily={"Roboto, sans-serif"}
        justifyContent={"space-evenly"}
        w={"100%"}
      >
        <LinkButton component={About} description={"Sobre"} />
        <LinkButton component={MyTechs} description={"Tecnologias"} />
        <LinkButton component={Qualifications} description={"Contato"} />
        <LinkButton component={Projects} description={"Projetos"} />
      </Flex>
    </Flex>
  );
};
