import { Skip, Flex, Heading } from "@chakra-ui/react";
import { Link, scroller, Element } from "react-scroll";
import { LinkButton } from "./linkButton";
export const Header = () => {
  scroller.scrollTo("", {
    duration: 1500,
    delay: 100,
    smoth: true,
    containerId: "SobreLink",
    offSet: 50,
  });
  return (
    <Flex
      bg={"black"}
      opacity={"88%"}
      position={"fixed"}
      w={"100vw"}
      justifyContent={"space-evenly"}
      display={"flex"}
    >
      <Heading px={[1, 2, 3]} py="3" fontSize={[14, 20, 30]} w={"100%"}>
        Will/dev
      </Heading>
      <Flex justifyContent={"space-evenly"} w={"100%"}>
        <LinkButton description={"Sobre"} />
        <LinkButton description={"Tecnologias"} />
        <LinkButton description={"Qualificações"} />
        <LinkButton description={"Projetos"} />
      </Flex>
    </Flex>
  );
};
