import { Flex, Heading } from "@chakra-ui/react";
import { LinkButton } from "./linkButton";
export const Header = () => {
  return (
    <Flex
      bg={"black"}
      opacity={"78%"}
      float={"initial"}
      position={"fixed"}
      w={"100vw"}
      justifyContent={"space-evenly"}
      display={"flex"}
      h={12}
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
