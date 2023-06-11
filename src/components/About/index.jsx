import { Flex, Text, Image, Box } from "@chakra-ui/react";
import image from "../../assets/myPicture.jpg";
import { Tittle } from "../Tittle";
import { ListIcons } from "./ListIcons";

export const About = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      w={"100%"}
      id="Sobre"
    >
      <Tittle tittle="Um pouco sobre mim" />
      <ListIcons />
      <Image
        border={"solid 3px #36315e"}
        borderRadius={[200, 200, 200]}
        w={[130, 160, 300]}
        src={image}
      />

      <Flex
        flexDirection={"column"}
        pt={"3"}
        textAlign={"center"}
        color={"white"}
        h={[150, 200, 300]}
        w={[270, 300, 500]}
        fontSize={[12, 14, 20]}
      >
        <Text
          fontFamily={"Roboto, sans-serif"}
          fontSize={[12, 13, 16]}
          m={1}
          p={"2"}
          color="white"
        >
          Tenho estudado e me aprimorado a alguns anos e acredito estar pronto
          para começar a minha jornada. Quero uma oportunidade para mostrar a
          minha capacidade de crescer e aprimorar os meus conhecimentos sobre
          tecnologia e também minhas habilidades profissionais (soft-skills).
        </Text>
      </Flex>
    </Flex>
  );
};
